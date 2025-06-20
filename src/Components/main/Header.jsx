import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../styles/header.css";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const cookies = document.cookie.split('; ');
        const userCookie = cookies.find(row => row.startsWith('token='));
        setIsLoggedIn(!!userCookie);
    }, [location]);

    const handleLogout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        navigate('/wattwizards-platform');
    };

    const routes = [
        { path: 'programs', name: 'Programs' },
        { path: 'workspace', name: 'Workspace' },
        { path: 'products', name: 'Products' }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredResults([]);
            setSelectedIndex(-1);
        } else {
            const filtered = routes.filter(route => route.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredResults(filtered);
            setSelectedIndex(-1);
        }
    }, [searchTerm]);

    const handleSearchSelect = (path) => {
        setSearchTerm('');
        setFilteredResults([]);
        setSelectedIndex(-1);

        const foundRoute = routes.find(route => route.path === path);
        if (foundRoute) {
            navigate(foundRoute.path);
        } else {
            navigate('/not-found');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && selectedIndex >= 0 && selectedIndex < filteredResults.length) {
            handleSearchSelect(filteredResults[selectedIndex].path);
        } else if (e.key === 'ArrowDown' && selectedIndex < filteredResults.length - 1) {
            setSelectedIndex(prevIndex => prevIndex + 1);
        } else if (e.key === 'ArrowUp' && selectedIndex > 0) {
            setSelectedIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleMouseEnter = (index) => {
        setSelectedIndex(index);
    };

    return (
        <nav className={`navbar navbar-expand-lg p-4 shadow-sm fixed-top header-nav ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <Link className='navbar-brand text-light' to='/wattwizards-platform'>
                    <strong>Watt<span>Wizards</span></strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end text-light" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">WattWizards</h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            {routes.map((route, index) => (
                                <li className="nav-item" key={index}>
                                    <Link
                                        className="nav-link text-light text-uppercase"
                                        to={route.path}
                                        onClick={route.name === 'Logout' ? handleLogout : undefined}
                                    >
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Search Bar */}
                        <div className="position-relative me-2 position-relative w-100 w-lg-auto">
                            <input
                                className="form-control bg-light text-dark"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            {searchTerm && (
                                <ul className="list-group position-absolute bg-white shadow w-100 rounded" style={{ top: '100%', left: 0, zIndex: 1050 }}>
                                    {filteredResults.length > 0 ? (
                                        filteredResults.map((result, index) => (
                                            <li
                                                className={`list-group-item list-group-item-action ${selectedIndex === index ? 'bg-primary text-light' : ''}`}
                                                key={index}
                                                onClick={() => handleSearchSelect(result.path)}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {result.name}
                                            </li>
                                        ))
                                    ) : (
                                        <li
                                            className="list-group-item list-group-item-action text-muted"
                                            onClick={() => handleSearchSelect('/not-found')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            No results found
                                        </li>
                                    )}
                                </ul>
                            )}
                        </div>

                        {/* Icons */}
                        <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                            <Link to="/wattwizards-platform/profile" className="text-light fs-5" title="Profile">
                                <i className="fas fa-user"></i>
                            </Link>
                            {isLoggedIn ? (
                                <span className="text-light fs-5" style={{ cursor: 'pointer' }} onClick={handleLogout} title="Logout">
                                    <i className="fas fa-door-closed"></i>
                                </span>
                            ) : (
                                <Link to="/wattwizards-platform/login" className="text-light fs-5" title="Login">
                                    <i className="fas fa-door-open"></i>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import data from '../env/data.json';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { faMailForward } from '@fortawesome/free-solid-svg-icons/faMailForward';
import "../styles/footer.css";

function Footer() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <footer className="footer text-center text-lg-start p-5">
            <div className="row p-4 justify-content-center">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="text-center text-md-start">
                        <Link to="/wattwizards-platform">
                            <img
                                src={logo}
                                alt="Logo"
                                className="img-fluid mb-3"
                                style={{ maxWidth: '100px' }}
                            />
                        </Link>
                        <p className="text-light">{data.company.description}</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 text-center">
                    <h5 className="text-uppercase text-light mb-4">Services</h5>
                    <ul className="list-unstyled">
                        <li className='mb-3'>
                            <Link to="/wattwizards-platform/programs">
                                {data.services['available-programs']}
                            </Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="/wattwizards-platform/workspace">
                                {data.services['electrical-circuit-analysis']}
                            </Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="/wattwizards-platform/vault">
                                {data.services['energy-consumption-monitoring']}
                            </Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="/wattwizards-platform/achievments">
                                {data.services['achievments']}
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 text-center">
                    <h5 className="text-uppercase text-light mb-4">Contact</h5>
                    <p className="text-light mb-2">
                        <FontAwesomeIcon icon={faHome} className="me-2" />
                        {data.company.contact.address}
                    </p>
                    <p className="text-light mb-2">
                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                        {data.company.contact.phone}
                    </p>
                    <p className="text-light mb-2">
                        <FontAwesomeIcon icon={faMailForward} className="me-2" />
                        <a href="mailto:xoperations.contact@gmail.com" target='_blank' 
                        className="link-info">xoperations.contact@gmail.com</a>
                    </p>
                    <div className="links">
                        <a
                            href="https://www.linkedin.com/in/ahmed-medhat-ramadan-4061b7263"
                            className="me-4 link-info"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                            {data.authors['ahmed-medhat']}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/loucas-monir-b0a50b2b6"
                            className="me-4 link-info"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                            {data.authors['loucas-monir']}
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 border-top pt-4 text-light">
                <p>
                    © {new Date().getFullYear()} {data.company.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
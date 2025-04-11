import Features from "./Features.jsx";
import Programs from "./Programs.jsx";
import SparkTalk from "./SparkTalk.jsx";

function Homepage() {
    return (
        <>
            <div className='home-landing p-3'>
                <section className='home' id='home'>
                    <div className='CodeCrafters'>
                        <div className='CodeCrafters-desc'>
                            <h2>PNTI Teams</h2>
                            <p className="fw-bold fs-5">
                                WattWizards, developed by the PNTI Teams, is an innovative web application that addresses key challenges in electrical engineering. 
                                It simplifies circuit analysis, minimizes errors, and offers tools for project management, inventory, and both online/offline workspaces. 
                                As Egypt’s first platform of its kind targeting a broad audience, 
                                it’s powered by a high-performance server and has earned national awards, 
                                international recognition, and a place among the top 1,000 global projects.
                            </p>
                        </div>
                        <div className="CodeCrafters-img">
                            <div className="CodeCrafters-img-container">
                                <img src="https://img.freepik.com/premium-photo/electrical-engineer-hd-image_1012565-6359.jpg" />
                            </div>
                        </div>
                        <div className="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>
            </div>
            <SparkTalk />
            <Features />
            <Programs />
        </>
    )
};

export default Homepage;
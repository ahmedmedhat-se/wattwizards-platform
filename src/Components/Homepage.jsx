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
                                “WattWizards—Egypt’s first all-in-one circuit analysis platform—turns complex engineering into click-and-go simplicity. 
                                Built by PNTI Teams, it’s award-winning, globally ranked, and built to power precision, 
                                anywhere—online or off.”
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
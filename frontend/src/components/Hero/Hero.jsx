import React, { useState, useEffect } from "react";
import "../../style/components/Hero.scss";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";
import { SlideInFromRight, SlideInFromLeft } from "../../utils/AnimationText";
const Hero = () => {
    const isLarge = useIsLarge();
    const [responsiveOnscreen, setResponsiveOnscreen] = useState(null);
    const [responsiveOffscreen, setResponsiveOffscreen] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isLarge) {
            setResponsiveOnscreen("onscreen");
            setResponsiveOffscreen("offscreen");
            setShow(true);
        } else if (!isLarge && isLarge !== null) {
            setResponsiveOnscreen("onscreenMobile");
            setResponsiveOffscreen("offscreenMobile");
            setShow(true);
        }
    }, [isLarge]);
    return (
        <>
            {show && (
                <section className="hero-wrapper">
                    <div className="paddings innerWidth hero-container">
                        {/* side left */}
                        <div className="flexColStart hero-left">
                            <div className="hero-title">
                                <SlideInFromLeft scroll="on" duration={1.5}>
                                    <span className="orange-circle"></span>
                                </SlideInFromLeft>
                                <SlideInFromLeft scroll="on" duration={1.5}>
                                    <h1>
                                        Découvrez <br />
                                        des propriétées <br /> appropriées
                                    </h1>
                                </SlideInFromLeft>
                            </div>
                            <SlideInFromLeft scroll="on" duration={1.5}>
                                <div className="hero-des flexColStart">
                                    <span className="secondaryText">
                                        Trouvez très facilement une variété de
                                        biens immobiliers qui vous conviennent
                                    </span>
                                    <span className="secondaryText">
                                        Oubliez toutes les difficultés liées à
                                        la recherche d'une résidence pour vous
                                    </span>
                                </div>
                            </SlideInFromLeft>
                            <SlideInFromLeft scroll="on" duration={1.5}>
                                <div className="search-bar">
                                    <HiLocationMarker
                                        color="var(--blue)"
                                        size={25}
                                    />
                                    <input type="text" />
                                    <button className="button">
                                        Recherche
                                    </button>
                                </div>
                            </SlideInFromLeft>
                            <SlideInFromLeft scroll="on" >
                                <div className="flexCenter stats innerWidth">
                                    <div className="flexColStart stat">
                                        <span className="count">
                                            <CountUp
                                                start={88800}
                                                end={90000}
                                                duration={4}
                                            />
                                            <span className="orangeText">
                                                +
                                            </span>
                                        </span>
                                        <span className="secondaryText">
                                            Premium Products
                                        </span>
                                    </div>

                                    <div className="flexColStart stat">
                                        <span className="count">
                                            <CountUp
                                                start={1950}
                                                end={2000}
                                                duration={4}
                                            />
                                            <span className="orangeText">
                                                +
                                            </span>
                                        </span>
                                        <span className="secondaryText">
                                            Utilisateur satisfait
                                        </span>
                                    </div>

                                    <div className="flexColStart stat">
                                        <span className="count">
                                            <CountUp end={28} />
                                            <span className="orangeText">
                                                +
                                            </span>
                                        </span>
                                        <span className="secondaryText">
                                            Prix gagné
                                        </span>
                                    </div>
                                </div>
                            </SlideInFromLeft>
                        </div>
                        {/* side right */}

                        <div className="flexColEnd hero-right">
                            <SlideInFromRight scroll="on">
                                <div className="image-container">
                                    <img src="./images/hero-image.png" alt="" />
                                </div>
                            </SlideInFromRight>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Hero;

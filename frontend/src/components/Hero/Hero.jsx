import React, { useState, useEffect } from "react";
import "../../style/components/Hero.scss";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useIsLarge, useIsSmall } from "../../utils/useMediaQuery";

const Hero = () => {
    const isLarge = useIsLarge();
    const [responsiveOnscreen, setResponsiveOnscreen] = useState(null);
    const [responsiveOffscreen, setResponsiveOffscreen] = useState(null);
    const [show, setShow] = useState(false);
    const containerLtoR = {
        offscreen: {
            x: "-7rem",
            opacity: 0,
        },
        onscreen: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.35,
                type: "spring",
                duration: 2,
                bounce: 0.2,
            },
        },
        offscreenMobile: {
            y: "7rem",
            opacity: 0,
        },
        onscreenMobile: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.35,
                type: "spring",
                duration: 2,
                bounce: 0.2,
            },
        },
    };
    const containerRtoL = {
        offscreen: {
            x: "7rem",
            opacity: 0,
        },
        onscreen: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.35,
                type: "spring",
                duration: 2,
                bounce: 0.2,
            },
        },
        offscreenMobile: {
            y: "7rem",
            opacity: 0,
        },
        onscreenMobile: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.35,
                type: "spring",
                duration: 2,
                bounce: 0.2,
            },
        },
    };
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
        <div>
            {show && (
                <section className="hero-wrapper">
                    <div className="paddings innerWidth hero-container">
                        {/* side left */}
                        <div className="flexColStart hero-left">
                            <div className="hero-title">
                                <motion.span
                                    className="orange-circle"
                                    initial={responsiveOffscreen}
                                    whileInView={responsiveOnscreen}
                                    variants={containerLtoR}
                                ></motion.span>
                                <motion.h1
                                    initial={responsiveOffscreen}
                                    whileInView={responsiveOnscreen}
                                    variants={containerLtoR}
                                >
                                    Découvrez <br />
                                    des propriétées <br /> appropriées
                                </motion.h1>
                            </div>

                            <motion.div
                                className="hero-des flexColStart"
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerLtoR}
                            >
                                <span className="secondaryText">
                                    Trouvez très facilement une variété de biens
                                    immobiliers qui vous conviennent
                                </span>
                                <span className="secondaryText">
                                    Oubliez toutes les difficultés liées à la
                                    recherche d'une résidence pour vous
                                </span>
                            </motion.div>

                            <motion.div
                                className="search-bar"
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerLtoR}
                            >
                                <HiLocationMarker
                                    color="var(--blue)"
                                    size={25}
                                />
                                <input type="text" />
                                <button className="button">Recherche</button>
                            </motion.div>

                            <motion.div
                                className="flexCenter stats innerWidth"
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerLtoR}
                            >
                                <div className="flexColStart stat">
                                    <span className="count">
                                        <CountUp
                                            start={88800}
                                            end={90000}
                                            duration={4}
                                        />
                                        <span className="orangeText">+</span>
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
                                        <span className="orangeText">+</span>
                                    </span>
                                    <span className="secondaryText">
                                        Utilisateur satisfait
                                    </span>
                                </div>

                                <div className="flexColStart stat">
                                    <span className="count">
                                        <CountUp end={28} />
                                        <span className="orangeText">+</span>
                                    </span>
                                    <span className="secondaryText">
                                        Prix gagné
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                        {/* side right */}
                        <div className="flexColEnd hero-right">
                            <motion.div
                                className="image-container"
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerRtoL}
                            >
                                <img src="./images/hero-image.png" alt="" />
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Hero;

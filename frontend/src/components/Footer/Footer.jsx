import React, { useState, useEffect } from "react";
import "../../style/components/Footer.scss";
import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";
import { SlideInFromRight, SlideInFromLeft } from "../../utils/AnimationText";

const Footer = () => {
    const isLarge = useIsLarge();
    const [responsiveOnscreen, setResponsiveOnscreen] = useState(null);
    const [responsiveOffscreen, setResponsiveOffscreen] = useState(null);
    const [show, setShow] = useState(false);
    const containerLtoR = {
        offscreen: {
            x: "-7rem",
            y: 0,
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
            x: 0,
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
            y: 0,
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
            x: 0,
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
                <section className="footer-wrapper">
                    <div className="paddings innerWidth footer-container">
                        <SlideInFromLeft scroll="off" duration={1.5}>
                            <div className="footer-left">
                                <img
                                    src="./images/logo2.png"
                                    alt=""
                                    width={120}
                                />
                                <span className="secondaryText">
                                    Notre vision de faire le meilleur pour les
                                    gens <br />
                                    le meilleur endroit ou vivre pour eux.
                                </span>
                            </div>
                        </SlideInFromLeft>

                        <SlideInFromRight scroll="off" duration={1.5}>
                            <div
                                className="footer-right"
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerRtoL}
                            >
                                <span className="primaryText">information</span>
                                <span className="secondaryText">
                                    2A rue de l'Égalité, 39800, Poligny, FRANCE
                                </span>
                                <div className="footer-menu">
                                    <span>Propriété</span>
                                    <span>Services</span>
                                    <span>Produits</span>
                                    <span>A propos de nous</span>
                                </div>
                            </div>
                        </SlideInFromRight>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Footer;

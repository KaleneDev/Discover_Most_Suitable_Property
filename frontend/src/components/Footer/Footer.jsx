import React from "react";
import "../../style/components/Footer.scss";
import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";

const Footer = () => {
    const isLarge = useIsLarge();
    if (isLarge) {
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
        };
        return (
            <div>
                <section className="footer-wrapper">
                    <div className="paddings innerWidth footer-container">
                        <motion.div
                            className="footer-left"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={containerLtoR}
                        >
                            <img src="./images/logo2.png" alt="" width={120} />
                            <span className="secondaryText">
                                Notre vision de faire le meilleur pour les gens{" "}
                                <br />
                                le meilleur endroit ou vivre pour eux.
                            </span>
                        </motion.div>

                        <motion.div
                            className="footer-right"
                            initial="offscreen"
                            whileInView="onscreen"
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
                        </motion.div>
                    </div>
                </section>
            </div>
        );
    } else {
        const containerLtoR = {
            offscreen: {
                y: "7rem",
                opacity: 0,
            },
            onscreen: {
                y: 0,
                x: 0,
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
                // x: "7rem",
                y: "7rem",
                opacity: 0,
            },
            onscreen: {
                // x: 0,
                y: 0,
                x: 0,
                opacity: 1,
                transition: {
                    staggerChildren: 0.35,
                    type: "spring",
                    duration: 2,
                    bounce: 0.2,
                },
            },
        };
        return (
            <div>
                <section className="footer-wrapper">
                    <div className="paddings innerWidth footer-container">
                        <motion.div
                            className="footer-left"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={containerLtoR}
                        >
                            <img src="./images/logo2.png" alt="" width={120} />
                            <span className="secondaryText">
                                Notre vision de faire le meilleur pour les gens{" "}
                                <br />
                                le meilleur endroit ou vivre pour eux.
                            </span>
                        </motion.div>

                        <motion.div
                            className="footer-right"
                            initial="offscreen"
                            whileInView="onscreen"
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
                        </motion.div>
                    </div>
                </section>
            </div>
        );
    }
};

export default Footer;

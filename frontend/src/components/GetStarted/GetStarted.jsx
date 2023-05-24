import React from "react";
import "../../style/components/GetStarted.scss";
import { motion } from "framer-motion";
function GetStarted() {
    const containerLtoR = {
        offscreen: {
            x: "-7rem",
            opacity: 0,
        },
        onscreen: {
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
    const containerBtoT = {
        offscreen: {
            y: "7rem",
            opacity: 0,
        },
        onscreen: {
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
            <section className="getStarted-wrapper">
                <div className="paddings innerWidth getStarted-container">
                    <motion.div
                        className="inner-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={containerBtoT}
                    >
                        <motion.span
                            className="primaryText"
                            variants={containerBtoT}
                        >
                            Commencer avec Homyz
                        </motion.span>
                        <motion.span
                            className="secondaryText"
                            variants={containerBtoT}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. <br />
                            Trouver votre résidence maintenant
                        </motion.span>
                        <motion.div 
                        className="button__container"
                        variants={containerBtoT}>
                            <button className="button">
                                <motion.a href="mailto:apiou.kalene@gmail.com">
                                    Commencer
                                </motion.a>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default GetStarted;

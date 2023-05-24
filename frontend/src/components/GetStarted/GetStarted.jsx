import React, { useState, useEffect } from "react";
import "../../style/components/GetStarted.scss";
import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";

function GetStarted() {
    const isLarge = useIsLarge();
    const [responsiveOnscreen, setResponsiveOnscreen] = useState(null);
    const [responsiveOffscreen, setResponsiveOffscreen] = useState(null);
    const [show, setShow] = useState(false);

    const containerBtoT = {
        offscreen: {
            x: 0,
            y: "7rem",
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
                <section className="getStarted-wrapper">
                    <div className="paddings innerWidth getStarted-container">
                        <motion.div
                            className="inner-container"
                            initial={responsiveOffscreen}
                            whileInView={responsiveOnscreen}
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. <br />
                                Trouver votre résidence maintenant
                            </motion.span>
                            <motion.div
                                className="button__container"
                                variants={containerBtoT}
                            >
                                <button className="button">
                                    <motion.a href="mailto:apiou.kalene@gmail.com">
                                        Commencer
                                    </motion.a>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default GetStarted;

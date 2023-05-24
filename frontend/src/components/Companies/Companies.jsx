import React, { useEffect, useState } from "react";
import "../../style/components/Companies.scss";
import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";

function Companies() {
    const [responsiveOnscreen, setResponsiveOnscreen] = useState("onscreen");
    const [responsiveOffscreen, setResponsiveOffscreen] = useState("offscreen");
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
    const isLarge = useIsLarge();
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
                <section className="companies-wrapper">
                    <motion.div
                        className="paddings innerWidth flexCenter companies-container"
                        initial={responsiveOffscreen}
                        whileInView={responsiveOnscreen}
                        variants={containerLtoR}
                    >
                        <motion.img
                            variants={containerLtoR}
                            src="./images/prologis.png"
                            alt=""
                        />

                        <motion.img
                            variants={containerLtoR}
                            src="./images/tower.png"
                            alt=""
                        />

                        <motion.img
                            variants={containerLtoR}
                            src="./images/equinix.png"
                            alt=""
                        />
                        <motion.img
                            variants={containerLtoR}
                            src="./images/realty.png"
                            alt=""
                        />
                    </motion.div>
                </section>
            )}
        </div>
    );

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
        return (
            <div>
                <section className="companies-wrapper">
                    <motion.div
                        className="paddings innerWidth flexCenter companies-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={containerLtoR}
                    >
                        <motion.img src="./images/prologis.png" alt="" />

                        <motion.img src="./images/tower.png" alt="" />

                        <motion.img src="./images/equinix.png" alt="" />
                        <motion.img src="./images/realty.png" alt="" />
                    </motion.div>
                </section>
            </div>
        );
    }
}

export default Companies;

import React, { useState, useEffect } from "react";
import "../../style/components/GetStarted.scss";
import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";
import { SlideInFromBot } from "../../utils/AnimationText";

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
                        <div className="inner-container">
                            <SlideInFromBot scroll="off">
                                <span className="primaryText">
                                    Commencer avec Homyz
                                </span>
                            </SlideInFromBot>
                            <SlideInFromBot scroll="off" delay="0.25" duration={1.5}>
                                <span className="secondaryText">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. <br />
                                    Trouver votre résidence maintenant
                                </span>
                            </SlideInFromBot>
                            <SlideInFromBot scroll="off" delay="0.5" duration={1.5}>
                                <div className="button__container">
                                    <button className="button">
                                        <a href="mailto:apiou.kalene@gmail.com">
                                            Commencer
                                        </a>
                                    </button>
                                </div>
                            </SlideInFromBot>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default GetStarted;

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../../style/components/Residences.scss";
import data from "../../utils/slider.json";
import { slider } from "../../utils/slider.js";

import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";
import { SlideInFromBot } from "../../utils/AnimationText";

function Residences() {
    const [responsiveOnscreen, setResponsiveOnscreen] = useState(null);
    const [responsiveOffscreen, setResponsiveOffscreen] = useState(null);
    const [show, setShow] = useState(false);
    const isLarge = useIsLarge();

    useEffect(() => {
        setTimeout(() => {
            slider(300);
        }, 0);
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

    useEffect(() => {}, []);
    return (
        <div>
            {show && (
                <section className="residences-wrapper">
                    <div className="paddings innerWidth residences-container">
                        <div className="residences-head flexColStart">
                            <SlideInFromBot scroll="off" duration={1.5}>
                                <span className="orangeText">
                                    Meilleur choix
                                </span>
                            </SlideInFromBot>

                            <SlideInFromBot
                                scroll="off"
                                delay="0.3"
                                duration={1.5}
                            >
                                <span className="primaryText">
                                    Residence populaire
                                </span>
                            </SlideInFromBot>
                        </div>
                        <div>
                            <div className="slider">
                                <SlideInFromBot scroll="off" duration={1.5}>
                                    <div className="slides">
                                        {data.map((card, i) => (
                                            <div className="slide" key={i}>
                                                <img src={card.image} alt="" />
                                                <span className="secondaryText r-price">
                                                    <span>$</span>{" "}
                                                    <span>{card.price}</span>
                                                </span>
                                                <span className="primaryText">
                                                    {card.name}
                                                </span>
                                                <span className="secondaryText">
                                                    {card.detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </SlideInFromBot>
                            </div>
                            <SlideInFromBot
                                scroll="off"
                                delay="0.3"
                                duration={1.5}
                            >
                                <div className="container__btn">
                                    <button className="prev-btn">&lt;</button>
                                    <button className="next-btn">&gt;</button>
                                </div>
                            </SlideInFromBot>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Residences;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "Swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../style/components/Residences.scss";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";
function Residences() {
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
                <section className="residences-wrapper">
                    <div className="paddings innerWidth residences-container">
                        <motion.div
                            className="residences-head flexColStart"
                            initial={responsiveOffscreen}
                            whileInView={responsiveOnscreen}
                            variants={containerLtoR}
                        >
                            <motion.span
                                className="orangeText"
                                variants={containerLtoR}
                            >
                                Meilleur choix
                            </motion.span>
                            <motion.span
                                className="primaryText"
                                variants={containerLtoR}
                            >
                                Residence populaire
                            </motion.span>
                        </motion.div>

                        <Swiper
                            {...sliderSettings}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                        >
                            <SliderButtons />
                            {data.map((card, i) => (
                                <SwiperSlide key={i}>
                                    <motion.div
                                        className="r-card flexColCenter"
                                        initial={responsiveOffscreen}
                                        animate={responsiveOnscreen}
                                        variants={containerLtoR}
                                    >
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
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Residences;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div>
            <div className="r-buttons">
                <button onClick={() => swiper.slidePrev()}>&lt;</button>
                <button onClick={() => swiper.slideNext()}>&gt;</button>
            </div>
        </div>
    );
};

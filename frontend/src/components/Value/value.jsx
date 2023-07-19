import React, { useEffect, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "../../style/components/Value.scss";
import data from "../../utils/accordion";
import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";
import { SlideInFromRight, SlideInFromLeft } from "../../utils/AnimationText";

const value = () => {
    const [className, setClassName] = useState(null);

    const [responsiveOnscreen, setResponsiveOnscreen] = useState(null);
    const [responsiveOffscreen, setResponsiveOffscreen] = useState(null);
    const [show, setShow] = useState(false);

    const isLarge = useIsLarge();

    useEffect(() => {
        if (isLarge) {
            setResponsiveOnscreen("onscreen");
            setResponsiveOffscreen("offscreen");
            setShow(true);
            console.log("large");
        } else if (!isLarge && isLarge !== null) {
            setResponsiveOnscreen("onscreenMobile");
            setResponsiveOffscreen("offscreenMobile");
            setShow(true);
            console.log("small");
        }
    }, [isLarge]);
    return (
        <div>
            {show && (
                <section className="value-wrapper">
                    <div className="innerWidth paddings value-container">
                        {/* left side */}
                        <div className="value-left">
                            <SlideInFromLeft scroll="off" duration={1.5}>
                                <div className="image-container">
                                    <img src="./images/value.png" alt="" />
                                </div>
                            </SlideInFromLeft>
                        </div>
                        {/* right side */}
                        <div className="value-right">
                            <div>
                                <SlideInFromRight scroll="off" duration={1.5}>
                                    <motion.span className="orangeText">
                                        Notre valeur
                                    </motion.span>
                                </SlideInFromRight>
                                <SlideInFromRight
                                    scroll="off"
                                    duration={1.5}
                                    delay={0.25}
                                >
                                    <span className="primaryText">
                                        Valeur que nous vous donnons
                                    </span>
                                </SlideInFromRight>
                                <SlideInFromRight
                                    scroll="off"
                                    duration={1.5}
                                    delay={0.5}
                                >
                                    <span className="secondaryText">
                                        Nous sommes toujours prêts à vous aider
                                        en vous fournissant les meilleurs
                                        services possibles <br />
                                        Nous pensons qu'un bon logement peut
                                        améliorer votre vie
                                    </span>
                                </SlideInFromRight>
                            </div>

                            <div>
                                <Accordion
                                    className="accordion"
                                    allowMultipleExpanded={false}
                                    preExpanded={[0]}
                                >
                                    {data.map((item, i) => {
                                        return (
                                            <SlideInFromRight
                                                scroll="off"
                                                duration={1.5}
                                                delay={1 * (i * 0.25)}
                                            >
                                                <AccordionItem
                                                    className={`accordionItem ${className}`}
                                                    key={i}
                                                    uuid={i}
                                                >
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton className="accordionButton">
                                                            <div className="flexCenter icon">
                                                                {item.icon}
                                                            </div>
                                                            <span className="primaryText">
                                                                {item.heading}
                                                            </span>
                                                            <div className="flexCenter icon">
                                                                <MdOutlineArrowDropDown
                                                                    size={20}
                                                                />
                                                            </div>
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p className="secondaryText">
                                                            {item.detail}
                                                        </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            </SlideInFromRight>
                                        );
                                    })}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default value;

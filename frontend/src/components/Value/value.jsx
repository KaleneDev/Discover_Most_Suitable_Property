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
const value = () => {
    const [className, setClassName] = useState(null);

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
    const isLarge = useIsLarge();

    useEffect(() => {
        if (isLarge) {
            setResponsiveOnscreen("onscreen");
            setResponsiveOffscreen("offscreen");
            setShow(true);
            console.log("large");
        } else if (!isLarge && isLarge !== null)  {
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
                            <motion.div
                                className="image-container"
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerLtoR}
                            >
                                <img src="./images/value.png" alt="" />
                            </motion.div>
                        </div>
                        {/* right side */}
                        <div className="value-right">
                            <motion.div
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerRtoL}
                            >
                                <motion.span
                                    variants={containerRtoL}
                                    className="orangeText"
                                >
                                    Notre valeur
                                </motion.span>
                                <motion.span
                                    variants={containerRtoL}
                                    className="primaryText"
                                >
                                    Valeur que nous vous donnons
                                </motion.span>
                                <motion.span
                                    variants={containerRtoL}
                                    className="secondaryText"
                                >
                                    Nous sommes toujours prêts à vous aider en
                                    vous fournissant les meilleurs services
                                    possibles <br />
                                    Nous pensons qu'un bon logement peut
                                    améliorer votre vie
                                </motion.span>
                            </motion.div>

                            <motion.div
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerRtoL}
                            >
                                <Accordion
                                    className="accordion"
                                    allowMultipleExpanded={false}
                                    preExpanded={[0]}
                                >
                                    {data.map((item, i) => {
                                        return (
                                            <AccordionItem
                                                className={`accordionItem ${className}`}
                                                key={i}
                                                uuid={i}
                                            >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton className="accordionButton">
                                                        {/* <AccordionItemState>
                                    {({ expanded }) =>
                                        expanded
                                            ? setClassName(
                                                  "expanded"
                                              )
                                            : setClassName(
                                                  "collapsed"
                                              )
                                    }
                                </AccordionItemState> */}

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
                                        );
                                    })}
                                </Accordion>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default value;

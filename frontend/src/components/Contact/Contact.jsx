import React, { useEffect, useState } from "react";
import "../../style/components/Contact.scss";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";
function Contact() {
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
                // staggerChildren: 0.35,
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
                <section className="contact-wrapper">
                    {/* left side */}
                    <div className="paddings innerWidth contact-container">
                        <div className="contact-left">
                            <motion.div
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerLtoR}
                            >
                                <motion.span
                                    className="orangeText"
                                    variants={containerLtoR}
                                >
                                    Votre Contact
                                </motion.span>
                                <motion.span
                                    className="primaryText"
                                    variants={containerLtoR}
                                >
                                    Contactez-nous facilement
                                </motion.span>
                                <motion.span variants={containerLtoR}>
                                    Nous sommes toujours prêts à aider en
                                    fournissant le meilleur service, nous
                                    croyons qu'un bon endroit pour vivre peut
                                    rendre votre vie meilleure
                                </motion.span>
                            </motion.div>

                            <motion.div
                                className="flexColStart contactModes"
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerBtoT}
                            >
                                {/* first row */}
                                <motion.div
                                    className="flexColCenter mode"
                                    variants={containerBtoT}
                                >
                                    <div className="flexStart block">
                                        <div className="flexCenter icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="detail">
                                            <span className="primaryText">
                                                Call
                                            </span>
                                            <span>07 50 45 03 70 45</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Appelez maintenant
                                    </div>
                                </motion.div>

                                {/* second mode*/}
                                <motion.div
                                    className="flexColCenter mode"
                                    variants={containerBtoT}
                                >
                                    <div className="flexStart block">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="detail">
                                            <span className="primaryText">
                                                Chat
                                            </span>
                                            <span>07 50 45 03 70 45</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Chat Now
                                    </div>
                                </motion.div>

                                {/* third mode*/}
                                <motion.div
                                    className="flexColCenter mode"
                                    variants={containerBtoT}
                                >
                                    <div className="flexStart block">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="detail">
                                            <span className="primaryText">
                                                Video Call
                                            </span>
                                            <span>07 50 45 03 70 45</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Video Call Now
                                    </div>
                                </motion.div>

                                {/* fourth mode*/}
                                <motion.div
                                    className="flexColCenter mode"
                                    variants={containerBtoT}
                                >
                                    <div className="flexStart block">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter
                                                size={25}
                                            />
                                        </div>
                                        <div className="detail">
                                            <span className="primaryText">
                                                Message
                                            </span>
                                            <span>07 50 45 03 70 45</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Message Now
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="contact-right">
                            <motion.div
                                className="image-container"
                                initial={responsiveOffscreen}
                                whileInView={responsiveOnscreen}
                                variants={containerRtoL}
                            >
                                <img src="./images/contact.jpg" alt="" />
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Contact;

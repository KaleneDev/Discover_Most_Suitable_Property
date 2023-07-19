import React, { useEffect, useState } from "react";
import "../../style/components/Contact.scss";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useIsLarge } from "../../utils/useMediaQuery";
import { SlideInFromRight, SlideInFromLeft } from "../../utils/AnimationText";

function Contact() {
    const [responsiveOnscreen, setResponsiveOnscreen] = useState(null);
    const [responsiveOffscreen, setResponsiveOffscreen] = useState(null);
    const [show, setShow] = useState(false);
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
                            <div>
                                <SlideInFromLeft scroll="off" duration={1.5}>
                                    <span className="orangeText">
                                        Votre Contact
                                    </span>
                                </SlideInFromLeft>

                                <SlideInFromLeft
                                    scroll="off"
                                    delay={0.25}
                                    duration={1.5}
                                >
                                    <span className="primaryText">
                                        Contactez-nous facilement
                                    </span>
                                </SlideInFromLeft>

                                <SlideInFromLeft
                                    scroll="off"
                                    delay={0.5}
                                    duration={1.5}
                                >
                                    <span>
                                        Nous sommes toujours prêts à aider en
                                        fournissant le meilleur service, nous
                                        croyons qu'un bon endroit pour vivre
                                        peut rendre votre vie meilleure
                                    </span>
                                </SlideInFromLeft>
                            </div>

                            <div className="flexColStart contactModes">
                                {/* first row */}
                                <SlideInFromLeft scroll="off" duration={1.5}>
                                    <div className="flexColCenter mode">
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
                                    </div>
                                </SlideInFromLeft>

                                {/* second mode*/}
                                <SlideInFromRight scroll="off" duration={1.5}>
                                    <div className="flexColCenter mode">
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
                                    </div>
                                </SlideInFromRight>

                                {/* third mode*/}
                                <SlideInFromLeft scroll="off" duration={1.5}>
                                    <div className="flexColCenter mode">
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
                                    </div>
                                </SlideInFromLeft>

                                {/* fourth mode*/}
                                <SlideInFromRight scroll="off" duration={1.5}>
                                    <div className="flexColCenter mode">
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
                                    </div>
                                </SlideInFromRight>
                            </div>
                        </div>
                        <div className="contact-right">
                            <SlideInFromRight scroll="off" duration={1.5}>
                                <div className="image-container">
                                    <img src="./images/contact.jpg" alt="" />
                                </div>
                            </SlideInFromRight>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Contact;

import React from "react";
import "../../style/components/Contact.scss";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { motion } from "framer-motion";

function Contact() {
  const container = {
    offscreen: {
      x: "7rem",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        bounce: 0.2,
      },
    },
  };
  return (
    <div>
      <section className="contact-wrapper">
        {/* left side */}
        <div className="paddings innerWidth contact-container">
          <div className="contact-left">
            <span className="orangeText">Votre Contacts</span>
            <span className="primaryText">Contactez-nous facilement</span>
            <span>
              Nous sommes toujours prêts à aider en fournissant le meilleur
              service, nous croyons qu'un bon endroit pour vivre peut rendre
              votre vie meilleure
            </span>

            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexColStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart block">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="detail">
                      <span className="primaryText">Call</span>
                      <span>07 50 45 03 70 45</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Appelez maintenant</div>
                </div>
                {/* second mode*/}
                <div className="flexColCenter mode">
                  <div className="flexStart block">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="detail">
                      <span className="primaryText">Chat</span>
                      <span>07 50 45 03 70 45</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Chat Now</div>
                </div>
                {/* third mode*/}
                <div className="flexColCenter mode">
                  <div className="flexStart block">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="detail">
                      <span className="primaryText">Video Call</span>
                      <span>07 50 45 03 70 45</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Video Call Now</div>
                </div>
                {/* fourth mode*/}
                <div className="flexColCenter mode">
                  <div className="flexStart block">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="detail">
                      <span className="primaryText">Message</span>
                      <span>07 50 45 03 70 45</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <motion.div
              className="image-container"
              initial="offscreen"
              whileInView="onscreen"
              variants={container}
            >
              <img src="./images/contact.jpg" alt="" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

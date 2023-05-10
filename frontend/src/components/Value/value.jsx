import React, { useState } from "react";
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

function value() {
  const containerLtoR = {
    offscreen: {
      x: "-7rem",
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
  const containerRtoL = {
    offscreen: {
      x: "7rem",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: .5,
        type: "spring",
        duration: 2,
        bounce: 0.2,
      },
    },
  };
  const item = {
    offscreen: { x: "7rem", opacity: 0 },
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
      <section className="value-wrapper">
        <div className="innerWidth paddings value-container">
          {/* left side */}
          <motion.div className="value-left">
            <motion.div
              className="image-container"
              initial="offscreen"
              whileInView="onscreen"
              variants={containerLtoR}
            >
              <img src="./images/value.png" alt="" />
            </motion.div>
          </motion.div>
          {/* right side */}
          <motion.div
            className="value-right"
            initial="offscreen"
            whileInView="onscreen"
            variants={containerRtoL}
          >
            <motion.span variants={item} className="orangeText">
              Notre valeur
            </motion.span>
            <motion.span variants={item} className="primaryText">
              Valeur que nous vous donnons
            </motion.span>
            <motion.span variants={item} className="secondaryText">
              Nous sommes toujours prêts à vous aider en vous fournissant les
              meilleurs services possibles <br />
              Nous pensons qu'un bon logement peut améliorer votre vie
            </motion.span>

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem
                    className={`accordionItem ${className}`}
                    key={i}
                    uuid={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordionButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default value;

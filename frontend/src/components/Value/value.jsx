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
  const cardVariants = {
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
  return (
    <div>
      <section className="value-wrapper">
        <div className="innerWidth paddings value-container">
          {/* left side */}
          <motion.div
            className="value-left"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <motion.div
              className="image-container"
            >
              <img src="./images/value.png" alt="" />
            </motion.div>
          </motion.div>
          {/* right side */}
          <div className="value-right">
            <span className="orangeText">Notre valeur</span>
            <span className="primaryText">Valeur que nous vous donnons</span>
            <span className="secondaryText">
              Nous sommes toujours prêts à vous aider en vous fournissant les
              meilleurs services possibles <br />
              Nous pensons qu'un bon logement peut améliorer votre vie
            </span>

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
          </div>
        </div>
      </section>
    </div>
  );
}

export default value;

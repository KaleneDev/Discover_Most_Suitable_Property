import React from "react";
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

function value() {
  return (
    <div>
      <section className="value-wrapper">
        <div className="innerWidth paddings value-container flexCenter">
          {/* left side */}
          <div className="value-left">
            <div className="image-container">
              <img src="./images/value.png" alt="" />
            </div>
          </div>
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
              className="acccordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                return (
                  <AccordionItem className="accordionItem" key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
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

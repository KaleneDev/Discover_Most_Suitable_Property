import React from "react";
import "../../style/components/Companies.scss";
import { motion } from "framer-motion";

function Companies() {
  const container = {
    offscreen: {
      x: "-7rem",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerDirection: -1,
        type: "spring",
        duration: 2,
        bounce: 0.2,
      },
    },
  };

  return (
    <div>
      <section className="companies-wrapper">
        <motion.div
          className="paddings innerWidth flexCenter companies-container"
          initial="offscreen"
          whileInView="onscreen"
          variants={container}
        >
          <motion.img src="./images/prologis.png" alt="" />

          <motion.img src="./images/tower.png" alt="" />

          <motion.img src="./images/equinix.png" alt="" />
          <motion.img src="./images/realty.png" alt="" />
        </motion.div>
      </section>
    </div>
  );
}

export default Companies;

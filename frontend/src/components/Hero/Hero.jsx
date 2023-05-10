import React from "react";
import "../../style/components/Hero.scss";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container">
          {/* side left */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <span className="orange-circle"></span>
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
              >
                Découvrez <br />
                des propriétées <br /> appropriée
              </motion.h1>
            </div>

            <div className="hero-des flexColStart">
              <span className="secondaryText">
                Trouvez très facilement une variété de biens immobiliers qui
                vous conviennent
              </span>
              <span className="secondaryText">
                Oubliez toutes les difficultés liées à la recherche d'une
                résidence pour vous
              </span>
            </div>

            <div className="search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Recherche</button>
            </div>

            <div className="flexCenter stats innerWidth">
              <div className="flexColStart stat">
                <span className="count">
                  <CountUp start={88800} end={90000} duration={4} />
                  <span className="orangeText">+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>

              <div className="flexColStart stat">
                <span className="count">
                  <CountUp start={1950} end={2000} duration={4} />
                  <span className="orangeText">+</span>
                </span>
                <span className="secondaryText">Utilisateur satisfait</span>
              </div>

              <div className="flexColStart stat">
                <span className="count">
                  <CountUp end={28} />
                  <span className="orangeText">+</span>
                </span>
                <span className="secondaryText">Prix gagné</span>
              </div>
            </div>
          </div>
          {/* side right */}
          <div className="flexColEnd hero-right">
            <motion.div
              className="image-container"
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
            >
              <img src="./images/hero-image.png" alt="" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

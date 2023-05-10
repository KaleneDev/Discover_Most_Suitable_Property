import React from "react";
import "../../style/components/Footer.scss";
const Footer = () => {
  return (
    <div>
      <section className="footer-wrapper">
        <div className="paddings innerWidth footer-container">
          <div className="footer-left">
            <img src="./images/logo2.png" alt="" width={120} />
            <span className="secondaryText">
              Notre vision de faire le meilleur pour les gens <br />
              le meilleur endroit ou vivre pour eux.
            </span>
          </div>
          <div className="footer-right">
            <span className="primaryText">information</span>
            <span className="secondaryText">
              2A rue de l'Égalité, 39800, Poligny, FRANCE
            </span>
            <div className="footer-menu">
              <span>Propriété</span>
              <span>Services</span>
              <span>Produits</span>
              <span>A propos de nous</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

import React from "react";
import "../../style/components/Header.scss";

const Header = () => {
  return (
    <div>
      <section className="header-warpper">
        <div className="paddings innerWidth flexCenter header-container">
          <img className="logo" src="./images/logo.png" alt="logo" />
          <div>
            <a href="">Résidences</a>
            <a href="">Notre valeur</a>
            <a href="">Contactez-nous</a>
            <a href="">Commencer</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

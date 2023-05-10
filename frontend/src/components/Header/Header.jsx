import React, { useState } from "react";
import "../../style/components/Header.scss";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 768) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <div>
      <section className="header-warpper">
        <div className="paddings innerWidth flexCenter header-container">
          <img className="logo" src="./images/logo.png" alt="logo" />
          <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
            <div
              className="flexCenter header-menu"
              style={getMenuStyle(menuOpened)}
            >
              <a href="">Résidences</a>
              <a href="">Notre valeur</a>
              <a href="">Contactez-nous</a>
              <a href="">Commencer</a>
              <button className="button">
                <a href="">Contact</a>
              </button>
            </div>
            <div
              className="menu-icon"
              onClick={() => setMenuOpened((prev) => !prev)}
            >
              <BiMenuAltRight size={30} />
            </div>
          </OutsideClickHandler>
        </div>
      </section>
    </div>
  );
};

export default Header;

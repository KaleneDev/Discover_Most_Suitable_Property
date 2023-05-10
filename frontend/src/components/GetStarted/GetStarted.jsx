import React from "react";
import "../../style/components/GetStarted.scss";
function GetStarted() {
  return (
    <div>
      <section className="getStarted-wrapper">
        <div className="paddings innerWidth getStarted-container">
          <div className="inner-container">
            <span className="primaryText">Commencer avec Homyz</span>
            <span className="secondaryText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Trouver votre résidence maintenant
            </span>
            <button className="button">
              <a href="mailto:apiou.kalene@gmail.com">Commencer</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetStarted;

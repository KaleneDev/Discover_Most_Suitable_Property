import React from "react";
import "../../style/components/Companies.scss";

function Companies() {
  return (
    <div>
      <section className="companies-wrapper">
        <div className="paddings innerWidth flexCenter companies-container">
          <img src="./images/prologis.png" alt="" />
          <img src="./images/tower.png" alt="" />
          <img src="./images/equinix.png" alt="" />
          <img src="./images/realty.png" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Companies;

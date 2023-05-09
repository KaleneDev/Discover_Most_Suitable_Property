import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "Swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "../../style/components/Residences.scss";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
function Residences() {
  return (
    <div>
      <section className="residences-wrapper">
        <div className="paddings innerWidth residences-container">
          <div className="residences-head flexColStart">
            <span className="orangeText">Meilleur choix</span>
            <span className="primaryText">Residence populaire</span>
          </div>
          <Swiper
            {...sliderSettings}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card flexColCenter">
                  <img src={card.image} alt="" />
                  <span className="secondaryText r-price">
                    <span>$</span> <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Residences;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div>
      <div className="r-buttons">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    </div>
  );
};

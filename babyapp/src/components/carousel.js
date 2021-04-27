import React from "react";

// import Cybex from "../Pictures/Cybex.jpg";
import Cybex from "../Pictures/Cybex.jpg";
import Chicco from "../Pictures/Chicco.jpg";
import easyWalker from "../Pictures/easyWalker.png";
import BabyJogger from "../Pictures/BabyJogger.jpg";
import maclaren from "../Pictures/maclaren.png";
import inglesina from "../Pictures/inglesina.png";
import tinyLove from "../Pictures/tinyLove.png";
import lamaze from "../Pictures/lamaze.png";
import $ from "jquery";

// import "../css/carousel.css";
// import "../css/carousel.sass";
import "../css/Carousel.scss";

function Carousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img
            src={BabyJogger}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={maclaren}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={inglesina}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={tinyLove}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={easyWalker}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>{" "}
        <div className="slide">
          <img
            src={lamaze}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={Cybex}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={Chicco}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={BabyJogger}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={maclaren}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={inglesina}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={tinyLove}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={easyWalker}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={lamaze}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={Cybex}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src={Chicco}
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Carousel;

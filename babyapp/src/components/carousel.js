import React from "react";

// import Cybex from "../Pictures/Cybex.jpg";
import Cybex from "../Pictures/Cybex.jpg";
import Chicco from "../Pictures/Chicco.jpg";
import BabyJogger from "../Pictures/BabyJogger.jpg";
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
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
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
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            className="img-slide"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
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

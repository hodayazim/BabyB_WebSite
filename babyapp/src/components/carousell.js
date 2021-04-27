import React from "react";
import Carousel from "./carousel";

import "../css/carousell.css";

import ClosertoNature from "../Pictures/Product/Closer to Nature.2.1.jpg";
import MIOS_G from "../Pictures/Product/MIOS_G.1.jpg";
import Twigy from "../Pictures/Product/Twigy.1.jpg";
import RideOn from "../Pictures/Product/Ride On 1-2-3.2.jpg";
function Carousell() {
  return (
    <div id="demo" class="carousel slide" data-ride="carousel">
      {/* <!-- Indicators --> */}
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      {/* <!-- The slideshow --> */}
      <div class="container carousel-inner no-padding">
        <div class="carousel-item active">
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src={ClosertoNature} />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src={MIOS_G} />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src={Twigy} />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src={RideOn} />
          </div>
        </div>
        <div class="carousel-item">
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg" />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg" />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg" />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg" />
          </div>
        </div>
        <div class="carousel-item">
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg" />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg" />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg" />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg" />
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
}
export default Carousell;

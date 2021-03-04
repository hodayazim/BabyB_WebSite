import React from "react";
import "../css/footer.css";
import instegram from "../Pictures/instegram.png";
import facebook from "../Pictures/facebook.png";

function Footer() {
  return (
    <div className="bodyfooter">
      {/* <div className="grafiti">Baby B</div>
      <p className="grafiti">
        Design by:
        <a href="https://unblast.com/free-rose-text-effect-psd/">unblast.com</a>
      </p> */}
      <div className="icon">
        <a href="https://www.instagram.com/" target="_blank">
          <img className="iconLink" src={instegram} />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img className="iconLink" src={facebook} />
        </a>
      </div>
    </div>
  );
}

export default Footer;

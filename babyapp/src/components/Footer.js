import React from "react";
import "../css/footer.css";
import instegram from "../Pictures/instegram.png";
import facebook from "../Pictures/facebook.png";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="bodyfooter">
        {/* <div className="grafiti">Baby B</div>
      <p className="grafiti">
        Design by:
        <a href="https://unblast.com/free-rose-text-effect-psd/">unblast.com</a>
      </p> */}
        <div className="icon">
          <article>
            <a href="https://www.instagram.com/" target="_blank">
              <img className="iconLink" src={instegram} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img className="iconLink" src={facebook} />
            </a>
          </article>
        </div>
        <article className="text">
          <ul className="footerUl">
            <li className="footerLi">
              <AiOutlineMail /> &nbsp; &nbsp; &nbsp; babyb.site@gmail.com
            </li>
            <li className="footerLi">
              <AiOutlinePhone />
              &nbsp; &nbsp; &nbsp; 077-6421958
            </li>
            <li className="footerLi"></li>
            <li className="footerLi">כל הזכויות שמורות</li>
          </ul>
          <span className="spanFooter"> </span>
        </article>
      </div>
    </div>
  );
}

export default Footer;

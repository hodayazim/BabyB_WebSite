import React from "react";
import { Link } from "react-router-dom";
import PinkLogo from "../Pictures/PinkLogo.svg";

const Error = (props) => {
  return (
    <div className="divError">
      <h1>שגיאה!</h1>
      <p>
        הגעת לדף שלא קיים במערכת אנא בדוק את הניתוב שלך
        <br />
        לחזרה לדף הבית שלנו לחץ
        <Link to="/Main" alt="Link to home" value="כאן">
          כאן
          <br /> <br />
          <img src={PinkLogo} width="50px"></img>
        </Link>
      </p>
    </div>
  );
};

export default Error;

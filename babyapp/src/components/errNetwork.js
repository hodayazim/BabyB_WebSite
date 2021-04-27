import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import errNetwork from "../Pictures/errNetwork.jpg";
import { GetAllCategories } from "../FUNCTION/ProductFunction";

function ErrNetwork() {
let history = useHistory();


  useEffect(() => {
    GetAllCategories()
      .then((res) => {
        history.push("/");
        window.location.reload();
        // window.preventDefault();
      })
      .catch((err) => {
        history.push("/404");
        // window.location.reload();
        window.preventDefault();
      });
  });
  return (
    <>
      <img src={errNetwork} />
    </>
  );
}
export default ErrNetwork;

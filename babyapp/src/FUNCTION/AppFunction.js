import axios from "axios";
import React, { useState } from "react";

function CheckLogin() {
  const [name, setname] = useState("");
  let idUser = JSON.parse(localStorage.getItem("idUser"));
  let namee = JSON.parse(localStorage.getItem("FirstNameUser"));

  if (idUser != null) setname(namee);
  else setname("אורח");
}
export default CheckLogin;

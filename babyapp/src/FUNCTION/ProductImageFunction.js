import axios from "axios";
import React, { useState } from "react";

import { Alert } from "antd";
//יש בעיה שאי אפשר לממש כאן את
// Use History כי זה שייך לספרייה של ריאקט ואין כאן קומפוננה

const baseURL = "http://localhost:17374/api/";

export const GetImagesProduct = (IdProduct) => {
  return axios
    .get(`${baseURL}ProductImage/GetImagesProduct/${IdProduct}`)
    .then((res) => {
      console.log(res);
      localStorage.removeItem("ImagesProduct");
      localStorage.setItem("ImagesProduct", JSON.stringify(res.data));
      debugger;
      return;
    })
    .catch(function (error) {
      console.log(error);
      return;
    });
};

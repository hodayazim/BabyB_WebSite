import axios from "axios";
import React, { useState } from "react";

import { Alert } from "antd";
//יש בעיה שאי אפשר לממש כאן את
// Use History כי זה שייך לספרייה של ריאקט ואין כאן קומפוננה

const baseURL = "http://localhost:17374/api/";

export const GetImagesProduct = (IdProduct) => {
  axios
    .get(`${baseURL}ProductImage/GetImagesProduct/${IdProduct}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

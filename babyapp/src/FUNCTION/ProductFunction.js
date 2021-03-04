import axios from "axios";
import React, { useState } from "react";
import DepleteState from "../components/addProduct";

import { Alert } from "antd";
//יש בעיה שאי אפשר לממש כאן את
// Use History כי זה שייך לספרייה של ריאקט ואין כאן קומפוננה

const baseURL = "http://localhost:17374/api/";
const string = "תאומים";

export const GetAllProducts = () =>
  axios
    .get(`${baseURL}Product/GetAllProducts/4`)
    .then((res) => {
      // console.log(res);
      // history.push("/");
      //history.push("/Products");
      //   window.location.reload();
      console.log("then");
      // console.log(res.data[0].NameProduct);
      return res.data;
    })
    .catch(function (error) {
      console.log("catch");
      console.log(error);
    });

export const GetProductsByStr = (str) => {
  return axios
    .get(`${baseURL}Product/GetProductsByStr/${str}`)
    .then((res) => {
      console.log("then");
      localStorage.setItem("Category", str);
      // if (res.data.length != 0)
      return res.data;
    })
    .catch(function (error) {
      console.log("catch");
      console.log(error);
    });
};

export const AddNewProduct = (product, images) => {
  debugger;
  //מביאה רשימה של תת קטגוריות
  axios
    .get(`${baseURL}SubCategory/GetIdSubCategory/${product.IdSubcategory}`)
    // .get(`${baseURL}Category/GetIdSubCategory/${product.IdSubcategory}`)
    .then(function (response) {
      // product.IdSubCategory = response.data;
      product.IdSubcategory = response.data;

      //מוסיפה מוצר לאתר
      axios
        .post(`http://localhost:17374/api/Products/AddProducts`)
        // .post(`http://localhost:17374/api/Products/AddProducts`, product)
        .then(function (response) {
          const len = images["length"];
          images[len] = response.data;

          //הוספת תמונות

          axios
            .post(`${baseURL}ProductImage/Addimages`, images)
            .then(function (response) {
              console.log(response);
              DepleteState();
              <Alert message="Success Text" type="success" />;
            })
            .catch(function (error) {
              console.log(error);
            })

            .then(function () {});
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    })

    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export const GetAllCategories = () => {
  debugger;
  return axios
    .get(`http://localhost:17374/api/Category/GetAllCategories`)
    .then((res) => {
      console.log("then");
      console.log(res.data);
      return res.data;
    })
    .catch(function (error) {
      console.log("catch");
      return error;
    });
};

export const GetSearchProducts = (val) => {
  debugger;
  return (
    axios
      .get(`http://localhost:17374/api/Products/GetSearchProducts/${val}`)
      // .get(`${baseURL}Product/GetSearchProducts/${string}`)
      .then((res) => {
        console.log("then");
        console.log(res);
        return res.data;
      })
      .catch(function (error) {
        console.log("catch");
        return error;
      })
  );
};

export const GetAllProductsWithoutSearch = () => {
  debugger;
  return axios
    .get(`http://localhost:17374/api/Product/GetAllProductsWithoutSearch`)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("catch");
      return error;
    });
};

export const GetProductById = (id) => {
  return (
    axios
      // .get(`http://localhost:17374/api/Products/GetProductById/26`)
      .get(`http://localhost:17374/api/Products/GetProductById/${id}`)
      .then((res) => {
        console.log("then");
        return res.data;
      })
      .catch(function (error) {
        console.log("catch");
        console.log(error);
      })
  );
};

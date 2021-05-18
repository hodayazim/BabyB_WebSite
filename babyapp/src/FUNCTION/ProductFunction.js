import axios from "axios";
import React from "react";
import DepleteState from "../components/addProduct";
import { message } from "antd";

//יש בעיה שאי אפשר לממש כאן את
// Use History כי זה שייך לספרייה של ריאקט ואין כאן קומפוננה

const baseURL = "http://localhost:17374/api/";

export const GetAllProducts = () =>
  axios
    .get(`${baseURL}Product/GetAllProducts/4`)
    .then((res) => {
      //console.log(res);
      //history.push("/");
      //history.push("/Products");
      //window.location.reload();
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
    .get(`http://localhost:17374/api/Product/GetProductsByStr/${str}`)
    .then((res) => {
      localStorage.setItem("Category", str);
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const AddNewProduct = (product, images, IDCategory) => {
  //מביאה רשימה של תת קטגוריות
  axios
    .get(
      `${baseURL}SubCategory/GetIdSubCategory/` +
        product.IdSubcategory +
        `/` +
        IDCategory
    )
    // .get(`${baseURL}SubCategory/GetIdSubCategory/${product.IdSubcategory}`)
    .then(function (response) {
      product.IdSubcategory = response.data;

      //מוסיפה מוצר לאתר
      axios
        .post(`http://localhost:17374/api/Products/AddProducts`, product)
        .then(function (response) {
          const len = images["length"];
          images[len] = response.data;

          //הוספת תמונות
          axios
            .post(`${baseURL}ProductImage/Addimages`, images)
            .then(function (response) {
              console.log(response);
              message.success(" !המוצר נוסף בהצלחה ");
              DepleteState();
              alert(" !המוצר נוסף בהצלחה ");
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      message.error("This is an error message");
      console.log(error);
    });
};

export const GetAllCategories = () => {
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
  return axios
    .get(`http://localhost:17374/api/Products/GetSearchProducts/${val}`)
    .then((res) => {
      console.log("then");
      console.log(res);
      return res.data;
    })
    .catch(function (error) {
      console.log("catch");
      return error;
    });
};

//שליפה של שמות המוצרים כולם
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

//שליפת פרטי המוצר
export const GetProductById = (id) => {
  return axios
    .get(`http://localhost:17374/api/Products/GetProductById/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// שליפת רשימת המוצרים שבסל הקניות
//.get( `http://localhost:17374/api/Products/GetListOfProductById?IdProducts=9&IdProducts=7`)
export const GetListProductsById = (stringId) => {
  return axios
    .get(`http://localhost:17374/api/Products/GetListOfProductById${stringId}`)
    .then((res) => {
      debugger;
      alert("ddd");
      localStorage.setItem("CartProduct", JSON.stringify(res.data));
      // window.location.reload();
      // window.preventDefault();
      // return;
    })
    .catch(function (error) {
      debugger;
      console.log(error);
    });
};

// .get(`http://localhost:17374/api/Products/GetListOfProductById/${ListId}`)
export const DeleteProductById = (IdSelect) => {
  axios
    .delete(`http://localhost:17374/api/Products/DeleteProductById/${IdSelect}`)
    .then((res) => {
      debugger;
      if (res.data === true) {
        message.success(" !המוצר נמחק בהצלחה ");
      }
      // $theme-colors: (
      //   "primary": #0074d9,
      //   "danger": #ff4136
      // );
      //   this.messageService.addAll([
      //     {
      //       severity: "success",
      //       summary: "Service Message",
      //       detail: "Via MessageService",
      //     },
      //     {
      //       severity: "info",
      //       summary: "Info Message",
      //       detail: "Via MessageService",
      //     },
      //   ]);
    })
    .catch((err) => {
      debugger;
    });
};

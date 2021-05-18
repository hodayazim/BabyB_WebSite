import useState from "react";
import axios from "axios";
import { Button, message } from "antd";
import shoppingCart from "../components/shoppingCart";

const key = "updatable";
const baseURL = "http://localhost:17374/api/";

const openMessage = () => {
  message.success({ content: "המוצר התוסף בהצלחה" });
};

export const AddProductToCart = (productId) => {
  debugger;
  axios
    .post(`http://localhost:17374/api/ShoppingCart/AddProductToCart`, productId)
    .then(function (response) {
      debugger;
      openMessage();
      console.log(response);
      return;
    });
};

export const GetShoppingByIdUser = () => {
  debugger;
  axios
    .get(
      `${baseURL}ShoppingCart/GetShoppingByIdUser/${localStorage.getItem(
        "IdUser"
      )}`
    )
    .then(function (res) {
      return res.data;
    });
};

//  class User {
//     id: int;
//     firstName: string;
// }
// export default function Login(product) {
//   debugger;
//   axios
//     .get(`${baseURL}ShoppingCart/Login${shoppingCart.idUser}`)
//     .then(function (response) {
//       shoppingCart.idUser = response.data;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
// }

// export const DeleteFunction = () => {
//   axios
//     .get(
//       `${baseURL}ShoppingCart/GetShoppingByIdUser/${localStorage.getItem(
//         "IdUser"
//       )}`
//     )
//     .then((res) => {
//       console.log("GetShoppingByIdUser come back!");
//       history.push("/ShoppingCart", { data: res });
//       window.location.reload();
//     })
//     .catch(function (error) {
//       console.log("GetShoppingByIdUser is faild!");
//       console.log(error);
//     });
// };

// export default function GetShopping() {
//   axios
//     .get(
//       `http://localhost:21309/api/ShoppingCart/GetShopping/${localStorage.getItem(
//         "IdUser"
//       )}`
//     )
//     .then((res) => {
//       console.log(res);
//       return res;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
//   // .then(function () {
//   //   // always executed
//   // });
// }

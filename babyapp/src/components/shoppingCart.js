import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../css/shoppingcart.css";

function ShoppingCart(props) {
  const location = useLocation();
  const [arr, setarr] = useState([]);
  const [arrayofbuy, setarray] = useState([]);
  const [ProductsCart, setProductsCart] = useState([]);

  setProductsCart(
    JSON.parse(
      localStorage.getItem("https://speckyboy.com/slide-out-sidebars/")
    )
  );
  var AlertCode = "<div> סל הקניות שלך ריק  </div>";

  useEffect(() => {
    if (location.state != undefined) {
      // ProductsCart = location.state.data;
    } else {
      document.getElementById("h2Head").innerHTML = AlertCode;
    }
  }, []);

  // setProductsCart(arr);
  // setProductsCart(window.history.state.state.data);

  // useEffect(() => {
  //   debugger;
  // });

  // const useEffect = () => {
  //   // setProductsCart(GetShoppingByIdUser());
  //   debugger;
  //   axios
  //     .get(
  //       `http://localhost:17374/api/ShoppingCart/GetShoppingByIdUser/${localStorage.getItem(
  //         "IdUser"
  //       )}`
  //     )
  //     .then(function (res) {
  //       for (var i = 0; i < res.data.length; i++) {
  //         ProductsCart[i] = res.data[i];
  //       }
  //     })
  //     .catch(console.log("err GetShoppingByIdUser"));
  // };

  return (
    <div className="ShoppingCart Right_part_page col-sm-8" onLoad={useEffect}>
      <div className="ShoppingCart_body">
        <div className="ShoppingCart_table_title">
          <h2 className="ShoppingCart_title"> סל הקניות שלי </h2>
          <p>המחירים ניתנים לשינוי בהתאם למחיר המעשי ביום ההזמנה.</p>
        </div>
        <table className="c-bag-table j-expose__cart-list">
          <thead>
            <tr>
              <th className="col-xs-6">פריט</th>
              <th className="col-xs-2">מחיר</th>
              <th className="col-xs-2">כמות</th>
              <th className="col-xs-2 good-total">סך הכול</th>
            </tr>
          </thead>
          <div id="h2Head"></div>
          {ProductsCart.map((p) => {
            return (
              <>
                <div>{p.IdProduct}</div>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}
export default ShoppingCart;

function FullShoppingCart() {
  return (
    <tbody>
      <tr>
        <td>
          <img src="" alt=""></img>

          <div className="">
            <div className="">
              <a href="" target="" rel="" className="">
                <span className=""></span>
                {/* {ProductsCart[0] && ProductsCart[0].NameProduct} */}
              </a>

              <div className="">
                <div
                  className=""
                  placemen="bottom"
                  title="אהאם אתה בטוח שברצונך למחוק פריט זה?"
                  visible-button="true"
                >
                  <span>
                    <span onClick=" " className="">
                      מחק
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

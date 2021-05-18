import React, { useEffect, useState } from "react";

import "./purchasePage.css";
export default function PurchasePage() {
  const [ProductsCart, setProductsCart] = useState(
    JSON.parse(localStorage.getItem("CartProduct"))
  );
  const [name, setName] = useState(localStorage.getItem("FirstNameUser"));
  var total = 0;
  for (let i = 0; i < ProductsCart.length; i++) {
    total += ProductsCart[i].Price * 1;
  }

  // function Send() {
  //   alert("תודה שקנית BABY B");
  // }

  return (
    <div className="the-big-div">
      <h2>סיכום ההזמנה</h2>
      <div className="closeCart"></div>
      <ul className="list-group col-md-4">
        <li className="list-group-item active">פירוט המוצרים</li>
        {ProductsCart.map((p) => (
          <li className="list-group-item">
            {p.NameProduct} {p.Price}
          </li>
        ))}
      </ul>
      {/* <div class="btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active"> */}
      <input
        className="btn btn-outline-danger btn-block endd"
        type="submit"
        onClick={() => {
          alert("תודה שקנית BABY B");
        }}
        value="לתשלום בטוח"
      />
      {/* </label>
      </div> */}
    </div>
  );
}

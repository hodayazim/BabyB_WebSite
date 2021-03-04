import React, { useEffect, useState } from "react";
import "../css/shoppingcart.css";

function ShoppingCart() {
  const [arrayofbuy, setarray] = useState([]);
  const [ProductsCart, setProductsCart] = useState([""]);

  // useEffect(() => {
  //   setProductsCart(GetShopping());
  // }, []);

  return (
    <div className="ShoppingCart Right_part_page col-sm-8">
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
          <div>סל הקניות שלך ריק</div>
          <div>
            {ProductsCart && ProductsCart[0] && ProductsCart[0].NameProduct}
          </div>
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

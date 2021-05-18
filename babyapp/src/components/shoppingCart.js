import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import PurchasePage from "./purchasePage.js";
import "../css/shoppingcart.css";

function ShoppingCart(props) {
  const location = useLocation();
  const [arr, setarr] = useState([]);
  const [arrayofbuy, setarray] = useState([]);
  const [ProductsCart, setProductsCart] = useState(
    JSON.parse(localStorage.getItem("CartProduct"))
  );
  var AlertCode = "<div> סל הקניות שלך ריק  </div>";
  var total = 0;
  if (ProductsCart != null) {
    for (let i = 0; i < ProductsCart.length; i++) {
      total += ProductsCart[i].Price * 1;
    }
  }

  if (ProductsCart == null) setProductsCart([" "]);

  useEffect(() => {
    if (ProductsCart == null) {
      setProductsCart("");
      NullList();
    }
    for (let i = 0; i < ProductsCart.length; i++) {
      total += ProductsCart[i].Price * 1;
    }
  });

  function FullList() {
    var A = "";
    // A = ProductsCart[0].map((p) => {'<div>' + p.IdProduct + '</div>'});
    debugger;
    return A;
  }

  function NullList() {
    document.getElementById("tbodt-tabel").innerHTML = AlertCode;
  }

  return (
    <div className="ShoppingCart Right_part_page col-sm-8" onLoad={useEffect}>
      <div className="ShoppingCart_body">
        <div className="ShoppingCart_table_title">
          <h2 className="ShoppingCart_title"> סל הקניות שלי </h2>
          <p>המחירים ניתנים לשינוי בהתאם למחיר המעשי ביום ההזמנה.</p>
        </div>
        <table className="c-bag-table j-expose__cart-list">
          <thead className="thead-table">
            <tr>
              <th className="col-xs-3">תמונה</th>
              <th className="col-xs-4">פריט</th>
              {/* <th className="col-xs-2">חברה</th> */}
              <th className="col-xs-2">צבע</th>
              <th className="col-xs-2">מחיר</th>
              <th className="col-xs-2">כמות</th>
              <th className="col-xs-2 good-total">סך הכול</th>
            </tr>
          </thead>
          <tbody id="tbodt-table">
            {ProductsCart.map((brand) => (
              <tr>
                <img
                  className="col-xs-3"
                  src={brand.Images[0]}
                  className="mini-img"
                ></img>
                <th className="col-xs-4">{brand.NameProduct}</th>
                {/* <th>{brand.Compeny}</th> */}
                <th className="col-xs-2">{brand.Color}</th>
                <th className="col-xs-2">{brand.Price}</th>
                <th className="col-xs-2">1</th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="totalLine">
              <th className=" ">סה"כ</th>
              {/* <th className="2"> </th> */}
              {total}
            </tr>
          </tfoot>
        </table>

        <Link to="/PurchasePage">
          <input
            type="submit"
            className="btn_login btnheader btnmyheaderPink btn-hover color-4 end-btn"
            onClick
            btn-hover
            color-4
            value="לסיכום פרטי ההזמנה"
          />
        </Link>
      </div>
    </div>
  );
}
export default ShoppingCart;

// function FullShoppingCart() {
//   return (
//     <tbody>
//       <tr>
//         <td>
//           <img src="" alt=""></img>

//           <div className="">
//             <div className="">
//               <a href="" target="" rel="" className="">
//                 <span className=""></span>
//                 {/* {ProductsCart[0] && ProductsCart[0].NameProduct} */}
//               </a>

//               <div className="">
//                 <div
//                   className=""
//                   placemen="bottom"
//                   title="אהאם אתה בטוח שברצונך למחוק פריט זה?"
//                   visible-button="true"
//                 >
//                   <span>
//                     <span onClick=" " className="">
//                       מחק
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </td>
//       </tr>
//     </tbody>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import ReactDOM from "react-dom";

// import { withRouter } from "react-router-dom";
// import "../css/shoppingcart.css";

// console.clear();

// let productList = JSON.parse(localStorage.getItem("CartProduct"));

// /* Product */

// /* Total */

// /* ProductForm */

// /* ProductList */
// // class Body extends React.component {
// //   constructor(props) {
// //     super(props);
// //   }

// //   render() {
// //     return <div id="body"> </div>;
// //   }
// // }
// // export default withRouter(Body);
// class shoppingCart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: 0,
//       productList: "",
//     };

//     this.createProduct = this.createProduct.bind(this);
//     this.calculateTotal = this.calculateTotal.bind(this);
//     this.showProduct = this.showProduct.bind(this);
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ productList: productList });
//     }, 1000);
//   }

//   createProduct(product) {
//     this.setState({
//       products: this.state.productList.push(product),
//     });
//   }

//   calculateTotal(price) {
//     this.setState({
//       total: this.state.total + price,
//     });
//     console.log(this.state.total);
//   }

//   showProduct(info) {
//     console.log(info);
//     alert(info);
//   }

//   render() {
//     if (!this.state.productList) return <h5>loading...</h5>;

//     var component = this;
//     return (
//       <>
//         <div className="ShoppingCart_body">
//           <div className="ShoppingCart_table_title">
//             <h2 className="ShoppingCart_title"> סל הקניות שלי </h2>
//             <p>המחירים ניתנים לשינוי בהתאם למחיר המעשי ביום ההזמנה.</p>
//           </div>
//           <table className="c-bag-table j-expose__cart-list">
//             <thead>
//               <tr>
//                 <th className="col-xs-6">פריט</th>
//                 <th className="col-xs-2">מחיר</th>
//                 <th className="col-xs-2">כמות</th>
//                 <th className="col-xs-2 good-total">סך הכול</th>
//               </tr>
//             </thead>
//           </table>
//         </div>
//       </>
//     );
//     var products = this.state.productList.map(function (product) {
//       return (
//         <Product
//           name={product.NameProduct}
//           price={product.Price}
//           img={product.Images[0]}
//           info={product.DescriptionProduct}
//           handleShow={component.showProduct}
//           handleTotal={component.calculateTotal}
//         />
//       );
//     });

//     return <div>{products}</div>;
//   }
// }
// export default withRouter(shoppingCart);

// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       qty: 0,
//     };
//     this.add = this.add.bind(this);
//     this.subtract = this.subtract.bind(this);
//     this.showInfo = this.showInfo.bind(this);
//   }

//   add() {
//     this.setState({
//       qty: this.state.qty + 1,
//     });
//     this.props.handleTotal(this.props.price);
//   }

//   subtract() {
//     this.setState({
//       qty: this.state.qty - 1,
//     });
//     this.props.handleTotal(-this.props.price);
//   }

//   showInfo() {
//     this.props.handleShow(this.props.info);
//   }

//   render() {
//     return (
//       <>
//         <div className="big-div">
//           <div className="row form-group">
//             <img className="mini-img" src={this.props.img} alt="..."></img>
//             <div className="col-sm-10">
//               <h4>
//                 {this.props.name}: {this.props.price} ₪
//               </h4>
//             </div>
//             <div className="col-sm-2 text-right"> {this.state.qty} :כמות</div>
//           </div>
//           <div className="row btn-toolbar">
//             <div className="col-6">
//               <button
//                 className="btn btn-outline-primary"
//                 onClick={this.showInfo}
//               >
//                 ראה פירוט מוצר
//               </button>
//             </div>
//             <div className="col-6 text-right">
//               <button className="btn btn-outline-primary" onClick={this.add}>
//                 +1
//               </button>
//               <button
//                 className="btn btn-outline-primary"
//                 onClick={this.subtract}
//                 disabled={this.state.qty < 1}
//               >
//                 -1
//               </button>
//             </div>
//           </div>
//           <hr />
//         </div>
//       </>
//     );
//   }
// }

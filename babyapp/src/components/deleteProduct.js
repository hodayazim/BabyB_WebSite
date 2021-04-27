import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { BrowserRouter as router } from "react-router-dom";

import "../css/ManagerForms.css";
import { ListBox } from "primereact/listbox";

import Products from "./Product";
import { GetProductById } from "../FUNCTION/ProductFunction";
import { GetSearchProducts } from "../FUNCTION/ProductFunction";
import { GetAllProductsWithoutSearch } from "../FUNCTION/ProductFunction";
// import Autocompletee from "./autocomplete";

/*import of autocaomplete component*/
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function DeleteProduct(data) {
  const [str, setstr] = useState(" ");
  const [oneName, setoneName] = useState(" ");
  const [IdSelect, setIdSelect] = useState(0);
  const [selected, setselected] = useState(" ");
  const [NameSelect, setNameSelect] = useState(" ");
  const [ListProducts, setListProducts] = useState([]);
  const [nameProduct, setnameProduct] = useState([" "]);
  const [ProductDelete, setProductDelete] = useState(" ");

  // function NumberList(props) {
  //   // const numbers = props.numbers;
  //   const listItems = nameProduct.map((item) => <li>{item}</li>);
  //   return <ul>{listItems}</ul>;
  // }

  // useEffect(() => {
  //   GetAllProductsWithoutSearch().then((res) => {
  //     if (res != undefined) {
  //       for (var i = 0; i < res.length; i++) {
  //         ListProducts[i] = res[i];
  //       }
  //     } else {
  //       ListProducts[0] = "לא נמצאו מוצרים";
  //     }
  //     console.log(ListProducts);
  //   });
  // });

  const [arr, setarr] = useState([[]]);
  function changenameProduct(val) {
    // if (str == " " || str == null) {
    //   setnameProduct(arr);
    // } else {
    setstr(val);
    callSearch(val);
    //}
  }
  // useEffect(() => {
  //   GetSearchProducts().then((res) => {
  //     console.log(res);
  //     for (var i = 0; i < res.length; i++) {
  //       const List = nameProduct;
  //       List[i] = res[i].NameProduct;
  //       setnameProduct(List);
  //     }
  //     setoneName(res[0].NameCategory);
  //     console.log(nameProduct);
  //   });
  // });

  function callSearch(val) {
    // const L = GetSearchProducts();
    // for (var i = 0; i < 2; i++) {
    //   const List = nameProduct;
    //   List[i] = L[i].nameProduct;
    //   nameProduct(List);
    // }
    // setoneName(L[0].NameCategory);
    // console.log({ nameProduct });
    //

    GetSearchProducts(val).then((res) => {
      console.log(res);
      // for (var j = 0; j < nameProduct.length; j++) {
      //   nameProduct.pop();
      // }
      setnameProduct(arr);
      setnameProduct([[]]);

      for (var i = 0; i < res.length; i++) {
        const List = nameProduct;
        List[i] = res[i].NameProduct;
        setnameProduct(List);
      }
      console.log("1" + nameProduct);
      document.title = `${nameProduct}`;
    });
  }

  // function fun(val) {
  //   NameSelect = val;
  //   fun2();
  // }

  // useEffect(() => {
  //   setNameSelect(document.getElementsByTagName("Autocomplete"));
  // });

  // function fun(val) {
  //   const D = data.products;
  //   var CardSelectProduct = "";
  //   for (let i = 0; i < D.length; i++) {
  //     if (D[i].NameProduct == val) {
  //       GetProductById(D[i].IdProduct)
  //         .then((res) => {
  //           const ProductSelect = res;
  //           CardSelectProduct =
  //             '<div className="card"  style="width: 18rem;">' +
  //             '<img src="..." className="card-img-top" alt="..."/>' +
  //             '<div className="card-body">' +
  //             '<h5 className="card-title">' +
  //             res.NameProduct +
  //             "</h5>" +
  //             '<p className="card-text">' +
  //             res.Price +
  //             "</p>" +
  //             " </div>" +
  //             "</div>";
  //           document.getElementById(
  //             "CardSelectProductDIV"
  //           ).innerHTML = CardSelectProduct;
  //           // alert(JSON.stringify(res));
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   }
  // }

  function fun(val) {
    const D = data.products;
    var CardSelectProduct = "";
    for (let i = 0; i < D.length; i++) {
      if (D[i].NameProduct == val) {
        CardSelectProduct =
          '<div className="card"  style="width: 18rem;">' +
          // '<div >' +
          "<img style='max-width:20px' src=" +
          D[i].Images[0] +
          ' className="card-img-top" alt="..."/>' +
          // "</div>" +
          '<div className="card-body">' +
          '<h5 className="card-title">' +
          D[i].NameProduct +
          "</h5>" +
          '<p className="card-text">' +
          D[i].Price +
          "</p>" +
          " </div>" +
          "</div>";
        document.getElementById(
          "CardSelectProductDIV"
        ).innerHTML = CardSelectProduct;
        // alert(JSON.stringify(res));
      }
    }
  }

  // Configure JSS
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  return (
    <>
      <div className="AddProductDiv ManagerForms">
        {/* <p className="explain">
          עמ"נ למחוק מוצר מן במערכת יש לפעול עפ"י הכללים הבאים:
        </p> */}
        <br />
        <p className="text-break">
          יש להקיש את שמו בתיבת הטקסט העליונהלאחר מכן יוצגו כל המוצרים המכילים
          את הטקטס אותו כתבתיש לבחור את המוצר המתבקש מתוך הרשימהלאחר מכן יש
          להקיש את סיסמת המנהל לאישור המחיקה
        </p>
        {/* <ol type="1">
          <li>יש להקיש את שמו בתיבת הטקסט העליונה</li>
          <li>לאחר מכן יוצגו כל המוצרים המכילים את הטקטס אותו כתבת</li>
          <li>יש לבחור את המוצר המתבקש מתוך הרשימה</li>
          <li>לאחר מכן יש להקיש את סיסמת המנהל לאישור המחיקה</li>
        </ol> */}

        <div className="backgroundGradient">
          <form className="AddProductForm FormContent" autoComplete="on">
            <div className="row">
              <div className="col">
                <Autocomplete
                  jss={jss}
                  dir="rtl"
                  className="Autocomplete"
                  id="free-solo-demo"
                  options={data.products.map((option) => option.NameProduct)}
                  IdProduct={data.products.map((option) => option.IdProduct)}
                  onChange={(event, newValue) => {
                    setNameSelect(newValue);
                    fun(newValue);
                    // setIdSelect(option);
                  }}
                  renderInput={(params) => (
                    <TextField
                      jss={jss}
                      dir="rtl"
                      {...params}
                      label="freeSolo"
                      className="TextField"
                      margin="normal"
                      variant="outlined"
                      multiple
                    />
                  )}
                />
                <div id="CardSelectProductDIV"></div>
                {/*

                  -
                  -
                  -
                  -
                  
                  */}
                {/* <input
                  type="text"
                  className="form-control input"
                  autoFocus
                  placeholder=" "
                  // value={nameProduct}
                  onChange={(e) => changenameProduct(e.target.value)}
                ></input>
                <select type="select">
                  {nameProduct.map((item) => (
                    <option
                      id="idoption"
                      // key={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
                <NumberList nameProduct={nameProduct} /> */}
                {/* <ul>
                  {nameProduct.map((item) => {
                    <li key={item}> {item} </li>;
                  })}
                </ul> */}
                {/* <select
                  type="select"
                  className="form-control input"
                  options={nameProduct}
                  value={selected}
                  onChange={(e) => setselected(e.target.value)}
                >
                  <option value="" disabled selected>
                    בחר קטגוריה
                  </option>
                  {nameProduct.map((value) => (
                    <option value={value}>{value}</option>
                  ))}
                </select> */}
                {/* {nameProduct.map((value) => (
                  <select
                    type="select"
                    className="form-control input"
                    options={value}
                    //onChange={(e) => callSearch(e.target.value)}
                  >
                    <option value={value}>{value}</option>
                  </select>
                ))} */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

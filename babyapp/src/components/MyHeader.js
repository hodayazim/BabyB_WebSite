import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import Main from "./Main.js";
import Loginup from "./login_up.js";
import Search from "./Search.js";
import ShoppingCart from "./shoppingCart";
import ManagerForms from "./ManagerForms";
import Products from "./Product";
import Error from "./Error";
import "../css/search_1.css";
import "../css/Header&Footer.css";
import "../css/creativeLinkEffects.css";
import PinkLogo from "../Pictures/PinkLogo.svg";
import axios from "axios";
import "antd/dist/antd.css";
import { DownloadOutlined } from "@ant-design/icons";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  AiOutlineForm,
  AiOutlineShopping,
  AiOutlineHeart,
} from "react-icons/ai";
import {
  GetAllCategories,
  GetProductsByStr,
  GetListProductsById,
} from "../FUNCTION/ProductFunction";

function MyHeader() {
  let history = useHistory();
  const [cat, setcat] = useState(" ");
  const [EmptyArr, setEmptyArr] = useState([]);
  const [IdProducts, setIdProducts] = useState();
  const [Categories, setCategories] = useState([" "]);
  const [CountProduct, setCountProduct] = useState(0);
  const [name, setName] = useState(localStorage.getItem("EMail"));
  const [EmptyArr2, setEmptyArr2] = useState([""]);

  var stringTry = "?";

  window.onload = function () {
    if (localStorage.getItem("IdUser") != 15) {
      document.getElementById("iconManager").style.visibility = "hidden";
    }
  };
  // for (let i = 0; i < array.length; i++) {
  //   stringTry += "jj" + array[i];
  // }

  // function onClickChangeColor() {
  //   var someElement = document.getElementsByClassName("btnmyheaderPink");
  //   someElement.className += " btnmyheaderBlue";
  //   //add "newclass" to element (space in front is important)
  //   // someElement.className -= "btnmyheaderPink";
  //   // const [btnmyheaderPink, setToggleClass] = useState(false);
  //   // $(".btnmyheaderPink").toggleClass("btnmyheaderBlue");
  //   // toggleClass ? "btnmyheaderPink" : "btnmyheadeBlue";
  //   // element.className.add("btnmyheaderBlue");
  //   // element.className.remove("btnmyheaderPink");
  //   // setcolor("blue");
  // }

  useEffect(() => {
    GetAllCategories()
      .then((res) => {
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          const cat1 = Categories;
          cat1[i] = res[i].NameCategory;
          setCategories(cat1);
        }
        setcat(res[0].NameCategory);
        console.log({ Categories });
        // history.push("/");
        // window.location.reload();
        // window.preventDefault();
      })
      .catch((err) => {
        history.push("/404");
        // window.location.reload();
        // window.preventDefault();
        //   setcat({
        //     name: 'Sam',
        //     email: 'somewhere@gmail.com'
        // })
      });
  });

  useEffect(() => {
    if (
      localStorage.FirstNameUser == null ||
      localStorage.FirstNameUser.length == 0
    )
      localStorage.setItem("FirstNameUser", "אורח");
  });

  function LoadProductsByCategory(str) {
    GetProductsByStr(str.target).then((res) => {
      console.log(res);
      history.push("/Products", { data: res });
      window.location.reload();
    });
  }

  function LoadShoppingCart() {
    debugger;
    axios
      .get(
        `http://localhost:17374/api/ShoppingCart/GetShoppingByIdUser/${localStorage.getItem(
          "IdUser"
        )}`
      )
      .then((res) => {
        // setEmptyArr([]);
        // const AllProduct = EmptyArr;
        const arr = res.data;
        if (arr["length"] != 0) {
          arr.forEach((item) => {
            // AllProduct.push(item.IdProduct);
            //?IdProducts=9&IdProducts=7
            stringTry += "IdProducts=" + item.IdProduct + "&";
          });
          axios
            .get(
              `http://localhost:17374/api/Products/GetListOfProductById${stringTry}`
            )
            .then((res2) => {
              debugger;
              localStorage.setItem("CartProduct", JSON.stringify(res2.data));
            })
            .catch(function (error) {
              debugger;
              console.log(error);
            });
        }
        history.push("/ShoppingCart", {
          data: arr,
          // List: ListOfProducts,
        });
        window.location.reload();
        window.preventDefault();
      })
      .catch(function (error) {
        console.log("GetShoppingByIdUser is faild!");
        console.log(error);
      });
  }

  const handleClick = (event) => {
    //event.preventDefault();
    console.log("The link was clicked.");
  };

  return (
    <Router>
      <div className="bodyheader container-fluid">
        {/*-----Log-----*/}
        <div className="divbtnheader">
          <p className="helloUser">
            שלום {localStorage.getItem("FirstNameUser")}&nbsp; אנחנו שמחים
            לראותך ! &nbsp; &nbsp;
          </p>
          <Link to="/Loginup">
            <input
              type="submit"
              className="btn_login btnheader btnmyheaderPink btn-hover color-4"
              onClick
              btn-hover
              color-4
              // className={toggleClass ? "btnmyheaderPink" : "btnmyheaderBlue"}
              value="כניסה לחשבון קיים"
            />
          </Link>
          <Link to="/Loginup">
            <input
              type="submit"
              className="btn_signup btnheader btnmyheaderPink  btn-hover color-4"
              onClick=" "
              value="משתמש חדש הירשם כאן!"
            />
          </Link>
        </div>
        {/*-----Logo-----*/}

        <a className="LogoPng" href="/#">
          <img src={PinkLogo} /*onClick={handleClick()}*/ />
        </a>

        <div className="Search">
          <Search />
        </div>

        <Link id="iconManager" to="/ManagerForms">
          <AiOutlineForm onClick=" " id="iconManager" className="linkIcon a" />
        </Link>

        <Link to="/ShoppingCart">
          <AiOutlineShopping
            // onClick=" "
            className="linkIcon c"
            onClick={() => LoadShoppingCart()}
          />
        </Link>

        <span className="spanCategory">
          <section className="color-10">
            <nav className="cl-effect-10 navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="/#">
                <span className="G">דף הבית |</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="cl-effect-10 collapse navbar-collapse"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  {Categories.map((value) => (
                    <li className="nav-item active">
                      <a
                        className="nav-link pl-0 pr-0"
                        target={value}
                        data-hover={value}
                        onClick={(e) => {
                          LoadProductsByCategory(e.target);
                        }}
                      >
                        <span className="spanCat">{value}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </section>
        </span>
      </div>
    </Router>
  );
}
export default MyHeader;

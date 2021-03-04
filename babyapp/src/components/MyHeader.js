import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import Main from "./Main.js";
import Loginup from "./login_up.js";
import Search from "./Search.js";
import ShoppingCart from "./shoppingCart";
import ManagerForms from "./ManagerForms";
import Products from "./Product";
import "../css/search_1.css";
import "../css/Header&Footer.css";
import "../css/creativeLinkEffects.css";
import PinkLogo from "../Pictures/PinkLogo.svg";
import axios from "axios";
import "antd/dist/antd.css";
import { DownloadOutlined } from "@ant-design/icons";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import {
  AiOutlineForm,
  AiOutlineShopping,
  AiOutlineHeart,
} from "react-icons/ai";
import { GetShoppingByIdUser } from "../FUNCTION/ShoppingCartFunction";
import {
  GetAllCategories,
  GetProductsByStr,
} from "../FUNCTION/ProductFunction";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function MyHeader() {
  let history = useHistory();
  const [cat, setcat] = useState(" ");
  const [Categories, setCategories] = useState([" "]);
  const [name, setName] = useState(localStorage.getItem("EMail"));
  function onClickChangeColor() {
    var someElement = document.getElementsByClassName("btnmyheaderPink");
    someElement.className += " btnmyheaderBlue";
    //add "newclass" to element (space in front is important)
    // someElement.className -= "btnmyheaderPink";
    // const [btnmyheaderPink, setToggleClass] = useState(false);
    // $(".btnmyheaderPink").toggleClass("btnmyheaderBlue");
    // toggleClass ? "btnmyheaderPink" : "btnmyheadeBlue";
    // element.className.add("btnmyheaderBlue");
    // element.className.remove("btnmyheaderPink");
    // setcolor("blue");
  }

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
      })
      .catch((err) => {
        console.log("this was error");
        //   setcat({
        //     name: 'Sam',
        //     email: 'somewhere@gmail.com'
        // })
      });
  });

  useEffect(() => {
    if (localStorage.length == 0) localStorage.setItem("FirstNameUser", "אורח");
  });

  function LoadProductsByCategory(str) {
    debugger;
    GetProductsByStr(str.target).then((res) => {
      console.log(res);
      history.push("/Products", { data: res });
      window.location.reload();
    });
  }

  function LoadShoppingCart() {
    debugger;
    GetShoppingByIdUser()
      .then((res) => {
        console.log("GetShoppingByIdUser come back!");
        history.push("/ShoppingCart", { data: res });
        window.location.reload();
      })
      .catch(function (error) {
        console.log("GetShoppingByIdUser is faild!");
        console.log(error);
      });
  }

  const handleClick = (event) => {
    debugger;
    //event.preventDefault();
    console.log("The link was clicked.");
  };
  debugger;

  return (
    <Router>
      <div className="bodyheader container-fluid">
        {/*-----Log-----*/}
        <div className="divbtnheader">
          <p className="helloUser">
            היי {localStorage.getItem("FirstNameUser")} אנחנו שמחים לראותך!
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
        <Link to="/" className="LogoPng" /*activeClassName="active"*/>
          <img src={PinkLogo} /*onClick={handleClick()}*/ />
        </Link>

        <div className="Search">
          <Search />
        </div>

        <Link to="/ManagerForms">
          <AiOutlineForm onClick=" " className="linkIcon a" />
        </Link>

        <Link to="/ShoppingCart">
          <AiOutlineShopping
            onClick=" "
            className="linkIcon c"
            onClick={() => LoadShoppingCart()}
          />
        </Link>

        <span className="spanCategory">
          <section className="color-10">
            {/* <nav className="cl-effect-10 navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
                דף הבית |
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
              > */}
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
                {/* <ul className="navbar-nav">
                   <li className="nav-item active">
                      <a
                        className="nav-link pl-0 pr-0"
                        href="#"
                        data-hover={Categories[1]}
                      >
                        <span>{Categories[1]}</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link pl-0 pr-0"
                        href="#"
                        data-hover={Categories[2]}
                      >
                        <span>{Categories[2]}</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  pl-0 pr-0"
                        href="#"
                        data-hover={Categories[3]}
                      >
                        <span>{Categories[3]}</span>
                      </a>
                    </li> */}
              </div>
            </nav>
          </section>
        </span>
        {/* <span className="spanCategory">
          <section className="color-10">
            <nav className="cl-effect-10">
              <a data-hover="עגלות">
                <button>
                  <span>עגלות</span>
                </button>
              </a> 
              <a href="#" data-hover="קטגוריה">
                <span>קטגוריה</span>
              </a>
              <a href="#" data-hover="קטגוריה">
                <span>קטגוריה</span>
              </a>
              <a href="#" data-hover="קטגוריה">
                <span>קטגוריה</span>
              </a>
              <a href="#" data-hover="קטגוריה">
                <span>קטגוריה</span>
              </a>
            </nav>
          </section>
        </span> */}
      </div>
    </Router>
  );
}
export default MyHeader;

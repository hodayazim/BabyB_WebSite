import ReactDOM from "react-dom";
import React, { Component } from "react";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Parallax } from "react-parallax";
//Parallax is scroll design

import "./App.css";
import axios from "./axios";

import Main from "./components/Main";
import Footer from "./components/Footer";
import Products from "./components/Product";
import MyHeader from "./components/MyHeader";
import Loginup from "./components/login_up.js";
import AddProduct from "./components/addProduct";
import ErrorNetwork from "./components/errNetwork";
import ShoppingCart from "./components/shoppingCart";
import ManagerForms from "./components/ManagerForms.js";
import ProductDetails from "./components/productDetails";

import { AiOutlineUpCircle } from "react-icons/ai";
//import { BiHeart, BiShoppingBag } from "react-icons/bi";

// const getFonts = () =>
//   Font.loadAsync({
//     "VarelaRound-Regular": require("./css/VarelaRound-Regular.ttf"),
//   });

/*change color*/
{
  // window.onscroll = function a() {
  //   myFunction();
  // };
  // // Get the header
  // var header = document.getElementById("myHeader");
  // // Get the offset position of the navbar
  // var sticky = MyHeader.offsetTop;
  // // Add the sticky class to the header when you reach
  // //  its scroll position. Remove "sticky" when you leave the scroll position
  // let className = this.state.className;
  // function myFunction() {
  //   className = className + " " + "sticky";
  //   this.setState({ className });
  //   // if (window.pageYOffset > sticky) {
  //   //   MyHeader.classList.add("sticky");
  //   // }
  //   //else {
  //   //  MyHeader.className.
  //   // }
  // }
}

// function App() {
// const [fontsLoaded, setFontsLoaded] = useState(false);
// if (fontsLoaded) {
// function scrollWin() {
//   window.scrollTo(0, 0);
// }

function App() {
  return (
    <div className="App">
      {/* <span id="top"></span> */}
      <MyHeader />
      <div className="bodyApp">
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/shoppingCart/">
              <ShoppingCart />
            </Route>
            <Route path="/Loginup">
              <Loginup />
            </Route>

            <Route exact path="/404">
              <ErrorNetwork />
            </Route>

            <Route path="/ManagerForms/addProduct/">
              <AddProduct />
            </Route>
            <Route path="/ManagerForms/DeleteProduct/">
              <AddProduct />
            </Route>
            <Route path="/ManagerForms/">
              <ManagerForms />
            </Route>
            <Route path="/Products/">
              <Products />
            </Route>
            <Route path="/ProductDetails/">
              <ProductDetails />
            </Route>
            <Route path="*" component={Error} />
          </Switch>
        </Router>
        <a href="#" className="topbtn">
          <AiOutlineUpCircle className="topbtn" />
        </a>
      </div>
      <Footer />
    </div>
  );
}
export default App;

/*loading font*/
// else {
//   return (
//     <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
//   );
// }

// }
// export default App;

//   old Rout
{
  /* <Route exact path="/Loginup" component={Loginup} /> */
}

import React, { useState, useEffect } from "react";
import { IoMdDesktop } from "react-icons/io";

/*import of autocaomplete component*/
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// import Select from 'react-select';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import "../css/ManagerForms.css";
import { Alert } from "antd";
import { DatePicker } from "antd";
import { GetAllUsers } from "../FUNCTION/UserFunction";
import { GetAllProductsWithoutSearch } from "../FUNCTION/ProductFunction";

function ManagerForms(props) {
  const [color, setColor] = useState("pink");
  const [ListUsers, setListUsers] = useState([]);
  const [ListProducts, setListProducts] = useState([]);

  let colorStyle = {
    backgroundColor: { color },
  };

  function ChangeColor() {
    if (color === "pink") {
      setColor("green");
    } else {
      setColor("pink");
    }
  }

  useEffect(() => {
    GetAllProductsWithoutSearch().then((res) => {
      for (var i = 0; i < res.length; i++) {
        ListProducts[i] = res[i];
      }
      console.log(ListProducts);
    });
  });

  useEffect(() => {
    GetAllUsers().then((res) => {
      for (var i = 0; i < res.length; i++) {
        ListUsers[i] = res[i];
      }
      console.log(ListUsers);
    });
  });

  return (
    <div>
      <div style={colorStyle.backgroundColor} className="main">
        <button className="ChangeColor" onClick={() => ChangeColor()}>
          ChangeColor
        </button>
      </div>
      <Router>
        <div>
          <MenuForms />
          <Switch>
            <Route path="/ManagerForms/AddProduct">
              <AddProduct />
            </Route>
            <Route path="/ManagerForms/DeleteProduct">
              <DeleteProduct products={ListProducts} />
            </Route>
            <Route path="/ManagerForms/OtherForm">
              <OtherForm user={ListUsers} />
            </Route>
            <Route path="/ManagerForms/OtherForm">
              <OtherForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default ManagerForms;

function MenuForms() {
  const [ListUsers, setListUsers] = useState([]);

  useEffect(() => {
    GetAllUsers().then((res) => {
      for (var i = 0; i < res.length; i++) {
        ListUsers[i] = res[i];
      }
      console.log(ListUsers);
    });
  });

  return (
    <div>
      <a href="http://localhost:3000/" target="_blank" alt="User View">
        <IoMdDesktop onClick=" " className="DesktopIcon UserView" />
      </a>
      <ul className="ListbtnForm">
        <li>
          <Link
            to="/ManagerForms/AddProduct"
            className="ListbtnForm"
            // data={ListUsers}
          >
            הוספת מוצר
          </Link>
        </li>
        <li>
          <Link to="/ManagerForms/DeleteProduct" className="ListbtnForm">
            מחיקת מוצר
          </Link>
        </li>
        <li>
          <Link to="/ManagerForms/OtherForm" className="ListbtnForm">
            נתינת הרשאה
          </Link>
        </li>
        <li>
          <Link to="/OtherForm" className="ListbtnForm">
            מחיקת הרשאה
          </Link>
        </li>
      </ul>
    </div>
  );
}

// /* Delete Product Form */
// export function DeleteProduct() {
//   return (
//     <div className="DeleteProductDiv ManagerForms">
//       <form className="DeleteProductForm FormContent">
//         <label>קטגוריה</label>
//         <input type="text" className="input" />
//         <label>תת קטגוריה</label>
//         <input type="text" className="input" />
//         <label>שם מוצר</label>
//         <input type="text" className="input" />
//       </form>
//     </div>
//   );
// }

export function OtherForm(data) {
  const [ListUsers, setListUsers] = useState([]);
  const [Num, setNum] = useState([{ num: 0 }, { num: 1 }, { num: 2 }]);
  const [Number, setNumber] = useState(null);

  // useMountEffect(() => {
  //   GetAllUsers()
  //     .then((res) => {
  //       for (var i = 0; i < res.length; i++) {
  //         ListUsers[i] = res[i];
  //       }
  //       console.log(ListUsers);
  //     })
  //     .catch((err) => {
  //       console.log("catch");
  //     });
  // });

  useEffect(() => {
    GetAllUsers().then((res) => {
      for (var i = 0; i < res.length; i++) {
        ListUsers[i] = res[i];
      }
      console.log(ListUsers);
      <Alert message="Success Text" type="success" />;
    });
  });

  return (
    <>
      <div className="AddProductDiv ManagerForms">
        <div className="backgroundGradient">
          <form className="AddProductForm FormContent" autoComplete="on">
            <div className="row">
              <div className="col">
                {/* <p>{ListUsers[0].FirstNameUser}</p> */}
                <Autocomplete
                  id="free-solo-demo"
                  className="aoutocompleteForm"
                  options={data.user.map(
                    (option) => option.FirstNameUser + " " + option.LastNameUser
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="freeSolo"
                      margin="normal"
                      variant="outlined"
                    />
                  )}
                />

                <select
                  type="select"
                  className="form-control input selectOption"
                  placeholder=" "
                  value={Number}
                  onChange={(e) => setNumber(e.target.value)}
                >
                  <option value=" " disabled selected>
                    בחר סוג הרשאה
                  </option>
                  {Num.map((val) => (
                    <option>{val.num}</option>
                  ))}
                </select>
              </div>
              <div className="col">
                {" "}
                <Autocomplete
                  id="free-solo-demo"
                  className="aoutocompleteForm"
                  options={data.user.map(
                    (option) => option.FirstNameUser + " " + option.LastNameUser
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="freeSolo"
                      margin="normal"
                      variant="outlined"
                    />
                  )}
                />
                <select
                  type="select"
                  className="form-control input selectOption"
                  placeholder=" "
                  value={Number}
                  onChange={(e) => setNumber(e.target.value)}
                >
                  <option value=" " disabled selected>
                    בחר סוג הרשאה
                  </option>
                  {Num.map((val) => (
                    <option>{val.num}</option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

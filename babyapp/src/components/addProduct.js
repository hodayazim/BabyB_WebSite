import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "../axios";
import { BrowserRouter as router } from "react-router-dom";
import { AddNewProduct } from "../FUNCTION/ProductFunction";
import { GetIdSubCategory } from "../FUNCTION/ProductFunction";
import { GetAllCategories } from "../FUNCTION/ProductFunction";
import Image from "./image";
import CheckableList from "./image";
import "../css/ManagerForms.css";
import { Alert } from "antd";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { DatePicker } from "antd";
//import { useForm } from "react-hook-form";

/* Add Product Form */
export default function AddProduct(/*{ onSubmit }*/) {
  // const UserForm = (props) => {
  // const [Product, setProduct] = useState(props.Product);

  // const submit = (e) => {
  //   debugger;
  // e.preventDefault();
  // fetch("/api", {
  //   method: "POST",
  //   body: JSON.stringify({ Product }),
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then((res) => res.json())
  //   .then((json) => setProduct(json.Product));
  //}

  const [NameProduct, setNameProduct] = useState("");
  const [Color, setColor] = useState("");
  const [size, setsize] = useState("");
  const [IdSubcategory, setIdSubcategory] = useState("");
  const [Company, setCompany] = useState("");
  const [UnitsInStock, setUnitsInStock] = useState("");
  const [Price, setPrice] = useState("");
  const [ImageOfProduct, setImageOfProduct] = useState("");
  const [DescriptionProduct, setDescriptionProduct] = useState("");
  const [images, setimages] = useState([""]);
  const [CountImages, setCountImages] = useState(0);

  function changeNameProduct(val) {
    setNameProduct(val);
  }
  function changeColor(val) {
    setColor(val);
  }
  function changeSize(val) {
    setsize(val);
  }
  function changeIdSubcategory(val) {
    setIdSubcategory(val);
  }
  function changeCompany(val) {
    setCompany(val);
  }
  function changeUnitsInStock(val) {
    setUnitsInStock(val);
  }
  function changePrice(val) {
    setPrice(val);
  }
  function changeImageOfProduct(val) {
    console.log("change");
    const newimages = images;
    console.log(newimages);
    newimages[CountImages] = val;
    setimages(newimages);
    setCountImages((e) => e + 1);
  }
  function changeDescriptionProduct(val) {
    setDescriptionProduct(val);
  }

  function DeleteState() {
    setimages([" "]);
    setCountImages(0);
  }

  //מונע מהדף להתרפרש מליון פעם
  const handleSubmit = (event) => {
    console.log(event);
    if (
      NameProduct != "" &&
      Company != "" &&
      IdSubcategory != "" &&
      Price != ""
    )
      AddNewProduct(
        {
          NameProduct: NameProduct,
          Color: Color,
          size: size,
          IdSubcategory: IdSubcategory,
          Company: Company,
          UnitsInStock: UnitsInStock,
          Price: Price,
          DescriptionProduct: DescriptionProduct,
          ImageOfProduct: ImageOfProduct,
          CountImages: CountImages,
        },
        images
      );
    else {
      swal({
        icon: "error",
        title: "הפעולה לא הושלמה",
        text: "אחד או יותר מהשדות ריקים",
        type: "error",
      });
    }
    event.preventDefault();
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   AddNewProduct({ NameProduct: NameProduct, Color: Color, size: size });
  // };
  // const SelectNameProduct = (e) => {
  //   setNameProduct(e.target.value);
  //   setColor(e.target.value);
  //   setPrice(e.target.value);
  // };

  /* on submit*/
  // const { register, handleSubmit } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  /* list Category*/
  const [myArray, setMyArray] = useState([" "]);

  /* list subCategory*/
  const [myArray2, setMyArray2] = useState([]);

  const [changeCategory, setCategory] = useState();
  const SelectCategory = (e) => {
    setCategory(e.target.value);
    GetSubCategories(e.target.value);
  };

  /*onLoad*/
  const useMountEffect = (fun) => useEffect(fun, []);
  useMountEffect(() => {
    GetAllCategories()
      .then((result) => {
        setMyArray(result);
        // for (var i = 0; i < result.length; i++) {
        //   const newArray = myArray;
        //   newArray[i] = result.NameProduct;
        //   setMyArray(newArray);
        // }
      })
      .catch((err) => {
        console.log("catch");
      });
  });

  // debugger;
  // // const [color, setColor] = useState("");
  // //const [password, setPassword] = useState("")

  // const handleSubmit = (e) => {
  //   debugger;
  //   e.preventDefault();
  //   onSubmit(SelectNameProduct(e.target.value));
  // };

  // onChange = e => {
  //   this.setState({ company: e.target.value });
  // };

  // function GetAllCategories() {
  //   axios.get("Category/GetAllCategories").then((result) => {
  //     // setMyArray(result.data);
  //     // return (
  //     //   <div>
  //     //     {myArray.map((res) => {
  //     //       return <div>{res.NameCategory}</div>;
  //     //     })}
  //     //   </div>
  //     // );
  //     console.log(result.data);
  //   });
  // }

  function GetSubCategories(selectedCategory) {
    axios
      .get(
        "http://localhost:17374/api/Category/GetSubCategories/" +
          selectedCategory
      )
      .then((result) => {
        setMyArray2(result.data);
        console.log(result.data);
      });
  }

  return (
    <div className="AddProductDiv ManagerForms">
      <div className="backgroundGradient">
        <form className="AddProductForm FormContent" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control input"
                autoFocus
                placeholder=" "
                value={NameProduct}
                onChange={(e) => changeNameProduct(e.target.value)}
              ></input>
              <label className="Add-form">שם מוצר</label>
            </div>
            <div className="col">
              <select
                type="select"
                className="form-control input"
                placeholder=" "
                value={Color}
                onChange={(e) => changeColor(e.target.value)}
              >
                <option value="" disabled selected>
                  בחר צבע
                </option>
                <option>אדום</option>
                <option>ורוד</option>
                <option>סגול</option>
                <option>כחול</option>
                <option>תכלת</option>
                <option>אפור</option>
                <option>לבן</option>
                <option>שחור</option>
                <option>ירוק</option>
                <option>כתום</option>
                <option>צהוב</option>
                <option>צבעוני</option>
              </select>
            </div>
            <div className="col">
              <select
                type="select"
                className="form-control input"
                options={myArray}
                onChange={(e) => GetSubCategories(e.target.value)}
              >
                <option value="" disabled selected>
                  בחר קטגוריה
                </option>
                {myArray.map((value) => (
                  <option>{value.NameCategory}</option>
                ))}
              </select>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control input"
                placeholder=" "
                value={size}
                onChange={(e) => changeSize(e.target.value)}
              ></input>
              <label className="Add-form">מידה</label>
            </div>
            <div className="col">
              <input
                type="text"
                list="subCategories"
                className="form-control input"
                placeholder=" "
                onChange={(e) => changeIdSubcategory(e.target.value)}
              />
              <label className="Add-form">תת קטגוריה</label>
              <datalist id="subCategories">
                <option value="בחר תת קטגוריה" disabled selected></option>
                {myArray2.map((value) => (
                  <option>{value}</option>
                ))}
              </datalist>
            </div>
            {/* <div className="col">
              <select
                type="select"
                className="form-control input"
                options={myArray2}
                value={IdSubcategory}
                onChange={(e) => changeIdSubcategory(e.target.value)}
              >
                <option value="" disabled selected>
                  בחר תת קטגוריה
                </option>
                {myArray2.map((value) => (
                  <option>{value}</option>
                ))}
              </select>
            </div> */}

            <div className="col">
              <select
                type="select"
                className="form-control input"
                placeholder=" "
                value={Company}
                onChange={(e) => changeCompany(e.target.value)}
              >
                <option value="" disabled selected>
                  בחר חברה
                </option>
                <option>Baby Jogger</option>
                <option>Chicco</option>
                <option>CYBEX</option>
                <option>Twigy</option>
                <option>BabyTech</option>
                <option>Tommee Tippee</option>
                <option>טל - רהיטי תינוק</option>
              </select>
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control input"
                placeholder=" "
                value={UnitsInStock}
                min="1"
                onChange={(e) => changeUnitsInStock(e.target.value)}
              ></input>
              <label className="Add-form">כמות</label>
            </div>
            <div className="col">
              <input
                type="money"
                className="form-control input"
                placeholder=" "
                value={Price}
                onChange={(e) => changePrice(e.target.value)}
              ></input>
              <label className="Add-form">מחיר ₪</label>
            </div>
            {/* <Image /> */}
            <div className="col">
              <input
                type="file"
                className="form-control input marginRig"
                placeholder="הכנס תמונה"
                // value={ImageOfProduct}
                onChange={(e) => changeImageOfProduct(e.target.value)}
              />
            </div>
            <div className="col">
              <textarea
                type="text"
                className="form-control input marginRig"
                placeholder=" "
                rows="3"
                cols="34"
                maxLength="1000"
                value={DescriptionProduct}
                onChange={(e) => changeDescriptionProduct(e.target.value)}
              ></textarea>
              <label className="Add-form">תיאור מוצר</label>
            </div>
            <div className="col btn-col">
              {/*
              
              it's was working but i want the bootstrap style:
              
              <input
                type="button"
                onClick={handleSubmit}
                placeholder="הוסף מוצר"
                className="addbtn btn btn-outline-danger btn-block"
              /> */}
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-outline-danger btn-block"
              >
                הוסף מוצר
              </button>
            </div>

            {/* <div className="col">
            <input
              type="file"
              className="form-control input"
              placeholder="הכנס תמונה"
              //name="picture"
              value={ImageOfProduct}
              onChange={(e) => changeImageOfProduct(e.target.value)}
            />
            <button onClick={() => addImageInput()}>+</button>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "../css/productDetails.css";
import { AddProductToCart } from "../FUNCTION/ShoppingCartFunction";

function ProductDetails(ssdd) {
  const [IdUser, setIdUser] = useState("");
  const [IdProduct, setIdProduct] = useState("");
  const [Category, setCategory] = useState("");
  const [Subcategory, setSubcategory] = useState("");
  const [DateAdded, setDateAdded] = useState("");
  const [AmountOfPurchases, setAmountOfPurchases] = useState("");
  const [PathImages, setPathImages] = useState([""]);
  // const [ImagesProduct, setImagesProduct] = useState(
  //   localStorage.getItem("ImagesProduct")
  // );

  var images = JSON.parse(localStorage.getItem("ImagesProduct"));
  for (let i = 0; i < images.length; i++) {
    PathImages[i] = images[i].PathImage;
  }

  const AddToCart = (event) => {
    debugger;
    console.log(event);
    AddProductToCart({
      IdUser: localStorage.IdUser,
      IdProduct: params.IdProduct,
      Category: localStorage.Category,
      Subcategory: params.IdSubcategory,
      // AmountOfPurchases: AmountOfPurchases,
      // DateAdded: DateAdded,
    });
    event.preventDefault();
  };

  function goBack() {
    alert("goBack");
    window.history.back();
  }

  const params = window.history.state.state.data;
  console.log(params);
  return (
    <div className="row row-cols-1 flex-xl-row-reverse Product">
      <div className="cardProduct">
        <nav className="navProduct">
          {/* <svg
              className="arrow" onClick={() => goBack()}
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
            >
              <polygon
                points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "
                stroke="#727272"
              />
            </svg> */}
          חזור לכל {localStorage.Category}
          {/* <svg
            className="heart"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            stroke="#727272"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
              stroke="#727272"
            />
          </svg> */}
        </nav>
        <div className="photo">
          <img
            className="imgProduct"
            src={window.history.state.state.image[0].PathImage}
          />
        </div>
        <div className="description">
          <h2>{params.NameProduct}</h2>
          <br />
          <h5>{params.Company} :חברה </h5>
          <h4> ₪ {params.Price}</h4>
          <p>{params.DescriptionProduct}</p>

          <button>Wishlist</button>
          <button type="button" onClick={AddToCart}>
            הוסף לסל הקניות
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;

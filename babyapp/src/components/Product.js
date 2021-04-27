import React, { Component, useEffect, useStateת } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "../css/product.css";
import ProductDetails from "./productDetails";
import Mios from "../Pictures/Product/MIOS_B2.jpg";
import { GetImagesProduct } from "../FUNCTION/ProductImageFunction";
import { GetProductById } from "../FUNCTION/ProductFunction";

function Products() {
  let history = useHistory();
  const location = useLocation();
  const params = location.state;
  const Category = params.data; // localStorage.Category

  useEffect(() => {
    var maincontent = "";
    const h1 = <h1>לא נמצאו מוצרים </h1>;
    maincontent =
      "</br></br></br></br><h1> לא נמצאו מוצרים בקטגורית </h1>" +
      "'" +
      localStorage.getItem("Category") +
      "'";
    if (params.data[0] == undefined) {
      var x = (document.getElementById("section").innerHTML = maincontent);
      // x.propertyIsEnumerable.valueOf = function () {
      //   return h1.props.children;
      // };
    }
  });

  // useMountEffect(() => {
  //   setProducts(GetAllProducts());
  //   console.log("back!" + GetAllProducts());
  // });

  // useEffect(() => {
  //   console.log(GetAllProducts());
  //   // setProducts(GetAllProducts());
  //  // console.log("Product: " + NameProduct);
  // }, []);

  function VeiwProduct(data) {
    GetProductById(data.target.id)
      .then((res) => {
        console.log(res);
        GetImagesProduct(res.IdProduct);
        // .then((res2) => {
        //   console.log(res2);
        // })
        // .catch((err2) => {
        //   console.log(err2);
        // });
        const images = JSON.parse(localStorage.getItem("ImagesProduct"));
        history.push("/ProductDetails", { data: res, image: images });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <section id="section"></section>
      <div className="row row-cols-1 row-cols-md-4 g-4 flex-xl-row-reverse Product">
        {Category.map((p) => {
          return (
            <>
              <div className="col Product col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="box card h-100">
                  <Link
                    // to="/ProductDetails"
                    className="LinkCard"
                    onClick={(e) => {
                      VeiwProduct(e);
                    }}
                  >
                    <img
                      src={p.Images[0]}
                      // src={img}
                      className="card-img-top"
                      id={p.IdProduct}
                      alt="..."
                    />
                    <div className="card-body" id={p.IdProduct}>
                      <h5 className="card-title" id={p.IdProduct}>
                        {p.NameProduct}
                      </h5>
                      <p className="card-text" id={p.IdProduct}>
                        {p.DescriptionProduct}
                      </p>
                      <p className="card-text card-price">₪ {p.Price} </p>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Products;

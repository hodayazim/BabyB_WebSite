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

  debugger;

  useEffect(() => {
    var maincontent = "";
    const h1 = <h1>לא נמצאו מוצרים </h1>;
    maincontent =
      "</br></br></br></br><h1> לא נמצאו מוצרים בקטגורית </h1>" +
      " '" +
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
    debugger;
    GetProductById(data.target.id)
      .then((res) => {
        console.log(res);
        GetImagesProduct(res.IdProduct).then((res2) => {
          console.log(res2).catch((err2) => {
            console.log(err2);
          });
        });
        history.push("/ProductDetails", { data: res });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <section id="section">
        {/* {params.data.map((d) => {
        return (
          <>
            <div class="card">
              <img src={Mios} alt="myprofilepic" />
              ;
              <img
                class="card-img-top"
                src="{d.ProductImage[0].PathImage}"
                alt={d.NameProduct}
              />
              <div class="card-body ">
                <h5 class="card-title">{d.NameProduct}</h5>
                <p class="card-text">{d.DescriptionProduct}</p>
              </div>
            </div>
             <b>Name:</b> {d.NameProduct} 
          </>
        );
      })} */}
        {/* <img src="props.img" /> */}

        {/* <b>Price:</b> {props.NameProduct} */}
      </section>
      <div className="row row-cols-1 row-cols-md-4 g-4 flex-xl-row-reverse Product">
        {params.data.map((d) => {
          return (
            <>
              <div className="col Product col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="box card">
                  <Link
                    to="/ProductDetails"
                    className="LinkCard"
                    onClick={(e) => {
                      VeiwProduct(e);
                    }}
                  >
                    <img
                      src={d.Images[0]}
                      // src={img}
                      className="card-img-top"
                      id={d.IdProduct}
                      alt="..."
                    />
                    <div className="card-body" id={d.IdProduct}>
                      <h5 className="card-title" id={d.IdProduct}>
                        {d.NameProduct}
                      </h5>
                      <p className="card-text" id={d.IdProduct}>
                        {d.DescriptionProduct}
                      </p>
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

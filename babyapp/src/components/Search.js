import React, { useState } from "react";
// import ReactDom from "ReactDom";
import { useHistory } from "react-router-dom";
import "../css/search_1.css";
import product from "./Product";
import { GetSearchProducts } from "../FUNCTION/ProductFunction";

function Search() {
  debugger;
  let history = useHistory();
  const [ListProducts, setListProducts] = useState([]);
  const [NameProduct, setNameProduct] = useState("");

  function GetSearchProduct(event) {
    if (event.keyCode == 13) {
      console.log(event.target.value);
      event.preventDefault();
      alert(event.target.value);
      GetSearchProducts(event.target.value).then((res) => {
        console.log(res);
        history.push("/Products", { data: res });
        window.location.reload();
      });
    }
  }
  return (
    <div className="containerS">
      <input
        type="text"
        name="inputt"
        className="inputt"
        placeholder="חפש..."
        autocomplete="off"
        onKeyDown={(e) => GetSearchProduct(e)}
      />
      <div className="search"></div>
    </div>

    /* <div class="input-group">
            <input type="text" name="term" id="liveSearch" class="form-control" placeholder="שם סדרה או חלק ממנה" autocomplete="off" data-provide="typeahead">
                <span class="input-group-btn">
                    <button class="btn btn-blue nontrans">
                        <span>חפש לי!</span>
                    </button>
                </span>
            </input>
        </div> */
  );
}
export default Search;

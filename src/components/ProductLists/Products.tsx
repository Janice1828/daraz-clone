import React, { useEffect } from "react";
import Product from "./Product";
import Grid from "../../Icons/visualization.png";
import List from "../../Icons/list.png";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ProductListsFilterContext } from "./context/FilterContext";
const Products = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");
  const categoryName = params.get("categoryname");
  const { displayingProducts, setDisplayingProducts } =
    ProductListsFilterContext();
  const [sortDisplayingProducts, setSortDisplayingProducts] = useState<any[]>(
    []
  );
  const [productsListView, setProductsListView] = useState<string>("col-3");
  useEffect(() => {
    axios.get("products_two.json").then((data) => {
      const fetchedData = data.data;
      const filteredCategories = fetchedData.filter((product: any) => {
        if (product.category == id) {
          return product;
        }
      });
      setSortDisplayingProducts(filteredCategories);
      setDisplayingProducts(filteredCategories);
    });
  }, []);
  function sortProducts(event: React.ChangeEvent<HTMLSelectElement>) {
    const value: number = Number(event.target.value);
    if (value == 1) {
      sortDisplayingProducts.sort((a, b) => b.price - a.price);
      setDisplayingProducts(sortDisplayingProducts);
    } else {
      sortDisplayingProducts.sort((a, b) => a.price - b.price);
      setSortDisplayingProducts([...sortDisplayingProducts]);
    }
  }
  const productViewGrid = () => {
    setProductsListView("col-3");
  };
  const productViewList = () => {
    setProductsListView("col-12");
  };
  return (
    <div className="row">
      <div className="col-6">
        <span className="founded-items-number">
          {displayingProducts.length} items found for "{`${categoryName}`}"
        </span>
      </div>
      <div className="col-6 d-flex gap-3">
        <div className="d-flex gap-1 align-items-center">
          <span className="sort-by-view">Sort By:</span>
          <select className="sort-by-filter-options" onChange={sortProducts}>
            <option value="">Best Match</option>
            <option value="0">price low to high</option>
            <option value="1">price high to low</option>
          </select>
        </div>
        <div className="d-flex gap-1 align-items-center">
          <span>View:</span>
          <img
            src={Grid}
            alt="Grid"
            className="product-view-order cursor-pointer"
            style={{ margin: "0px 6px" }}
            onClick={productViewGrid}
          />
          <img
            src={List}
            alt="List"
            onClick={productViewList}
            className="product-view-order cursor-pointer"
          />
        </div>
      </div>
      <div className="col-12 border-1"></div>
      <div className="col-12 row">
        {displayingProducts.map((product) => (
          <div className={`${productsListView}`} key={product.id}>
            <Product
              title={product.title}
              price={product.price}
              img={product.images[0]}
              id={product.id}
              listClass={productsListView}
              test=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

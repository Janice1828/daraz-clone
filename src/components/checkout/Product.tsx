import React from "react";

const Product = ({
  title,
  price,
  qty,
  img,
}: {
  title: string;
  price: number;
  qty: number;
  img: string;
}) => {
  return (
    <div className="d-flex justify-content-sm-between justify-content-none flex-column flex-sm-row mt-5">
      <div className="d-flex gap-2">
        <img src={img} alt="" style={{ height: "80px", width: "80px" }} />
        <div>
          <p className="checkout-product-title mb-0">{title}</p>
          <span className="checkout-product-details">No brand, Color</span>
        </div>
      </div>
      <p className="checkout-product-price mb-0">$ {price}</p>
      <div>
        <span className="checkout-product-qty">Qty: {qty}</span>
      </div>
    </div>
  );
};

export default Product;

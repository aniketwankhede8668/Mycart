import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    props.productList.length>0?
    <div>
      {props.productList.map((product, i) => (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          removeItems={props.removeItems}
          index={i}
        />
      ))}
    </div>
    :<h1>Product Not Found In List</h1>
  );
}

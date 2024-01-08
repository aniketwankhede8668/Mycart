import React from "react";

export default function Product(props) {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-5">
          <h2>
            {props.product.name}
            <span className="badge bg-secondary"> ₹{props.product.price}</span>
          </h2>
        </div>
        <div className="col-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-danger"  onClick={() => {
                props.decrementQuantity(props.index);
              }}>
              -
            </button>
            <button type="button" className="btn btn-warning">
              {props.product.qantity}
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                props.incrementQuantity(props.index);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2">
          {props.product.qantity*props.product.price}{" "}
        </div>
      <div className='col-2'>
        <button className=" btn bg-danger" onClick={()=>{
          props.removeItems(props.index)
        }}>Remove</button></div>
      </div>
    </div>
  );
}

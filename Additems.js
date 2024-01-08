import React, { Component } from "react";
class Additems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
        <form
          className="row mb-5"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addItems(
              this.state.productName,
              Number(this.state.productPrice)
            );
          }}
        >
          <div className="mb-3 col-4">
            <label htmlFor="inutName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
            {/* <div id="name" className="form-text"></div> */}
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: e.currentTarget.value });
              }}
              value={this.state.productPrice}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary col-4"
          >
            ADD
          </button>
        </form>
    );
  }
}

export default Additems;

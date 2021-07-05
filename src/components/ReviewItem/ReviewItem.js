import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, key, price, img } = props.product;
  const reviewItemStyle = {
    display: "flex",
    borderBottom: "1px solid lightgray",
    marginBottom: "5px",
    paddingBottom: "5px",
    // marginLeft: "200px",
    marginRight: "10px",
  };
  return (
    <div style={reviewItemStyle} className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>Quantity: {quantity}</p>
        <p>
          <small>$ {price}</small>
        </p>
        <br />
        <button
          className="main-button"
          onClick={() => props.removeProduct(key)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;

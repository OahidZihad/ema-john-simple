import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
} from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import happyImage from "../../images/giphy.gif";
import { useHistory } from "react-router-dom";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const history = useHistory();

  const handleProceedCheckout = () => {
    history.push("/shipment");
  };

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    fetch("https://peaceful-meadow-14323.herokuapp.com/productsByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  let thankYou;
  if (orderPlaced) {
    thankYou = <img src={happyImage} alt="" />;
  }

  document.title = "Order Review";

  return (
    <div className="twin-container">
      {/* <h1>Cart Items: {cart.length}</h1> */}
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            key={pd.key}
            removeProduct={removeProduct}
            product={pd}
          ></ReviewItem>
        ))}

        {thankYou}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button className="main-button" onClick={handleProceedCheckout}>
            Proceed Checkout
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;

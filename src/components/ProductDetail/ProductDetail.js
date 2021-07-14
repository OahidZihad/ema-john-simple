import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  const [loading, setLoading] = useState(true);

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://peaceful-meadow-14323.herokuapp.com/product/" + productKey)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [productKey]);

  document.title = "Product Detail";

  console.log(product);
  return (
    <div>
      <h1>Product Details</h1>
      {loading ? (
        <p>loading............</p>
      ) : (
        <Product showAddToCart={false} product={product}></Product>
      )}
    </div>
  );
};

export default ProductDetail;

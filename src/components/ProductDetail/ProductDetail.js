import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  // const [loading, setLoading] = useState(true);
  const product = fakeData.find((pd) => pd.key === productKey);

  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //   fetch(`/product/` + productKey, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(fakeData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //       console.log(data);
  //     });
  // }, [productKey]);

  document.title = "Product Detail";

  console.log(product);
  return (
    <div>
      <h1>Product Details</h1>
      {/* {loading ? (
        <p>loading............</p>
      ) : ( */}
      <Product showAddToCart={false} product={product}></Product>
      {/* )} */}
    </div>
  );
};

export default ProductDetail;

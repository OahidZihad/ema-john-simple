import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";
import "./Shipment.css";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = (data) => {
    const savedCart = getDatabaseCart();
    const orderDetails = {
      ...loggedInUser,
      products: savedCart,
      shipment: data,
      orderTime: new Date(),
    };
    fetch("http://localhost:4000/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          processOrder();
          alert("your order placed successfully");
        }
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue={loggedInUser.name}
        {...register("name", { required: true })}
        placeholder="Your Name"
      />
      {errors.name && <span className="error">Name is required</span>}
      <input
        defaultValue={loggedInUser.email}
        {...register("email", { required: true })}
        placeholder="Your Email Address"
      />
      {errors.email && <span className="error">Email is required</span>}
      <input
        {...register("district", { required: true })}
        placeholder="Your District"
      />
      {errors.district && <span className="error">District is required</span>}
      <input
        {...register("address", { required: true })}
        placeholder="Your Full Address"
      />
      {errors.address && <span className="error">Address is required</span>}
      <input
        {...register("phone", { required: true })}
        placeholder="Your Phone Number"
      />
      {errors.phone && <span className="error">Phone is required</span>}
      <input type="submit" />
    </form>
  );
};

export default Shipment;

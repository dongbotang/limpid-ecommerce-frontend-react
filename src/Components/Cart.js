import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Redux/PostSlice";
const Cart = () => {
  const cartdata = useSelector((state) => state.productslice);
  const dispatch = useDispatch();
  console.log(cartdata.slice());
  return (
    <div className="w-1/2 text-justify mx-auto mt-10 mb-40 ">
      {
        (cartdata.slice().length == 0 ? (
          <h1>CART IS EMPTY</h1>
        ) : (
          cartdata.map((cartData) => (
            <div className="mb-10">
              <img className="h-24" src={cartData.image} alt="" />
              <h1>{cartData.title}</h1>
              <h2>{cartData.price}</h2>
              <button onClick={() => dispatch(removeCart(cartData.id))}>
                Remove
              </button>
            </div>
          ))
        ))
      }
    </div>
  );
};

export default Cart;

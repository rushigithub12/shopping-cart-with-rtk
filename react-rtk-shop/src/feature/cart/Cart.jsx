import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsyncItem, fetchAsyncItem, updateAsyncItem } from "./cartSlice";
import styles from "./Cart.module.css";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handlechange = (e, item) => {
    console.log(e.target.value);
    dispatch(updateAsyncItem({ id: item.id, change: {...item, quantity: +e.target.value} }));
  };

  return (
    <div className={styles.cart}>
      {items?.map((item) => (
        <div key={item.id} className={styles.cart_item}>
          <img
            src={item.thumbnail}
            alt={item.title}
            className={styles.thumbnail}
          />
          <div>
            <p>{item?.title}</p>
            <span>{item?.brand}</span>
            <strong>${item?.price}</strong>
            <div>
              Quantity
              <select
                value={item?.quantity}
                onChange={(e) => handlechange(e, item)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="close">
              <button onClick={() => dispatch(deleteAsyncItem(item.id))}>
                X
              </button>
            </div>
          </div>
        </div>
      ))}
      <span className={styles.totalprice} >Total: ${items?.reduce((acc, item) => item.price * item.quantity + acc, 0)} </span>
    </div>
  );
}

export default Cart;

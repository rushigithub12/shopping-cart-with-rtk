import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsyncItem, fetchAsyncItem } from "./cartSlice";
import styles from "./Cart.module.css";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

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
              <select name="quantity" id="">
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
    </div>
  );
}

export default Cart;

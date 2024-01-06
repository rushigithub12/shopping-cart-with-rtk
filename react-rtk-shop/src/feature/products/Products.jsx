import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "./productsSlice";
import styles from "./Products.module.css";
import { addAsyncItem } from "../cart/cartSlice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const product = products.products;
  console.log("product==>>", product.products);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div>
      <div className={styles.products}>
        {products.products?.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product?.thumbnail} alt="" style={{ width: "100%" }} />
            <h1>{product?.title}</h1>
            <p className={styles.price}>{product?.price}</p>
            <p>{product?.description}</p>
            <p>
              <button onClick={() => dispatch(addAsyncItem(product))}>
                Add to Cart
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

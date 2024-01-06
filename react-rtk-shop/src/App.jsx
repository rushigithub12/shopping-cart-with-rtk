import { useEffect, useState } from "react";
import Products from "./feature/products/Products";

import "./App.css";
import Cart from "./feature/cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncItem } from "./feature/cart/cartSlice";

function App() {
  const [showCart, setShowCart] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncItem());
  }, []);

  return (
    <>
      <button onClick={() => setShowCart(!showCart)}>
        Cart [ {items.length} ]
      </button>
      {showCart ? <Cart /> : <Products />}
    </>
  );
}

export default App;

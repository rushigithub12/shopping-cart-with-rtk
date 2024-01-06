import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const res = await fetchProducts();
    console.log("fetchAsyncresponse===>>>", res);
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        (state.status = "loading"), 
        state.products = action.payload;
      });
  },
});
// export const { incrementCount } = productsSlice.actions;
export default productsSlice.reducer;

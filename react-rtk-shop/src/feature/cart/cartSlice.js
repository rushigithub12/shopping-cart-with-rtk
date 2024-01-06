import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItem, deleteItem, fetchItem, updateItem } from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsyncItem = createAsyncThunk("cart/fetchItem", async () => {
  const res = await fetchItem();
  return res.data;
});

export const addAsyncItem = createAsyncThunk("cart/addItem", async (item) => {
  const { id, thumbnail, title, price, description, brand, quantity } = item;
  const res = await addItem({
    id,
    thumbnail,
    title,
    price,
    description,
    brand,
    quantity,
  });
  console.log("addItem===>>", res);
  return res.data;
});

export const deleteAsyncItem = createAsyncThunk(
  "cart/deleteItem",
  async (id) => {
    await deleteItem(id);
    return id;
  }
);

export const updateAsyncItem = createAsyncThunk(
  "update/updateItem",
  async ({ id, change }) => {
    const res = await updateItem(id, change);
    console.log("updateItem==>>", res);
    return res.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncItem.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncItem.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(addAsyncItem.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(deleteAsyncItem.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items?.findIndex(
          (item) => item.id === action.payload
        );
        state.items?.splice(index, 1);
      })
      .addCase(updateAsyncItem.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items?.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items?.splice(index, 1, action.payload);
      });
  },
});
// export const { incrementCount } = productsSlice.actions;
export default cartSlice.reducer;

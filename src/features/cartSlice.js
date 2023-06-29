import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   "6a56c22f-2a85-4751-98a9-14e280fcecd8": {
//     name: "mirror",
//     price: 20.99,
//     description:
//       "Mirror mirror on the wall, who has the greatest mirror of them all? YOU WILL, if you buy this.",
//     image_url:
//       "https://target.scene7.com/is/image/Target/GUEST_703892ef-2db0-4e02-b9c8-685e4a5c37a0",
//     id: "6a56c22f-2a85-4751-98a9-14e280fcecd8",
//     amount: 0,
//     total: 0,
//   },
// };

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    addItem: (state, action) => {
      const item = action.payload;
      const itemId = item.id;
      if (
        state.cartItems.filter((cartItem) => cartItem.id === item.id).length ===
        0
      ) {
        item.amount = 1;
        state.cartItems.push(item);
      }
    },
    increase: (state, action) => {
      const itemId = action.payload;
      let index = state.cartItems.findIndex((x) => x.id === itemId);
      state.cartItems[index].amount += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      let index = state.cartItems.findIndex((x) => x.id === itemId);
      state.cartItems[index].amount -= 1;

      if (state.cartItems[index].amount === 0) {
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }
    },
  },
});

export const { removeItem, addItem, clearCart, increase, decrease } =
  cartSlice.actions;

// console.log(memeSlice);
// console.log(memeSlice.getInitialState());

export default cartSlice.reducer;

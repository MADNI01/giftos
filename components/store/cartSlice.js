import { createSlice } from "@reduxjs/toolkit";




const loadState = () => {
  
  try {
    const state =localStorage.getItem("state");

    if (state !== null) {
      let initialState = JSON.parse(state);
      return initialState.cartSlice;
    }
  } catch(e){
    
  }

  return ({ items: [], totalPrice: 0, amount: 0 });
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState(),
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id == action.payload.id
      );
      state.totalPrice = state.totalPrice + newItem.price;
      state.amount++
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...newItem,
        });
      }
    },
    deleteItem(state, action) {
      const item = state.items.find((item) => item.id == action.payload.id);
      state.totalPrice = state.totalPrice - action.payload.price;
      state.amount--

      if (item.quantity == 1) {
        const newItems = state.items.filter(
          (item) => item.id != action.payload.id
        );
        state.items = newItems;
      } else {
        item.quantity--;
      }
    },
    deleteAll(state, action) {
      const item = state.items.find((item) => item.id == action.payload.id);
      state.totalPrice = state.totalPrice - item.price * item.quantity;
      state.amount = state.amount - item.quantity
      const newItems = state.items.filter(
        (item) => item.id != action.payload.id
      );
      state.items = newItems;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: { cartSlice: cartSlice.reducer },
});
store.subscribe(()=>{
  localStorage.setItem('state',JSON.stringify(store.getState()))
})

export default store;

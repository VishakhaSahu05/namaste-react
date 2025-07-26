import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items.pop();
    },
    clearCart(state, action) {
        //RTK- either Mutate the exisiting state or return newstate
       // state.items.length= 0; //[]
       return {items : []}; // this new object will be replaced inside originalState = {items:[]}
    },
  },
});

export const {addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;

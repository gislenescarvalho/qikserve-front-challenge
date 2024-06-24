import { createSlice } from "@reduxjs/toolkit";

interface BasketState {
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;

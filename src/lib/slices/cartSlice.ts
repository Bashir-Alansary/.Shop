import { CartItemType, ItemType } from '@/types';
import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { applyDiscount } from '@/utils';

interface ProductQtyType {
  product: ItemType,
  qty: number,
}

export interface CartType {
    cartItems: CartItemType[],
    qty: number,
}

const initialState: CartType = {
    cartItems: [],
    qty: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<ProductQtyType>) => {
      const {product, qty} = action.payload;
      const theProduct = state.cartItems.find(item => item.id === product.id);
      if(theProduct) theProduct.qty += qty;
      else {
        state.cartItems.push(
          {
            ...product,
            qty,
          }
        )
      }
    },

    addInputValAsQty: (state, action:PayloadAction<ProductQtyType>) => {
      const {product, qty} = action.payload;
      const theProduct = state.cartItems.find(item => item.id === product.id);
      if (theProduct) {
        theProduct.qty = qty;
      }
    },


    removeFromCart: (state, action:PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    }
  },
})


const cartItems = (state:RootState) => state.cartSlice.cartItems;
export const totalCartItemSelector = createSelector([cartItems], (cartItems) => 
  cartItems.reduce((total: number, curr: CartItemType) => (total+= curr.qty), 0)
)

export const totalPriceSelector = createSelector([cartItems], (cartItems) => 
  cartItems.reduce((total:number, curr: CartItemType) => 
  (total+= (applyDiscount(curr.price, curr.discountPercentage) * curr.qty)), 0)
)

// Action creators are generated for each case reducer function
export const { addToCart, addInputValAsQty, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
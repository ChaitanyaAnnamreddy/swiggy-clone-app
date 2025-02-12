import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.cart?.info?.id !== action.payload
      )
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      console.log('id, quantity', id, quantity)

      const itemIndex = state.items.findIndex(
        (item) => item.card?.info?.id === id
      )
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = quantity
      }
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export default cartSlice.reducer
export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions

// behind the scenes it is like this
// cartSlice is an object which has actions and reducers
// we are destructuring addItem, removeItem and clearCart from the actions

// {
//     actions:{
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducers: {

//     }
// }

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
      console.log(state.items)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export default cartSlice.reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions

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

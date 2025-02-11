import { createContext } from 'react'

const UserContext = createContext({
  loggedInUser: 'Default User',
  cartItems: '0',
})

export default UserContext

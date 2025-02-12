import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CDN_URL } from '../utils/constants'
import { useNavigate } from 'react-router'
import { clearCart } from '../utils/cartSlice'
import { Modal, Button, Result } from 'antd' // Import Ant Design components
import { updateQuantity, removeItem } from '../utils/cartSlice'

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  //   const [quantity, setQuantity] = useState(item.quantity)

  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const getImageUrl = (id) => `${CDN_URL}${id}`

  useEffect(() => {
    console.log('Updated cartItems in Redux state:', cartItems)
  }, [cartItems])

  const groupedItems = Array.from(
    cartItems
      .reduce((acc, item) => {
        const itemId = item?.card?.info?.id
        const itemPrice =
          item?.card?.info?.price || item?.card?.info?.defaultPrice

        if (!itemId) return acc

        if (acc.has(itemId)) {
          const existingItem = acc.get(itemId)
          existingItem.quantity += 1
          existingItem.totalPrice += itemPrice
        } else {
          acc.set(itemId, { ...item, quantity: 1, totalPrice: itemPrice })
        }

        return acc
      }, new Map())
      .values()
  )

  const uniqueCartItems = Object.values(groupedItems)

  const placeOrder = () => {
    dispatch(clearCart())
    setIsModalOpen(true)
  }

  const increaseQuantity = (id) => {
    console.log('increaseQuantity called with id:', id)

    const item = cartItems.find((i) => i.card?.info?.id === id)
    if (!item) {
      console.error(`Item with ID ${id} not found in cartItems`)
      return
    }

    const newQuantity = item.quantity + 1
    console.log('Updated quantity:', newQuantity)

    dispatch(updateQuantity({ id, quantity: newQuantity }))
  }

  const decreaseQuantity = (id) => {
    console.log('decreaseQuantity called with id:', id)
    console.log('cartItems:', cartItems)

    const item = cartItems.find((i) => i.card?.info?.id === id)

    if (!item) {
      console.error(`Item with ID ${id} not found in cartItems`)
      return
    }

    // Ensure quantity doesn't go below 1
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }))
    } else {
      dispatch(removeItem(id)) // Remove item if quantity is 1
    }
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-white-1000 md:py-16 m-10 rounded-lg">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          {/* Cart Items */}
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {uniqueCartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-24 w-24 text-gray-400 mb-4"
                  >
                    <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                  </svg>
                  <p className="text-gray-600 text-lg font-semibold mb-4">
                    Your shopping cart is empty.
                  </p>
                  <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                  >
                    Add items to your cart!
                  </button>
                </div>
              ) : (
                uniqueCartItems.map((item) => (
                  <div
                    key={item.card.info.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      {/* Product Image */}
                      <img
                        className="h-20 w-20 rounded-lg"
                        src={getImageUrl(item.card.info.imageId)}
                        alt={item.card.info.name}
                      />

                      {/* Quantity Selector */}

                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            onClick={() => decreaseQuantity(item.card.info.id)}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-extrabold text-gray-900 dark:text-white"
                            value={
                              cartItems.find(
                                (i) => i.card?.info?.id === item.card.info.id
                              )?.quantity || 1
                            }
                            readOnly
                          />
                          <button
                            onClick={() => increaseQuantity(item.card.info.id)}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Product Price */}

                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">
                            ₹
                            {(cartItems.find(
                              (i) => i.card?.info?.id === item.card.info.id
                            )?.quantity || 1) *
                              (item.card.info.price / 100)}
                          </p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md text-white text-left">
                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md text-white font-bold">
                          {item.card.info.name}
                        </div>
                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md text-gray-300">
                          {item.card.info.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Order Summary */}
          {uniqueCartItems.length > 0 && (
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-extrabold text-gray-900 dark:text-white">
                  Order summary
                </p>

                {uniqueCartItems.map((item) => (
                  <dl
                    key={item.card.info.id}
                    className="flex items-center justify-between gap-4 border-gray-200 pt-2 dark:border-gray-700"
                  >
                    <dt className="text-base font-semibold text-left text-gray-300">
                      {`${
                        cartItems.find(
                          (i) => i.card?.info?.id === item.card.info.id
                        )?.quantity || 1
                      } x ${item.card.info.name}`}
                    </dt>
                    <dd className="text-base font-bold text-gray-300">
                      ₹
                      {(cartItems.find(
                        (i) => i.card?.info?.id === item.card.info.id
                      )?.quantity || 1) *
                        (item.card.info.price / 100)}
                    </dd>
                  </dl>
                ))}

                {/* Total Price */}
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-semibold text-gray-900 dark:text-white">
                    Total cost
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    ₹
                    {cartItems.reduce(
                      (total, item) =>
                        total + (item.quantity * item.card.info.price) / 100,
                      0
                    )}
                  </dd>
                </dl>

                {/* Checkout Button */}
                <button
                  type="button"
                  onClick={placeOrder}
                  disabled={uniqueCartItems.length === 0}
                  className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
                    uniqueCartItems.length === 0
                      ? 'bg-gray-400 cursor-not-allowed' // 🔹 Disabled styling
                      : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer'
                  }`}
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Ant Design Order Confirmation Modal */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="ok" type="primary" onClick={() => navigate('/')}>
            Go to Homepage
          </Button>,
        ]}
      >
        <Result
          status="success"
          title="Order Placed Successfully!"
          subTitle={`Order ID: ${Math.floor(Math.random() * 10000)}`}
        />
      </Modal>
    </section>
  )
}

export default Cart

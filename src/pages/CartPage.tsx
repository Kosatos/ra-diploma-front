import React from 'react'
import OrderForm from '../components/OrderForm'
import Cart from '../components/Cart'

const CartPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Cart />
      <OrderForm />
    </>
  )
}

export default CartPage

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'

const CartMini: React.FC = (): JSX.Element => {
  const { items } = useAppSelector((state) => state.cart)
  const navigate = useNavigate()

  return (
    <div
      className='header-controls-pic header-controls-cart'
      onClick={() => navigate('/cart')}
    >
      {items.length !== 0 && (
        <div className='header-controls-cart-full'>{items.length}</div>
      )}

      <div className='header-controls-cart-menu'></div>
    </div>
  )
}

export default CartMini

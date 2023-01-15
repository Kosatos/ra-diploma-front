import React, { useState } from 'react'
import { ICartItem, ISize } from '../../models'

import SizesToggler from '../SizesToggler'
import QuantityCounter from '../QuantityCounter'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'

interface ProductActionsProps {
  id: number
  title: string
  sizes: ISize[]
  price: number
}

const ProductActions: React.FC<ProductActionsProps> = ({
  id,
  title,
  sizes,
  price,
}): JSX.Element => {
  const [cartInput, setCartData] = useState<ICartItem>({
    id,
    title,
    size: null,
    count: 1,
    price,
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const availableSizes = sizes.filter((s: ISize) => s.avalible)
  const setProductQuantity = (value: number): void => {
    setCartData((prev) => ({ ...prev, count: value }))
  }
  const setActiveSize = (value: string): void => {
    setCartData((prev) => ({ ...prev, size: value }))
  }
  const handleAddToCart = (): void => {
    dispatch(addToCart(cartInput))
    navigate('/cart')
  }
  return (
    <>
      {availableSizes.length === 0 ? (
        'Размеров нет в наличии'
      ) : (
        <>
          <div className='text-center'>
            <SizesToggler
              availableSizes={availableSizes}
              activeSize={cartInput.size}
              handleToggle={setActiveSize}
            />
            <QuantityCounter handleClick={setProductQuantity} />
          </div>
          <button
            className='btn btn-danger btn-block btn-lg'
            onClick={handleAddToCart}
            disabled={cartInput.size === null}
          >
            В корзину
          </button>
        </>
      )}
    </>
  )
}

export default ProductActions

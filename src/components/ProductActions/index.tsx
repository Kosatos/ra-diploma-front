import React, { useState } from 'react'
import { ISize } from '../../models'

import SizesToggler from '../SizesToggler'
import QuantityCounter from '../QuantityCounter'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'

interface ProductActionsProps {
  title: string
  sizes: ISize[]
  price: number
}

interface ICartInput {
  title: string
  activeSize: string | null
  quantity: number
  price: number
}

const ProductActions: React.FC<ProductActionsProps> = ({
  title,
  sizes,
  price,
}): JSX.Element => {
  const [cartInput, setCartData] = useState<ICartInput>({
    title,
    activeSize: null,
    quantity: 1,
    price,
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const availableSizes = sizes.filter((s: ISize) => s.avalible)
  const setProductQuantity = (value: number): void => {
    setCartData((prev) => ({ ...prev, quantity: value }))
  }
  const setActiveSize = (value: string): void => {
    setCartData((prev) => ({ ...prev, activeSize: value }))
  }
  const putIntoCart = (): void => {
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
              activeSize={cartInput.activeSize}
              handleToggle={setActiveSize}
            />
            <QuantityCounter handleClick={setProductQuantity} />
          </div>
          <button
            className='btn btn-danger btn-block btn-lg'
            onClick={putIntoCart}
            disabled={cartInput.activeSize === null}
          >
            В корзину
          </button>
        </>
      )}
    </>
  )
}

export default ProductActions

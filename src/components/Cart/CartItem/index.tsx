import React from 'react'
import { useDispatch } from 'react-redux'
import { ICartItem } from '../../../models'
import { removeItem } from '../../../redux/slices/cartSlice'

interface CartItemsProps {
  item: ICartItem
  position: number
}

const CartItem: React.FC<CartItemsProps> = ({
  item,
  position,
}): JSX.Element => {
  const dispatch = useDispatch()
  const handleClick = (): void => {
    dispatch(removeItem(item))
  }
  return (
    <>
      <tr>
        <td scope='row'>{position + 1}</td>
        <td>
          <a href='/products/1.html'>{item.title}</a>
        </td>
        <td>{item.size}</td>
        <td>{item.count}</td>
        <td>{item.price.toLocaleString('ru-RU')} руб.</td>
        <td>{item.total?.toLocaleString('ru-RU')} руб.</td>
        <td>
          <button
            className='btn btn-outline-danger btn-sm'
            onClick={handleClick}
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  )
}

export default CartItem

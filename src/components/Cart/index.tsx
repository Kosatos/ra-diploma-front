import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import CartItem from './CartItem'

const Cart: React.FC = (): JSX.Element => {
  const { items, totalPrice } = useAppSelector((state) => state.cart)
  if (items.length === 0)
    return (
      <div className='text-center fs-3 mb-5'>
        The cart is empty. Please, add products.
      </div>
    )
  return (
    <>
      <section className='cart'>
        <h2 className='text-center'>Корзина</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Название</th>
              <th scope='col'>Размер</th>
              <th scope='col'>Кол-во</th>
              <th scope='col'>Стоимость</th>
              <th scope='col'>Итого</th>
              <th scope='col'>Действия</th>
            </tr>
          </thead>
          <tbody>
            {items.length !== 0 &&
              items.map((item, i) => (
                <CartItem item={item} position={i} key={`${item.id}-${i}`} />
              ))}

            <tr>
              <td colSpan={5} className='text-right'>
                Общая стоимость
              </td>
              <td>{totalPrice.toLocaleString('ru-RU')} руб.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Cart

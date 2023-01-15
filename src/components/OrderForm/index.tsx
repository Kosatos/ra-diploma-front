import React, { useState } from 'react'
import { useSendOrderMutation } from '../../redux/server/server.api'
import Loader from '../Loader'
import Error from '../Error'
import { useAppSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/slices/cartSlice'
import Success from '../Success'

const OrderForm: React.FC = (): JSX.Element => {
  const { items } = useAppSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [form, setForm] = useState({ phone: '', address: '', agreement: false })
  const [sendOrder, { isLoading, isError, isSuccess }] = useSendOrderMutation()
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name } = evt.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? evt.target.checked : evt.target.value,
    }))
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    void sendOrder({ owner: form, items })
    setForm({ phone: '', address: '', agreement: false })
    setTimeout(() => dispatch(clearCart()), 3000)
  }
  if (items.length === 0) return <></>
  if (isLoading) return <Loader />
  if (isSuccess) return <Success />
  if (isError) return <Error />
  return (
    <>
      <section className='order'>
        <h2 className='text-center'>Оформить заказ</h2>
        <div className='card' style={{ maxWidth: '30rem', margin: '0 auto' }}>
          <form className='card-body' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='phone'>Телефон</label>
              <input
                className='form-control'
                type='tel'
                id='phone'
                name='phone'
                required
                placeholder='Ваш телефон'
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='address'>Адрес доставки</label>
              <input
                className='form-control'
                id='address'
                name='address'
                required
                placeholder='Адрес доставки'
                value={form.address}
                onChange={handleChange}
              />
            </div>
            <div className='form-group form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='agreement'
                name='agreement'
                required
                checked={form.agreement}
                onChange={handleChange}
              />
              <label className='form-check-label' htmlFor='agreement'>
                Согласен с правилами доставки
              </label>
            </div>
            <button
              type='submit'
              className='btn btn-outline-secondary'
              disabled={
                form.phone === '' || form.address === '' || !form.agreement
              }
            >
              Оформить
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default OrderForm

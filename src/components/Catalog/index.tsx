import React from 'react'
import { useGetDataQuery } from '../../redux/server/server.api'
import Loader from '../Loader'
import Error from '../Error'
import Card from '../Card'
import CategoriesList from './CategoriesList'

const Catalog: React.FC = (): JSX.Element => {
  const { isError, isLoading, data } = useGetDataQuery('items')
  return (
    <>
      <section className='catalog'>
        <h2 className='text-center'>Каталог</h2>
        <CategoriesList />
        <div className='row'>
          {isError && <Error />}
          {isLoading && <Loader />}
          {data?.map((item) => (
            <div key={item.id} className='col-4'>
              <Card card={item} extraClass='catalog-item-card' />
            </div>
          ))}
        </div>

        <div className='text-center'>
          <button className='btn btn-outline-primary'>Загрузить ещё</button>
        </div>
      </section>
    </>
  )
}

export default Catalog

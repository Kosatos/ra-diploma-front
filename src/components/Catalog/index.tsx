import React, { useEffect } from 'react'
import { useLazyGetItemsQuery } from '../../redux/server/server.api'
import Loader from '../Loader'
import Error from '../Error'
import Card from '../Card'
import CategoriesList from './CategoriesList'
import { useAppSelector } from '../../redux/hooks'

const Catalog: React.FC = (): JSX.Element => {
  const [fetchItems, { isLoading, isError, data }] = useLazyGetItemsQuery()
  const { id } = useAppSelector((state) => state.active_category)

  useEffect(() => {
    if (id === 11) {
      void fetchItems('')
    } else {
      void fetchItems(id)
    }
  }, [id])

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

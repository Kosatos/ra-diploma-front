import React, { useEffect, useState } from 'react'
import { useLazyGetItemsQuery } from '../../redux/server/server.api'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import Loader from '../Loader'
import Error from '../Error'
import Card from '../Card'
import CategoriesList from './CategoriesList'
import LoadMoreBtn from '../LoadMoreBtn'
import { submitValue } from '../../redux/server/slices/searchSlice'

const Catalog: React.FC = (): JSX.Element => {
  const [fetchItems, { isLoading, isError, data }] = useLazyGetItemsQuery()
  const { id } = useAppSelector((state) => state.active_category)
  const dispatch = useAppDispatch()
  const { value, isSubmit } = useAppSelector((state) => state.search)
  const [offset, setOffset] = useState(6)

  const handleFetchItems = (more = false): void => {
    if (id === 11) {
      if (more) {
        void fetchItems({ id: '', offset, q: value })
        setOffset((prev) => (prev += 6))
      } else {
        void fetchItems({ id: '', offset: '', q: value })
        setOffset(6)
      }
    } else {
      if (more) {
        void fetchItems({ id, offset, q: value })
        setOffset((prev) => (prev += 6))
      } else {
        void fetchItems({ id, offset: '', q: value })
        setOffset(6)
      }
    }
  }

  useEffect(() => {
    handleFetchItems()
    dispatch(submitValue(false))
  }, [id, isSubmit])

  const loadMore = (): void => {
    handleFetchItems(true)
  }

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
          {data?.length === 6 && <LoadMoreBtn handleLoadMore={loadMore} />}
        </div>
      </section>
    </>
  )
}

export default Catalog

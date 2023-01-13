import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import Loader from '../Loader'
import Error from '../Error'
import Card from '../Card'
import CategoriesList from './CategoriesList'
import LoadMoreBtn from '../LoadMoreBtn'
import { submitValue } from '../../redux/slices/searchSlice'
import {
  addItemsRequest,
  getItemsRequest,
} from '../../redux/slices/productsSlice'

const Catalog: React.FC = (): JSX.Element => {
  const { id } = useAppSelector((state) => state.active_category)
  const { value, isSubmit } = useAppSelector((state) => state.search)
  const {
    items: data,
    isLoading,
    isError,
    isLoadingMore,
    isErrorMore,
    allLoaded,
  } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()
  const [offset, setOffset] = useState(6)

  const handleFetchItems = (more = false): void => {
    if (more) {
      dispatch(addItemsRequest({ id, offset, q: value }))
      setOffset((prev) => (prev += 6))
    } else {
      dispatch(getItemsRequest({ id, q: value }))
      setOffset(6)
    }
  }

  const loadMore = (): void => {
    handleFetchItems(true)
    console.log(isErrorMore)
  }

  useEffect(() => {
    handleFetchItems()
    dispatch(submitValue(false))
  }, [id, isSubmit])

  return (
    <>
      <section className='catalog'>
        <h2 className='text-center'>Каталог</h2>
        <CategoriesList />
        <div className='row'>
          {isError && <Error />}
          {isLoading && <Loader />}
          {!isLoading &&
            !isError &&
            data.map((item) => (
              <div key={item.id} className='col-4'>
                <Card card={item} extraClass='catalog-item-card' />
              </div>
            ))}
        </div>

        <div className='text-center'>
          {isErrorMore && <Error />}
          {isLoadingMore && <Loader />}
          {!allLoaded && !isLoadingMore && !isErrorMore && (
            <LoadMoreBtn handleLoadMore={loadMore} />
          )}
        </div>
      </section>
    </>
  )
}

export default Catalog

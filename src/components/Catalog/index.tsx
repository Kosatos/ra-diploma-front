import React, { useEffect, useState } from 'react'
import {
  updateQueryData,
  useLazyGetItemsByCategoryQuery,
  useLazyGetItemsByOffsetQuery,
} from '../../redux/server/server.api'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import Loader from '../Loader'
import Error from '../Error'
import Card from '../Card'
import CategoriesList from './CategoriesList'
import LoadMoreBtn from '../LoadMoreBtn'
import { submitValue } from '../../redux/server/slices/searchSlice'

const Catalog: React.FC = (): JSX.Element => {
  const [fetchItemsByCategory, { isLoading, isError, data }] =
    useLazyGetItemsByCategoryQuery()
  const [
    fetchItemsByOffset,
    { isLoading: isLoadingOffset, isError: isErrorOffset, data: dataByOffset },
  ] = useLazyGetItemsByOffsetQuery()
  const { id } = useAppSelector((state) => state.active_category)
  const dispatch = useAppDispatch()
  const { value, isSubmit } = useAppSelector((state) => state.search)
  const [offset, setOffset] = useState(6)

  const handleFetchItems = (more = false): void => {
    if (id === 11) {
      if (more) {
        void fetchItemsByOffset({ id: '', offset, q: value }).then(() => {
          if (dataByOffset !== undefined) {
            dispatch(
              updateQueryData(
                'getItemsByCategory',
                { id: '', q: value },
                (draftItems) => {
                  console.log(dataByOffset)
                  draftItems.push(...dataByOffset)
                }
              )
            )
          }
        })

        setOffset((prev) => (prev += 6))
      } else {
        void fetchItemsByCategory({ id: '', q: value })
        setOffset(6)
      }
    } else {
      if (more) {
        void fetchItemsByOffset({ id, offset, q: value }).then(() => {
          if (dataByOffset !== undefined) {
            dispatch(
              updateQueryData(
                'getItemsByCategory',
                { id, q: value },
                (draftItems) => {
                  draftItems.push(...dataByOffset)
                }
              )
            )
          }
        })

        setOffset((prev) => (prev += 6))
      } else {
        void fetchItemsByCategory({ id, q: value })
        setOffset(6)
      }
    }
  }

  const loadMore = (): void => {
    handleFetchItems(true)
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
          {(isError || isErrorOffset) && <Error />}
          {(isLoading || isLoadingOffset) && <Loader />}
          {data?.map((item) => (
            <div key={item.id} className='col-4'>
              <Card card={item} extraClass='catalog-item-card' />
            </div>
          ))}
        </div>

        <div className='text-center'>
          {(dataByOffset === undefined || dataByOffset?.length === 6) && (
            <LoadMoreBtn handleLoadMore={loadMore} />
          )}
        </div>
      </section>
    </>
  )
}

export default Catalog

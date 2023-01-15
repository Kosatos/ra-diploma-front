import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLazyGetItemInfoQuery } from '../redux/server/server.api'

import Error from '../components/Error'
import Loader from '../components/Loader'
import InfoTable from '../components/InfoTable'
import ProductActions from '../components/ProductActions'

const ProductPage: React.FC = (): JSX.Element => {
  const { id } = useParams()
  const [fetchData, { data, isLoading, isError }] = useLazyGetItemInfoQuery()

  useEffect(() => {
    if (id !== undefined) {
      void fetchData(+id.replace(':', ''))
    }
  }, [])

  if (data === undefined) return <></>
  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <section className='catalog-item'>
          <h2 className='text-center'>{data?.title}</h2>
          <div className='row'>
            <div className='col-5'>
              <img
                src={data?.images[0]}
                className='img-fluid'
                alt={data?.title}
              />
            </div>
            <div className='col-7'>
              <InfoTable
                sku={data?.sku}
                manufacturer={data.manufacturer}
                color={data.color}
                material={data.material}
                reason={data.reason}
                season={data.season}
              />
              <ProductActions
                id={data?.id}
                title={data?.title}
                price={data?.price}
                sizes={data?.sizes}
              />
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default ProductPage

import React from 'react'
import Card from '../Card'
import Loader from '../Loader'
import Error from '../Error'

import { useGetDataQuery } from '../../redux/server/server.api'

const Hits: React.FC = (): JSX.Element => {
  const { isLoading, isError, data } = useGetDataQuery('top-sales')

  return (
    <section className='top-sales'>
      <h2 className='text-center'>Хиты продаж!</h2>
      <div className='row'>
        {isError && <Error />}
        {isLoading && <Loader />}
        {data?.map((hit) => (
          <div key={hit.id} className='col-4'>
            <Card card={hit} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hits

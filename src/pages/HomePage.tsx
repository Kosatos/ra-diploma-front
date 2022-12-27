import React from 'react'
import Hits from '../components/Hits'
import Catalog from '../components/Catalog'

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Hits />
      <Catalog />
    </>
  )
}

export default HomePage

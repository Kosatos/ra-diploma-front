import React from 'react'
import Catalog from '../components/Catalog'
import SearchFormCatalog from '../components/SearchFormCatalog'

const CatalogPage: React.FC = (): JSX.Element => {
  return (
    <>
      <section className='catalog'>
        <h2 className='text-center'>Каталог</h2>
        <SearchFormCatalog />
        <Catalog />
      </section>
    </>
  )
}

export default CatalogPage

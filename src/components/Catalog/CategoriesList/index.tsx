import React from 'react'
import { useGetCategoriesQuery } from '../../../redux/server/server.api'
import CategoryItem from './CategoryItem'

const CategoriesList: React.FC = (): JSX.Element => {
  const { data } = useGetCategoriesQuery('')
  return (
    <ul className='catalog-categories nav justify-content-center'>
      <CategoryItem category={{ id: 11, title: 'Все' }} />
      {data?.map((ctg) => (
        <CategoryItem category={ctg} key={ctg.id} />
      ))}
    </ul>
  )
}

export default CategoriesList

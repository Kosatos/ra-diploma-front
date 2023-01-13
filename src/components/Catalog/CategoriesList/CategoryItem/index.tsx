import React from 'react'
import { Link } from 'react-router-dom'
import { ICategory } from '../../../../models'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { toggleActive } from '../../../../redux/slices/activeCategorySlice'

interface CategoryItemProps {
  category: ICategory
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
}): JSX.Element => {
  const { id } = useAppSelector((state) => state.active_category)
  const dispatch = useAppDispatch()
  const handleClick = (): void => {
    dispatch(toggleActive(category.id))
  }
  return (
    <li className='nav-item'>
      <Link
        className={category.id === id ? 'nav-link active' : 'nav-link'}
        to='#'
        onClick={handleClick}
      >
        {category.title}
      </Link>
    </li>
  )
}

export default CategoryItem

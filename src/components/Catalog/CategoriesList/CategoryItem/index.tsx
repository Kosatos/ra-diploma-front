import React from 'react'
import { NavLink } from 'react-router-dom'
import { ICategory } from '../../../../models'

interface CategoryItemProps {
  category: ICategory
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
}): JSX.Element => {
  return (
    <li className='nav-item'>
      <NavLink className='nav-link' to='#'>
        {category.title}
      </NavLink>
    </li>
  )
}

export default CategoryItem

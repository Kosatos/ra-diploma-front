import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { openSearch, submitValue } from '../../redux/server/slices/searchSlice'

const HeaderControls: React.FC = (): JSX.Element => {
  const { value, isOpen } = useAppSelector((state) => state.search)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleOpenSearch = (): void => {
    if (!isOpen) {
      dispatch(openSearch(true))
    } else {
      if (value !== '') {
        dispatch(submitValue(true))
        navigate('/catalog')
      } else {
        dispatch(openSearch(false))
        dispatch(submitValue(true))
      }
    }
  }
  return (
    <div className='header-controls-pics'>
      <div
        data-id='search-expander'
        className='header-controls-pic header-controls-search'
        onClick={handleOpenSearch}
      ></div>
      {/* <!-- Do programmatic navigation on click to /cart.html --> */}
      <div className='header-controls-pic header-controls-cart'>
        <div className='header-controls-cart-full'>1</div>
        <div className='header-controls-cart-menu'></div>
      </div>
    </div>
  )
}

export default HeaderControls

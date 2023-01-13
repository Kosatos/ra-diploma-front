import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeSearch, submitValue } from '../../redux/slices/searchSlice'

const SearchFormHeader: React.FC = (): JSX.Element => {
  const { value, isOpen } = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeSearch(evt.target.value))
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    if (value !== '') {
      dispatch(submitValue(true))
      navigate('/catalog')
    }
  }
  return (
    <form
      data-id='search-form'
      className={`header-controls-search-form form-inline ${
        isOpen ? '' : 'invisible'
      }`}
      onSubmit={handleSubmit}
    >
      <input
        className='form-control'
        placeholder='Поиск'
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchFormHeader

import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  changeSearch,
  submitValue,
} from '../../redux/server/slices/searchSlice'

const SearchFormCatalog: React.FC = (): JSX.Element => {
  const { value } = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeSearch(evt.target.value))
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    dispatch(submitValue(true))
  }
  return (
    <form className='catalog-search-form form-inline' onSubmit={handleSubmit}>
      <input
        className='form-control'
        placeholder='Поиск'
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchFormCatalog

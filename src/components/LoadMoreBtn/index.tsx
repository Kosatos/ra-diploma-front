import React from 'react'

interface LoadMoreBtnProps {
  handleLoadMore: () => void
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  handleLoadMore,
}): JSX.Element => {
  return (
    <button className='btn btn-outline-primary' onClick={handleLoadMore}>
      Загрузить ещё
    </button>
  )
}

export default LoadMoreBtn

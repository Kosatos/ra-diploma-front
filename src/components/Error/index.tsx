import React from 'react'
import errImg from '../../assets/images/error-image.png'

const Error: React.FC = (): JSX.Element => {
  return (
    <div className='error-message'>
      <p>Something went wrong... Try reloading the page.</p>
      <img src={errImg} alt='' />
    </div>
  )
}

export default Error

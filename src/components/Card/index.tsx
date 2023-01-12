import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ICategoryItem } from '../../models'

interface CardProps {
  card: ICategoryItem
  extraClass?: string
}

const Card: React.FC<CardProps> = ({ card, extraClass }): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = (): void => {
    navigate(`/catalog/${card.id}`)
  }
  return (
    <div className={extraClass !== undefined ? 'card ' + extraClass : 'card'}>
      <img
        src={card.images[0]}
        className='card-img-top img-fluid'
        alt={card.title}
      />
      <div className='card-body'>
        <p className='card-text'>{card.title}</p>
        <p className='card-text'>{card.price} руб.</p>
        <a href='#' className='btn btn-outline-primary' onClick={handleClick}>
          Заказать
        </a>
      </div>
    </div>
  )
}

export default Card

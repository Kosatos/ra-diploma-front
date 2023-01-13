import React, { useState } from 'react'

interface QuantityCounterProps {
  handleClick: (arg: any) => void
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  handleClick,
}): JSX.Element => {
  const [count, setCount] = useState<number>(1)
  const handleIncrement = (): void => {
    setCount((prev) => (prev += 1))
    handleClick(count)
  }
  const handleDecrement = (): void => {
    setCount((prev) => (prev -= 1))
    handleClick(count)
  }
  return (
    <p>
      Количество:
      <span className='btn-group btn-group-sm pl-2'>
        <button
          className='btn btn-secondary'
          disabled={count === 1}
          onClick={handleDecrement}
        >
          -
        </button>
        <span className='btn btn-outline-primary'>{count}</span>
        <button
          className='btn btn-secondary'
          disabled={count === 10}
          onClick={handleIncrement}
        >
          +
        </button>
      </span>
    </p>
  )
}

export default QuantityCounter

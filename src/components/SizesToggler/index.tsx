import React from 'react'
import { ISize } from '../../models'

interface SizesTogglerProps {
  availableSizes: ISize[]
  activeSize: string | null
  handleToggle: (arg: any) => void
}

const SizesToggler: React.FC<SizesTogglerProps> = ({
  availableSizes,
  activeSize,
  handleToggle,
}): JSX.Element => {
  return (
    <p>
      Размеры в наличии:
      {availableSizes.map((s, i) => (
        <span
          className={`catalog-item-size${
            activeSize === s.size ? ' selected' : ''
          }`}
          key={i}
          onClick={() => handleToggle(s.size)}
        >
          {s.size}
        </span>
      ))}
    </p>
  )
}

export default SizesToggler

import React from 'react'

interface InfoTableProps {
  sku: string
  manufacturer: string
  color: string
  material: string
  reason: string
  season: string
}

const InfoTable: React.FC<InfoTableProps> = ({
  sku,
  manufacturer,
  color,
  material,
  reason,
  season,
}): JSX.Element => {
  return (
    <table className='table table-bordered'>
      <tbody>
        <tr>
          <td>Артикул</td>
          <td>{sku}</td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>{manufacturer}</td>
        </tr>
        <tr>
          <td>Цвет</td>
          <td>{color}</td>
        </tr>
        <tr>
          <td>Материалы</td>
          <td>{material}</td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>{season}</td>
        </tr>
        <tr>
          <td>Повод</td>
          <td>{reason}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default InfoTable

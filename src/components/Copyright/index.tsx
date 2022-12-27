import React from 'react'

interface CopyrightProps {
  text: string
}

const Copyright: React.FC<CopyrightProps> = ({ text }): JSX.Element => {
  return (
    <div
      className='footer-copyright'
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  )
}

export default Copyright

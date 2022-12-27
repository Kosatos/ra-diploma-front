import React from 'react'

interface SocialProps {
  items: string[]
}

const Social: React.FC<SocialProps> = ({ items }): JSX.Element => {
  return (
    <div className='footer-social-links'>
      {items.length !== 0 &&
        items.map((item, i) => (
          <div className={'footer-social-link ' + item} key={i}></div>
        ))}
    </div>
  )
}

export default Social

import React from 'react';

interface BannerProps {
  url: string;
  alt: string;
}

const Banner: React.FC<BannerProps> = ({ url, alt }): JSX.Element => {
  return (
    <div className="banner">
      <img src={url} className="img-fluid" alt={alt} />
      <h2 className="banner-header">{alt}</h2>
    </div>
  );
};

export default Banner;

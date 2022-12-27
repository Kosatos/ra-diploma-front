import React from 'react';

interface PayProps {
  items: string[];
}

const Pay: React.FC<PayProps> = ({ items }): JSX.Element => {
  return (
    <div className="footer-pay">
      {items.length !== 0 &&
        items.map((item, i) => (
          <div className={'footer-pay-systems ' + item} key={i}></div>
        ))}
    </div>
  );
};

export default Pay;

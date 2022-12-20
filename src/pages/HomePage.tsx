import React from 'react';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
};

export default HomePage;

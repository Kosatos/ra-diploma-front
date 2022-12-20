import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;

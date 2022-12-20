import React from 'react';
import Banner from '../../components/Banner';
import { Outlet } from 'react-router-dom';

import { DATA } from '../../DATA';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner url={DATA.images.banner.url} alt={DATA.images.banner.alt} />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;

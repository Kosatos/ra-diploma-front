import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

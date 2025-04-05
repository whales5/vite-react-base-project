import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

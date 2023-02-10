import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviePage from '../pages/movie/MoviePage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import QrCodePage from '../pages/qrCode/QrCodePage';

const BaseRoute = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<QrCodePage />} />
      <Route path="/movie" element={<MoviePage />} />

      {/* Catch all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default BaseRoute;

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Home from '@pages/Home';
import Programmes from '@pages/Programmes';
import Application from '@pages/Application';
import NotFound from '@pages/NotFound';
import {
  OrientationHub,
  MetiersList,
  MetierDetail,
  EcolesList,
  EcoleDetail,
} from '@pages/orientation';
import { initGA, logPageView } from '@utils/analytics';

// Composant pour tracker les changements de page et scroll to top
function RouteHandler() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Track page view
    logPageView(location.pathname);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="services" element={<Programmes />} />
          <Route path="application" element={<Application />} />
          {/* Orientation */}
          <Route path="orientation" element={<OrientationHub />} />
          <Route path="orientation/metiers" element={<MetiersList />} />
          <Route path="orientation/metiers/:slug" element={<MetierDetail />} />
          <Route path="orientation/ecoles" element={<EcolesList />} />
          <Route path="orientation/ecoles/:slug" element={<EcoleDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

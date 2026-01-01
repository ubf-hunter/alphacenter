import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Home from '@pages/Home';
import Programmes from '@pages/Programmes';
import Application from '@pages/Application';
import NotFound from '@pages/NotFound';
import { initGA, logPageView } from '@utils/analytics';

// Composant pour tracker les changements de page
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="services" element={<Programmes />} />
          <Route path="application" element={<Application />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

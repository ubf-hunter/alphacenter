import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import { InscriptionModal } from '@components/modals';
import Home from '@pages/Home';
import Programmes from '@pages/Programmes';
import ProgrammeDetail from '@pages/ProgrammeDetail';
import Ressources from '@pages/Ressources';
import Application from '@pages/Application';
import Contact from '@pages/Contact';
import NotFound from '@pages/NotFound';
import {
  OrientationHub,
  MetiersList,
  MetierDetail,
  EcolesList,
  EcoleDetail,
} from '@pages/orientation';
import AboutIndex, {
  QuiSommesNous,
  Equipe,
  Resultats,
} from '@pages/about';
import { InscriptionModalProvider } from './hooks/useInscriptionModal';
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
    <InscriptionModalProvider>
      <BrowserRouter>
        <RouteHandler />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="programmes" element={<Programmes />} />
            <Route path="programmes/:programId" element={<ProgrammeDetail />} />
            <Route path="ressources" element={<Ressources />} />
            <Route path="bibliotheque" element={<Ressources />} />
            <Route path="services" element={<Programmes />} />
            <Route path="application" element={<Application />} />
            <Route path="contact" element={<Contact />} />
            {/* Orientation */}
            <Route path="orientation" element={<OrientationHub />} />
            <Route path="orientation/metiers" element={<MetiersList />} />
            <Route path="orientation/metiers/:slug" element={<MetierDetail />} />
            <Route path="orientation/ecoles" element={<EcolesList />} />
            <Route path="orientation/ecoles/:slug" element={<EcoleDetail />} />
            {/* A propos */}
            <Route path="a-propos" element={<AboutIndex />} />
            <Route path="a-propos/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="a-propos/equipe" element={<Equipe />} />
            <Route path="a-propos/resultats" element={<Resultats />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <InscriptionModal />
      </BrowserRouter>
    </InscriptionModalProvider>
  );
}

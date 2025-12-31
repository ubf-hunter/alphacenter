import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Home from '@pages/Home';
import Programmes from '@pages/Programmes';
import Application from '@pages/Application';
import NotFound from '@pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
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

// ============================================
// ABOUT INDEX - Redirection vers qui-sommes-nous
// ============================================

import { Navigate } from 'react-router-dom';

export default function AboutIndex() {
  return <Navigate to="/a-propos/qui-sommes-nous" replace />;
}

export { default as Equipe } from './Equipe';
export { default as QuiSommesNous } from './QuiSommesNous';
export { default as Resultats } from './Resultats';

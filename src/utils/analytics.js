// ============================================
// GOOGLE ANALYTICS 4 - Utilitaires
// ============================================

import ReactGA from 'react-ga4';

// ID de mesure Google Analytics
// TODO: Remplacer par votre ID reel
const GA_MEASUREMENT_ID = 'G-PRGRLDK03M';

// Initialiser Google Analytics
export const initGA = () => {
  // Ne pas initialiser en developpement
  if (import.meta.env.DEV) {
    console.log('[GA] Mode developpement - Analytics desactive');
    return;
  }

  ReactGA.initialize(GA_MEASUREMENT_ID);
  console.log('[GA] Google Analytics initialise');
};

// Tracker une page vue
export const logPageView = (path, title) => {
  if (import.meta.env.DEV) {
    console.log(`[GA] Page view: ${path}`);
    return;
  }

  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title,
  });
};

// Tracker un evenement
export const logEvent = (category, action, label, value) => {
  if (import.meta.env.DEV) {
    console.log(`[GA] Event: ${category} / ${action} / ${label}`);
    return;
  }

  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// ===== EVENEMENTS PREDEFINITS =====

// Clic sur telechargement app
export const trackAppDownload = (store) => {
  logEvent('App', 'Download', store);
};

// Clic sur inscription
export const trackInscriptionClick = (source) => {
  logEvent('Conversion', 'Inscription_Click', source);
};

// Soumission formulaire contact
export const trackContactSubmit = () => {
  logEvent('Form', 'Submit', 'Contact');
};

// Clic sur un programme
export const trackProgrammeClick = (programmeName) => {
  logEvent('Programme', 'Click', programmeName);
};

// Clic sur lien social
export const trackSocialClick = (platform) => {
  logEvent('Social', 'Click', platform);
};

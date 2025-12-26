# CLAUDE INSTRUCTIONS - ALPHA CENTER WEBSITE

> Ce fichier contient toutes les instructions pour Claude Code afin de développer le site web Alpha Center.
> Claude Code doit lire ce fichier en entier avant de commencer tout développement.

---

## 🎯 CONTEXTE DU PROJET

### Description
Alpha Center est un **centre de préparation aux concours des grandes écoles d'ingénieurs au Cameroun** (ENSP, ENSTP, ENS). Le site web vitrine a pour objectifs :
- Présenter les programmes de préparation
- Convertir les visiteurs en inscriptions
- Orienter les étudiants vers les métiers de l'ingénierie
- Promouvoir l'application mobile Alpha
- Établir la crédibilité avec résultats et témoignages

### Public Cible
- Élèves de Terminale C/D préparant le Bac + concours
- Bacheliers récents préparant les concours d'entrée
- Parents (décideurs financiers)
- Étudiants indécis cherchant une orientation

---

## 🛠️ STACK TECHNIQUE

```
Framework:       React 18+
Build Tool:      Vite 5+
Styling:         Tailwind CSS v4 (nouvelle syntaxe @theme)
Routing:         React Router v6
Language:        JavaScript (JSX) - PAS de TypeScript
Icons:           Lucide React
Animations:      Framer Motion (optionnel)
Forms:           React Hook Form (pour les formulaires)
```

### Commandes d'initialisation

```bash
# Créer le projet
npm create vite@latest alpha-center-website -- --template react

# Installer les dépendances
cd alpha-center-website
npm install react-router-dom lucide-react framer-motion
npm install react-hook-form @hookform/resolvers zod
npm install tailwindcss @tailwindcss/vite
```

### Configuration Vite

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils'
    }
  }
})
```

---

## 🎨 DESIGN SYSTEM

### Philosophie Design
- **Mode Light** uniquement (fond blanc, textes foncés)
- **Glassmorphism** pour les cards, header, dropdowns
- **Style moderne, épuré et encourageant**
- **Mobile-first**

### Palette de Couleurs

```
COULEURS PRINCIPALES
═══════════════════════════════════════

Navy (Primary - Textes & Headers)
├── navy-900:    #00102F
├── navy-800:    #001A51  ← Principal
├── navy-700:    #002D7A
├── navy-600:    #1A3D73
└── navy-100:    #E6EBF3

Orange (Accent - CTAs & Actions)
├── orange-600:  #D94400
├── orange-500:  #FA5614  ← Principal
├── orange-400:  #FF7A45
├── orange-100:  #FFE6D5
└── orange-50:   #FFF4ED

Neutrals
├── white:       #FFFFFF
├── off-white:   #F8FAFC
├── gray-100:    #F1F5F9
├── gray-200:    #E2E8F0
├── gray-500:    #64748B
└── gray-700:    #334155

Apricot (Accent secondaire)
├── apricot:       #FFDAB9
├── apricot-light: #FFF4E8
└── apricot-dark:  #FFCCA0

Status
├── success:     #10B981
├── warning:     #F59E0B
└── error:       #EF4444
```

### Typographie

```
Font Display (Titres):  'Poppins', system-ui, sans-serif
Font Body (Textes):     'Inter', system-ui, sans-serif

Échelle:
- H1 Hero:    56px / 36px mobile - Bold (700)
- H1 Page:    48px / 32px mobile - Bold (700)
- H2 Section: 36px / 28px mobile - Semibold (600)
- H3 Card:    24px / 20px mobile - Semibold (600)
- Body Large: 18px / 16px mobile - Normal (400)
- Body:       16px - Normal (400)
- Small:      14px - Normal (400)
```

### Glassmorphism Specifications

```css
/* Glass Card (Light) */
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 26, 81, 0.1);
}

/* Glass Card Hover */
.glass-card:hover {
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 12px 40px rgba(0, 26, 81, 0.15);
  transform: translateY(-4px);
}

/* Glass Header */
.glass-header {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

/* Glass Dropdown */
.glass-dropdown {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 26, 81, 0.15);
}

/* Glass Card Dark (Navy) */
.glass-card-dark {
  background: rgba(0, 26, 81, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}
```

### Decorative Elements

```
Blobs décoratifs en arrière-plan:
- Blob Orange: #FA5614 avec opacity 15%, blur 100px
- Blob Navy:   #001A51 avec opacity 10%, blur 120px
- Blob Apricot:#FFDAB9 avec opacity 30%, blur 80px

Positionnés en absolute, z-index négatif
```

---

## 📁 STRUCTURE DES DOSSIERS

```
alpha-center-website/
│
├── public/
│   ├── favicon.ico
│   └── og-image.jpg
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── logo.svg
│   │       └── ...
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Input.jsx
│   │   │   └── CTABanner.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   └── Layout.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── WhyAlpha.jsx
│   │   │   ├── OrientationPreview.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── AppPromo.jsx
│   │   │
│   │   ├── orientation/
│   │   │   ├── MetierCard.jsx
│   │   │   ├── EcoleCard.jsx
│   │   │   ├── SalaryRange.jsx
│   │   │   └── CareerPath.jsx
│   │   │
│   │   └── forms/
│   │       ├── ContactForm.jsx
│   │       └── InscriptionForm.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Resultats.jsx
│   │   ├── Equipe.jsx
│   │   ├── Application.jsx
│   │   ├── Contact.jsx
│   │   ├── Inscription.jsx
│   │   ├── NotFound.jsx
│   │   │
│   │   └── orientation/
│   │       ├── OrientationHub.jsx
│   │       ├── MetiersList.jsx
│   │       ├── MetierDetail.jsx
│   │       ├── EcolesList.jsx
│   │       └── EcoleDetail.jsx
│   │
│   ├── data/
│   │   ├── navigation.js
│   │   ├── metiers.js
│   │   ├── ecoles.js
│   │   └── testimonials.js
│   │
│   ├── hooks/
│   │   └── useScrollToTop.js
│   │
│   ├── utils/
│   │   └── formatters.js
│   │
│   ├── styles/
│   │   └── app.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
├── package.json
├── CLAUDE_INSTRUCTIONS.md
└── README.md
```

---

## 🎯 CONFIGURATION TAILWIND CSS V4

### Fichier CSS Principal

```css
/* src/styles/app.css */

@import "tailwindcss";

@theme {
  /* ══════════════════════════════════════
     COULEURS
     ══════════════════════════════════════ */
  
  /* Navy */
  --color-navy: #001A51;
  --color-navy-50: #E6EBF3;
  --color-navy-100: #C0CCE0;
  --color-navy-700: #002D7A;
  --color-navy-800: #001A51;
  --color-navy-900: #00102F;

  /* Orange */
  --color-orange: #FA5614;
  --color-orange-50: #FFF4ED;
  --color-orange-100: #FFE6D5;
  --color-orange-400: #FF7A45;
  --color-orange-500: #FA5614;
  --color-orange-600: #D94400;

  /* Apricot */
  --color-apricot: #FFDAB9;
  --color-apricot-light: #FFF4E8;
  --color-apricot-dark: #FFCCA0;

  /* Grays */
  --color-off-white: #F8FAFC;
  --color-gray-50: #F8FAFC;
  --color-gray-100: #F1F5F9;
  --color-gray-200: #E2E8F0;
  --color-gray-300: #CBD5E1;
  --color-gray-400: #94A3B8;
  --color-gray-500: #64748B;
  --color-gray-600: #475569;
  --color-gray-700: #334155;

  /* Status */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* ══════════════════════════════════════
     TYPOGRAPHIE
     ══════════════════════════════════════ */
  
  --font-family-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-display: 'Poppins', system-ui, sans-serif;

  /* ══════════════════════════════════════
     ESPACEMENTS CUSTOM
     ══════════════════════════════════════ */
  
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;

  /* ══════════════════════════════════════
     BORDER RADIUS
     ══════════════════════════════════════ */
  
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-3xl: 2rem;

  /* ══════════════════════════════════════
     SHADOWS
     ══════════════════════════════════════ */
  
  --shadow-glass: 0 8px 32px rgba(0, 26, 81, 0.1);
  --shadow-glass-hover: 0 12px 40px rgba(0, 26, 81, 0.15);
  --shadow-orange: 0 10px 30px rgba(250, 86, 20, 0.25);
  --shadow-card: 0 4px 12px rgba(0, 26, 81, 0.08);
}

/* ══════════════════════════════════════
   UTILITAIRES CUSTOM
   ══════════════════════════════════════ */

@utility container-alpha {
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 1rem;
  
  @media (min-width: 640px) {
    padding-inline: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding-inline: 2rem;
  }
}

@utility glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

@utility glass-hover {
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 12px 40px rgba(0, 26, 81, 0.15);
}

@utility glass-dark {
  background: rgba(0, 26, 81, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@utility text-gradient {
  background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-orange) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@utility bg-gradient-hero {
  background: linear-gradient(135deg, #FFFFFF 0%, var(--color-apricot-light) 50%, #FFFFFF 100%);
}

@utility bg-gradient-navy {
  background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-700) 100%);
}

/* ══════════════════════════════════════
   ANIMATIONS
   ══════════════════════════════════════ */

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes fade-in-up {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* ══════════════════════════════════════
   STYLES DE BASE
   ══════════════════════════════════════ */

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family-sans);
  background-color: #FFFFFF;
  color: var(--color-gray-700);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-display);
  color: var(--color-navy);
  line-height: 1.2;
}
```

---

## 🧭 STRUCTURE DE NAVIGATION

### Header - Structure Finale

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [LOGO]   Accueil   Programmes   Orientation▼   À propos▼   [Contact] [S'inscrire]
│              ●                        │              │        Ghost    Primary
│           (actif)                     │              │
│                           ┌───────────┘              └───────────┐
│                           ▼                                      ▼
│                   ┌───────────────┐                    ┌──────────────┐
│                   │  MEGA MENU    │                    │  DROPDOWN    │
│                   │               │                    │              │
│                   │ Métiers│Écoles│                    │ • Résultats  │
│                   │        │      │                    │ • Équipe     │
│                   │ [Hub CTA]     │                    │ • Application│
│                   └───────────────┘                    └──────────────┘
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Données Navigation

```javascript
// src/data/navigation.js

export const mainNavigation = [
  {
    label: 'Accueil',
    href: '/',
    type: 'link'
  },
  {
    label: 'Programmes',
    href: '/services',
    type: 'link'
  },
  {
    label: 'Orientation',
    type: 'megamenu',
    megamenu: {
      metiers: {
        title: '🎯 Explore les métiers',
        items: [
          { label: 'Génie Civil', href: '/orientation/metiers/genie-civil', icon: '🏗️' },
          { label: 'Génie Informatique', href: '/orientation/metiers/genie-informatique', icon: '💻' },
          { label: 'Génie Électrique', href: '/orientation/metiers/genie-electrique', icon: '⚡' },
          { label: 'Génie Mécanique', href: '/orientation/metiers/genie-mecanique', icon: '🔧' },
        ],
        viewAll: { label: 'Voir tous les métiers', href: '/orientation/metiers' }
      },
      ecoles: {
        title: '🏫 Découvre les écoles',
        cameroun: [
          { label: 'ENSP Yaoundé', href: '/orientation/ecoles/ensp-yaounde' },
          { label: 'ENSTP', href: '/orientation/ecoles/enstp' },
          { label: 'ENS Yaoundé', href: '/orientation/ecoles/ens-yaounde' },
        ],
        etranger: [
          { label: 'Polytechnique Paris', href: '/orientation/ecoles/polytechnique-paris' },
          { label: 'EPFL Suisse', href: '/orientation/ecoles/epfl' },
        ],
        viewAll: { label: 'Voir toutes les écoles', href: '/orientation/ecoles' }
      },
      cta: {
        text: "💡 Tu ne sais pas quel ingénieur devenir ?",
        subtext: "Explore notre guide d'orientation complet",
        href: '/orientation'
      }
    }
  },
  {
    label: 'À propos',
    type: 'dropdown',
    items: [
      { label: 'Nos résultats', href: '/resultats', icon: '📊', description: 'Découvre nos taux de réussite' },
      { label: 'Notre équipe', href: '/equipe', icon: '👥', description: '50+ enseignants passionnés' },
      { label: "L'application Alpha", href: '/application', icon: '📱', description: 'Révise partout, même offline' },
    ]
  }
];

export const ctaButtons = [
  { label: 'Contact', href: '/contact', variant: 'ghost' },
  { label: "S'inscrire", href: '/inscription', variant: 'primary' }
];

export const footerNavigation = {
  navigation: [
    { label: 'Accueil', href: '/' },
    { label: 'Programmes', href: '/services' },
    { label: 'Résultats', href: '/resultats' },
    { label: 'Notre équipe', href: '/equipe' },
    { label: "L'application", href: '/application' },
  ],
  orientation: [
    { label: 'Hub Orientation', href: '/orientation' },
    { label: 'Les métiers', href: '/orientation/metiers' },
    { label: 'Les écoles', href: '/orientation/ecoles' },
  ],
  contact: {
    address: 'Yaoundé, Cameroun',
    phone: '+237 6XX XXX XXX',
    email: 'contact@alpha-center.cm'
  },
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGU', href: '/cgu' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
  ],
  social: [
    { label: 'Facebook', href: '#', icon: 'Facebook' },
    { label: 'Instagram', href: '#', icon: 'Instagram' },
    { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { label: 'WhatsApp', href: '#', icon: 'MessageCircle' },
  ]
};
```

---

## 📄 ROUTES DE L'APPLICATION

```javascript
// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Layout from '@components/layout/Layout';

// Pages
import Home from '@pages/Home';
import Services from '@pages/Services';
import Resultats from '@pages/Resultats';
import Equipe from '@pages/Equipe';
import Application from '@pages/Application';
import Contact from '@pages/Contact';
import Inscription from '@pages/Inscription';
import NotFound from '@pages/NotFound';

// Pages Orientation
import OrientationHub from '@pages/orientation/OrientationHub';
import MetiersList from '@pages/orientation/MetiersList';
import MetierDetail from '@pages/orientation/MetierDetail';
import EcolesList from '@pages/orientation/EcolesList';
import EcoleDetail from '@pages/orientation/EcoleDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Pages principales */}
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="resultats" element={<Resultats />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="application" element={<Application />} />
        <Route path="contact" element={<Contact />} />
        <Route path="inscription" element={<Inscription />} />
        
        {/* Pages Orientation */}
        <Route path="orientation">
          <Route index element={<OrientationHub />} />
          <Route path="metiers" element={<MetiersList />} />
          <Route path="metiers/:slug" element={<MetierDetail />} />
          <Route path="ecoles" element={<EcolesList />} />
          <Route path="ecoles/:slug" element={<EcoleDetail />} />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
```

---

## 📝 CONTENU DES PAGES

### PAGE ACCUEIL (/)

```
SECTIONS DE LA PAGE ACCUEIL
═══════════════════════════════════════════════════════════════

1. HERO
   ├── Badge: "🏆 +500 admis depuis 2009"
   ├── H1: "Intègre l'école d'ingénieurs de tes rêves"
   ├── Subtitle: "Préparation intensive aux concours ENSP, ENSTP, ENS et grandes écoles d'ingénieurs au Cameroun et à l'étranger."
   ├── CTA Primary: "Je m'inscris →"
   ├── CTA Ghost: "Découvrir nos programmes"
   └── Mini stats: 95% réussite | 50+ profs | 15 ans exp.

2. STATISTIQUES (glass container)
   ├── 500+ Étudiants admis depuis 2009
   ├── 95% Taux de réussite aux concours
   ├── 15+ Années d'expérience
   └── 50+ Enseignants experts

3. NOS PROGRAMMES
   ├── Badge: "Nos formations"
   ├── H2: "Des programmes adaptés à chaque concours"
   ├── Cards: Prépa ENSP, Prépa ENSTP, Prépa ENS
   └── CTA: "Voir tous les programmes →"

4. POURQUOI ALPHA CENTER
   ├── H2: "Ce qui nous rend différents"
   └── Features:
       ├── Enseignants d'excellence
       ├── Petits groupes (max 25)
       ├── Suivi individualisé
       ├── Concours blancs réguliers
       ├── Application Alpha
       └── Tarifs accessibles

5. APERÇU ORIENTATION (fond apricot)
   ├── Badge: "🧭 Orientation"
   ├── H2: "Tu ne sais pas encore quel ingénieur tu veux devenir ?"
   ├── Grid métiers: GC, GI, GE, GM, GP, GEnv
   └── CTA: "Explorer tous les métiers →"

6. TÉMOIGNAGES
   ├── Badge: "Ils ont réussi"
   ├── H2: "Ce que disent nos anciens étudiants"
   └── Slider témoignages avec photo, citation, école

7. APPLICATION MOBILE (fond navy glass-dark)
   ├── Badge: "📱 Application mobile"
   ├── H2: "Révise partout avec l'app Alpha"
   ├── Features: QCM, Offline, Corrections, Progression
   └── Boutons: App Store, Google Play

8. CTA FINAL
   ├── H2: "Prêt à rejoindre les futurs ingénieurs ?"
   ├── Subtitle: "Inscris-toi maintenant pour la prochaine session."
   ├── CTA: "Je m'inscris maintenant →"
   └── Contact: Téléphone + Email
```

### PAGE HUB ORIENTATION (/orientation)

```
SECTIONS DU HUB ORIENTATION
═══════════════════════════════════════════════════════════════

1. HERO
   ├── Badge: "🧭 Orientation"
   ├── H1: "Trouve ta voie dans l'ingénierie"
   ├── Subtitle: "Tu veux devenir ingénieur mais tu ne sais pas encore dans quel domaine ? Explore les métiers passionnants qui t'attendent !"
   └── CTAs: "Explorer les métiers" + "Voir les écoles"

2. GRILLE MÉTIERS
   ├── H2: "Explore par domaine"
   ├── Grid 4 colonnes de MetierCard:
   │   ├── 🏗️ Génie Civil - "Construis le monde de demain"
   │   ├── 💻 Génie Informatique - "Crée les technologies du futur"
   │   ├── ⚡ Génie Électrique - "Maîtrise l'énergie"
   │   ├── 🔧 Génie Mécanique - "Conçois les machines"
   │   ├── 🛢️ Génie Pétrolier - "Exploite les ressources"
   │   └── 🌍 Génie Environnement - "Protège la planète"
   └── CTA: "Voir tous les métiers →"

3. LES ÉCOLES
   ├── H2: "Les grandes écoles"
   ├── Tabs: 🇨🇲 Cameroun | 🌍 Étranger
   ├── Grid EcoleCard
   └── CTA: "Voir toutes les écoles →"

4. FUN FACTS
   ├── H2: "💡 Le savais-tu ?"
   └── Cards avec stats intéressantes

5. CTA FINAL
   ├── H2: "Prêt à te lancer ?"
   ├── Stats: "500+ étudiants ont intégré leur école de rêve"
   └── CTA: "Je m'inscris à la prépa →"
```

### PAGE DÉTAIL MÉTIER (/orientation/metiers/:slug)

```
SECTIONS PAGE MÉTIER
═══════════════════════════════════════════════════════════════

1. BREADCRUMB
   └── Accueil > Orientation > Métiers > [Nom du métier]

2. HERO
   ├── Image hero du métier
   ├── Badge catégorie: "🏗️ Construction & Infrastructure"
   ├── H1: "Ingénieur Génie Civil"
   ├── Tagline: "Le bâtisseur du monde moderne"
   └── Stats: 💰 300k-1.2M XAF | 🎓 Bac+5 | 📈 Forte demande

3. NAVIGATION STICKY
   └── [Définition] [Missions] [Salaire] [Parcours] [Écoles]

4. DÉFINITION
   ├── H2: "📖 C'est quoi un ingénieur génie civil ?"
   └── Texte engageant et accessible

5. MISSIONS
   ├── H2: "🛠️ Ce que tu feras au quotidien"
   └── Liste avec icônes

6. SECTEURS
   ├── H2: "🏢 Secteurs d'activité"
   └── Grid: BTP, Infrastructure, Énergie, Industrie...

7. SALAIRES
   ├── H2: "💰 Combien tu peux gagner ?"
   ├── Barre visuelle Débutant → Senior
   ├── Fun fact salaire
   └── Salaires à l'étranger

8. COMPÉTENCES
   ├── H2: "📚 Compétences requises"
   ├── Matières clés avec barres de progression
   └── Soft skills

9. PARCOURS
   ├── H2: "🎓 Comment devenir ingénieur [métier] ?"
   └── Timeline: Bac → Concours → École → Stage → Diplôme

10. ÉCOLES
    ├── H2: "🏫 Où étudier ?"
    ├── Section Cameroun avec EcoleCard
    └── Section Étranger

11. TÉMOIGNAGE
    ├── H2: "🎬 Témoignage"
    └── Vidéo embed + citation

12. FUN FACTS
    ├── H2: "💡 Le savais-tu ?"
    └── Cards avec faits intéressants

13. MÉTIERS SIMILAIRES
    └── Grid de MetierCard connexes

14. CTA FINAL
    ├── H2: "🚀 Prêt à devenir ingénieur [métier] ?"
    ├── Stat: "En 2024, X étudiants Alpha ont intégré cette filière"
    ├── CTA: "Je commence ma préparation →"
    └── Mention app mobile
```

---

## 🧩 COMPOSANTS À CRÉER

### Composants Common (Priorité Haute)

| Composant | Props | Description |
|-----------|-------|-------------|
| `Button` | variant, size, href, to, children | Boutons primary, ghost, secondary |
| `Card` | variant, hover, className, children | Glass card avec variants |
| `Container` | className, children | Container responsive max-w-1280 |
| `SectionTitle` | badge, title, subtitle, align | Titre de section avec badge |
| `Badge` | variant, children | Pill badges |
| `Input` | label, error, ...props | Input avec label et erreur |
| `CTABanner` | title, subtitle, cta, variant | Bannière CTA navy ou orange |

### Composants Layout (Priorité Haute)

| Composant | Description |
|-----------|-------------|
| `Header` | Navbar glassmorphism avec mega menu |
| `Footer` | Footer complet avec navigation |
| `MobileMenu` | Menu mobile slide-in |
| `Layout` | Wrapper avec Header + Outlet + Footer |

### Composants Home

| Composant | Description |
|-----------|-------------|
| `Hero` | Hero section avec CTA et stats |
| `Stats` | 4 statistiques dans glass container |
| `Programs` | Grid de 3 programmes |
| `WhyAlpha` | 6 features en 2 colonnes |
| `OrientationPreview` | Aperçu métiers avec fond apricot |
| `Testimonials` | Slider de témoignages |
| `AppPromo` | Section app sur fond navy |

### Composants Orientation

| Composant | Description |
|-----------|-------------|
| `MetierCard` | Card métier avec icône, titre, salaire |
| `EcoleCard` | Card école avec logo, infos |
| `SalaryRange` | Visualisation salaire avec barre |
| `CareerPath` | Timeline du parcours |

---

## 📊 DONNÉES STATIQUES

### Métiers

```javascript
// src/data/metiers.js

export const metiers = [
  {
    slug: 'genie-civil',
    icon: '🏗️',
    title: 'Ingénieur Génie Civil',
    tagline: 'Le bâtisseur du monde moderne',
    shortDescription: 'Conçois et supervise la construction des infrastructures qui façonnent notre quotidien.',
    category: 'Construction',
    salaryMin: 300000,
    salaryMax: 1200000,
    salaryFunFact: 'Les ingénieurs GC dans le secteur pétrolier peuvent gagner jusqu\'à 2M XAF/mois !',
    demand: 'Forte',
    definition: `Imagine que tu es le chef d'orchestre de projets gigantesques : des ponts qui enjambent des fleuves, des gratte-ciels qui touchent le ciel, des routes qui connectent des villes entières...

L'ingénieur génie civil conçoit, calcule et supervise la construction de tout ce qui nous entoure. C'est grâce à lui que les bâtiments tiennent debout et que les infrastructures fonctionnent !`,
    missions: [
      'Concevoir des structures solides et sûres',
      'Calculer les forces et résistances des matériaux',
      'Diriger des équipes sur les chantiers',
      'Résoudre des problèmes techniques complexes',
      'Utiliser des logiciels de modélisation (AutoCAD, etc.)',
      'Respecter les normes de sécurité et environnementales'
    ],
    sectors: ['BTP', 'Infrastructure', 'Énergie', 'Industrie', 'Pétrole/Gaz', 'Bureaux d\'études'],
    skills: {
      maths: 'essential',
      physique: 'essential',
      dessinTechnique: 'important',
      informatique: 'important'
    },
    softSkills: ['Rigueur', 'Leadership', 'Communication', 'Résolution de problèmes'],
    careerPath: [
      { step: 1, title: 'Bac C/D', description: 'Obtenir le baccalauréat scientifique' },
      { step: 2, title: 'Concours', description: 'Réussir le concours d\'entrée' },
      { step: 3, title: 'École', description: '5 ans de formation intensive' },
      { step: 4, title: 'Stages', description: 'Expérience terrain obligatoire' },
      { step: 5, title: 'Diplôme', description: 'Titre d\'ingénieur reconnu' }
    ],
    ecoles: ['ensp-yaounde', 'enstp', 'polytechnique-paris', 'epfl'],
    salaryAbroad: {
      france: '3 000€ - 6 000€/mois',
      canada: '5 000$ - 10 000$/mois',
      moyenOrient: '4 000$ - 12 000$/mois'
    },
    funFacts: [
      { icon: '🌉', text: 'Le pont le plus long d\'Afrique est au Cameroun !' },
      { icon: '🏗️', text: 'Le Burj Khalifa a nécessité 12 000 ingénieurs GC' }
    ],
    relatedMetiers: ['genie-mecanique', 'architecture']
  },
  // ... autres métiers
];
```

### Écoles

```javascript
// src/data/ecoles.js

export const ecoles = [
  {
    slug: 'ensp-yaounde',
    name: 'ENSP Yaoundé',
    fullName: 'École Nationale Supérieure Polytechnique',
    logo: '/images/ecoles/ensp-logo.png',
    heroImage: '/images/ecoles/ensp-campus.jpg',
    country: 'Cameroun',
    city: 'Yaoundé',
    type: 'Publique',
    foundedYear: 1961,
    description: `L'ENSP est la plus prestigieuse école d'ingénieurs du Cameroun. Elle forme les élites techniques du pays depuis plus de 60 ans.`,
    placesPerYear: 150,
    selectionRate: '5%',
    tuitionFees: '150 000 XAF/an',
    filieres: [
      { name: 'Génie Civil', places: 45 },
      { name: 'Génie Électrique', places: 30 },
      { name: 'Génie Informatique', places: 35 },
      { name: 'Génie Mécanique', places: 25 },
      { name: 'Génie des Télécommunications', places: 15 }
    ],
    concours: {
      period: 'Mars - Avril',
      subjects: [
        { name: 'Mathématiques', coefficient: 4 },
        { name: 'Physique', coefficient: 4 },
        { name: 'Chimie', coefficient: 2 },
        { name: 'Français', coefficient: 1 },
        { name: 'Anglais', coefficient: 1 }
      ],
      conditions: [
        'Être titulaire du Baccalauréat C, D ou équivalent',
        'Avoir moins de 23 ans',
        'Nationalité camerounaise (ou quota étranger)'
      ]
    },
    alphaAdmissions: {
      2024: 87,
      2023: 79,
      2022: 72,
      2021: 65
    },
    website: 'https://ensp.cm',
    metiers: ['genie-civil', 'genie-informatique', 'genie-electrique', 'genie-mecanique']
  },
  // ... autres écoles
];
```

### Témoignages

```javascript
// src/data/testimonials.js

export const testimonials = [
  {
    id: 1,
    name: 'Jean-Paul Nkodo',
    photo: '/images/testimonials/jean-paul.jpg',
    role: 'Ingénieur Génie Civil',
    company: 'Razel-Bec',
    ecole: 'ENSP',
    year: 2019,
    quote: 'Alpha Center m\'a donné les bases solides pour réussir le concours de l\'ENSP. Aujourd\'hui, je supervise des projets de construction de millions de francs.',
    featured: true
  },
  {
    id: 2,
    name: 'Marie-Claire Fotso',
    photo: '/images/testimonials/marie-claire.jpg',
    role: 'Développeuse Senior',
    company: 'Orange Cameroun',
    ecole: 'ENSP',
    year: 2020,
    quote: 'Les professeurs de maths m\'ont fait aimer cette matière. J\'ai eu 18/20 au concours !',
    featured: true
  },
  {
    id: 3,
    name: 'Patrick Essomba',
    photo: '/images/testimonials/patrick.jpg',
    role: 'Ingénieur',
    company: 'Total Energies',
    ecole: 'ENSTP',
    year: 2018,
    quote: 'Grâce à Alpha Center, j\'ai intégré l\'ENSTP du premier coup. Les concours blancs m\'ont vraiment préparé.',
    featured: true
  }
];
```

---

## 🎯 CONVENTIONS DE CODE

### Nommage

```
Composants:    PascalCase      (Button.jsx, MetierCard.jsx)
Fichiers data: camelCase       (metiers.js, navigation.js)
CSS classes:   kebab-case      (glass-card, cta-banner)
Variables:     camelCase       (isMenuOpen, handleClick)
Constantes:    SCREAMING_SNAKE (MAX_WIDTH, API_URL)
```

### Structure Composant

```jsx
// Template composant
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ComponentName({ prop1, prop2, className = '' }) {
  const [state, setState] = useState(false);
  
  return (
    <div className={`base-classes ${className}`}>
      {/* Contenu */}
    </div>
  );
}
```

### Classes Tailwind - Ordre

```
1. Layout (display, position, flex, grid)
2. Sizing (width, height, padding, margin)
3. Typography (font, text, leading)
4. Colors (bg, text, border colors)
5. Effects (shadow, opacity, blur)
6. Transitions (transition, duration)
7. States (hover:, focus:, active:)
8. Responsive (sm:, md:, lg:)
```

---

## ⚡ PRIORITÉS DE DÉVELOPPEMENT

### Phase 1 - Fondations (Jours 1-2)
1. ✅ Setup Vite + React + Tailwind v4
2. ✅ Configuration app.css avec design system
3. ✅ Composants common (Button, Card, Container)
4. ✅ Layout (Header, Footer, Layout)
5. ✅ Routing de base

### Phase 2 - Page Accueil (Jours 3-4)
1. ⬜ Hero section
2. ⬜ Stats section
3. ⬜ Programs section
4. ⬜ WhyAlpha section
5. ⬜ OrientationPreview section
6. ⬜ Testimonials section
7. ⬜ AppPromo section
8. ⬜ CTA Final section

### Phase 3 - Orientation (Jours 5-7)
1. ⬜ Hub Orientation
2. ⬜ Liste Métiers + MetierCard
3. ⬜ Page Détail Métier (template)
4. ⬜ Liste Écoles + EcoleCard
5. ⬜ Page Détail École (template)

### Phase 4 - Autres Pages (Jours 8-10)
1. ⬜ Page Services/Programmes
2. ⬜ Page Résultats
3. ⬜ Page Équipe
4. ⬜ Page Application
5. ⬜ Page Contact (formulaire)
6. ⬜ Page Inscription (multi-étapes)

### Phase 5 - Polish (Jours 11-12)
1. ⬜ Animations Framer Motion
2. ⬜ Optimisation images
3. ⬜ SEO meta tags
4. ⬜ Tests responsive
5. ⬜ Déploiement

---

## 🚨 POINTS D'ATTENTION

### À FAIRE
- ✅ Utiliser la syntaxe Tailwind v4 (@theme, @utility)
- ✅ Appliquer le glassmorphism sur cards et header
- ✅ Garder le design light mode (fond blanc)
- ✅ Utiliser les couleurs Navy et Orange comme défini
- ✅ Mobile-first approach
- ✅ Composants réutilisables

### À ÉVITER
- ❌ Ne PAS utiliser TypeScript (JavaScript uniquement)
- ❌ Ne PAS utiliser l'ancienne syntaxe Tailwind (tailwind.config.js)
- ❌ Ne PAS créer de dark mode
- ❌ Ne PAS utiliser d'autres couleurs que celles définies
- ❌ Ne PAS oublier le backdrop-filter pour le glass effect

---

## 📞 INFORMATIONS DE CONTACT (Placeholder)

```
Nom:      Alpha Center
Adresse:  Yaoundé, Cameroun
Téléphone: +237 6XX XXX XXX
Email:    contact@alpha-center.cm
```

---

**FIN DES INSTRUCTIONS CLAUDE**

Ce fichier doit rester à la racine du projet pour que Claude Code puisse s'y référer à tout moment pendant le développement.

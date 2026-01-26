// Vercel Edge Middleware - Serves meta tags to social media crawlers
// This runs at the edge before the request reaches your app

const SITE_URL = 'https://alphacenter.cm';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

// Bot detection patterns
const BOT_PATTERNS = [
  'facebookexternalhit',
  'Facebot',
  'Twitterbot',
  'LinkedInBot',
  'WhatsApp',
  'Slackbot',
  'TelegramBot',
  'Discordbot',
  'Pinterest',
  'Googlebot',
  'bingbot',
];

// Career data for meta tags (images in /public/og/ folder)
const careers = {
  'ingenieur-genie-civil': {
    name: 'Ingénieur Génie Civil',
    description: 'L\'ingénieur en génie civil conçoit, construit et supervise les infrastructures essentielles : routes, ponts, bâtiments, barrages.',
    image: '/og/GC.jpeg',
  },
  'ingenieur-informatique': {
    name: 'Ingénieur Informatique',
    description: 'L\'ingénieur informatique conçoit et développe des solutions logicielles et systèmes informatiques.',
    image: '/og/GI.jpeg',
  },
  'ingenieur-telecom': {
    name: 'Ingénieur Télécommunications',
    description: 'L\'ingénieur télécom conçoit et gère les réseaux de communication.',
    image: '/og/GI.jpeg',
  },
  'ingenieur-mecanique': {
    name: 'Ingénieur Mécanique',
    description: 'L\'ingénieur mécanique conçoit et optimise des systèmes mécaniques.',
    image: '/og/Gmeca.jpeg',
  },
  'ingenieur-electrique': {
    name: 'Ingénieur Électrique',
    description: 'L\'ingénieur électrique conçoit des systèmes électriques et électroniques.',
    image: '/og/Gelec.jpeg',
  },
  'ingenieur-chimique': {
    name: 'Ingénieur Chimique',
    description: 'L\'ingénieur chimique transforme les matières premières en produits finis.',
    image: '/og/Gpetro.jpeg',
  },
  'ingenieur-environnement': {
    name: 'Ingénieur Environnement',
    description: 'L\'ingénieur environnement protège et préserve notre planète.',
    image: '/og/Genviron.jpeg',
  },
  'architecte': {
    name: 'Architecte',
    description: 'L\'architecte conçoit et supervise la construction de bâtiments.',
    image: '/og/architec.jpeg',
  },
  'medecin': {
    name: 'Médecin',
    description: 'Le médecin diagnostique les maladies, prescrit des traitements et accompagne les patients.',
    image: '/og/medecin.jpeg',
  },
  'infirmier': {
    name: 'Infirmier',
    description: 'L\'infirmier prodigue des soins aux patients et assiste les médecins.',
    image: '/og/medecin.jpeg',
  },
  'gestionnaire-projet': {
    name: 'Gestionnaire de Projet',
    description: 'Le gestionnaire de projet planifie, organise et supervise des projets de A à Z.',
    image: '/og/gestion.jpeg',
  },
  'expert-comptable': {
    name: 'Expert-Comptable',
    description: 'L\'expert-comptable tient les comptes et conseille les entreprises sur leur gestion financière.',
    image: '/og/gestion.jpeg',
  },
};

// School data for meta tags (images in /public/og/ folder)
const schools = {
  'enspy': {
    name: 'ENSPY',
    description: 'École Nationale Supérieure Polytechnique de Yaoundé - Formation d\'ingénieurs de haut niveau.',
    image: '/og/enspy.webp',
  },
  'enstp': {
    name: 'ENSTP',
    description: 'École Nationale Supérieure des Travaux Publics - Formation en génie civil et travaux publics.',
    image: '/og/enstp.png',
  },
  'fmsb': {
    name: 'FMSB',
    description: 'Faculté de Médecine et des Sciences Biomédicales de Yaoundé.',
    image: '/og/FMSP.webp',
  },
  'fmsp-douala': {
    name: 'FMSP Douala',
    description: 'Faculté de Médecine et des Sciences Pharmaceutiques de Douala.',
    image: '/og/FMSP.webp',
  },
  'supptic': {
    name: 'SUP\'PทIC',
    description: 'École Nationale Supérieure des Postes, Télécommunications et TIC.',
    image: '/og/supptic.png',
  },
  'ucac': {
    name: 'UCAC',
    description: 'Université Catholique d\'Afrique Centrale.',
    image: '/og/ucac.webp',
  },
  'fasa': {
    name: 'FASA',
    description: 'Faculté d\'Agronomie et des Sciences Agricoles.',
    image: '/og/fasa.webp',
  },
  'eamau': {
    name: 'EAMAU',
    description: 'École Africaine des Métiers de l\'Architecture et de l\'Urbanisme.',
    image: '/og/EAMAU.webp',
  },
  'prepa-vogt': {
    name: 'Prépa Vogt',
    description: 'Classes préparatoires aux grandes écoles - Collège Vogt.',
    image: '/og/prepa-vogt.png',
  },
};

function isBot(userAgent) {
  if (!userAgent) return false;
  return BOT_PATTERNS.some(pattern =>
    userAgent.toLowerCase().includes(pattern.toLowerCase())
  );
}

function generateMetaHTML({ title, description, image, url }) {
  const fullTitle = title === 'Alpha Center' ? title : `${title} | Alpha Center`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const fullUrl = `${SITE_URL}${url}`;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>${fullTitle}</title>
  <meta name="title" content="${fullTitle}">
  <meta name="description" content="${description}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:title" content="${fullTitle}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${fullImage}">
  <meta property="og:site_name" content="Alpha Center">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${fullUrl}">
  <meta name="twitter:title" content="${fullTitle}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${fullImage}">

  <!-- Redirect real users to the actual page -->
  <meta http-equiv="refresh" content="0;url=${fullUrl}">
</head>
<body>
  <h1>${fullTitle}</h1>
  <p>${description}</p>
  <img src="${fullImage}" alt="${title}">
  <a href="${fullUrl}">Visiter Alpha Center</a>
</body>
</html>`;
}

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Only intercept for bots
  if (!isBot(userAgent)) {
    return; // Continue to normal app
  }

  // Check for career pages
  const careerMatch = pathname.match(/^\/orientation\/metiers\/([^/]+)\/?$/);
  if (careerMatch) {
    const slug = careerMatch[1];
    const career = careers[slug];
    if (career) {
      return new Response(
        generateMetaHTML({
          title: `${career.name} - Fiche métier`,
          description: career.description,
          image: career.image,
          url: pathname,
        }),
        {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        }
      );
    }
  }

  // Check for school pages
  const schoolMatch = pathname.match(/^\/orientation\/ecoles\/([^/]+)\/?$/);
  if (schoolMatch) {
    const slug = schoolMatch[1];
    const school = schools[slug];
    if (school) {
      return new Response(
        generateMetaHTML({
          title: `${school.name} - Fiche école`,
          description: school.description,
          image: school.image,
          url: pathname,
        }),
        {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        }
      );
    }
  }

  // Default: continue to app
  return;
}

export const config = {
  matcher: [
    '/orientation/metiers/:path*',
    '/orientation/ecoles/:path*',
  ],
};

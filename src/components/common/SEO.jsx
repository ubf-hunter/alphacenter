// ============================================
// SEO COMPONENT - Meta tags dynamiques par page
// Utilise react-helmet-async
// ============================================

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://alphacenter.cm';
const DEFAULT_IMAGE = '/og-image.jpg';

export default function SEO({
  title = 'Alpha Center',
  description,
  image,
  url = '',
  type = 'website',
  noIndex = false,
  jsonLd = null,
}) {
  const fullUrl = `${SITE_URL}${url}`;

  // Gestion de l'image OG : utilise l'image passée ou l'image par défaut
  const effectiveImage = image || DEFAULT_IMAGE;
  const fullImage = effectiveImage.startsWith('http')
    ? effectiveImage
    : effectiveImage.startsWith('/')
      ? `${SITE_URL}${effectiveImage}`
      : `${SITE_URL}/${effectiveImage}`;
  const { t, i18n } = useTranslation('seo');
  const effectiveDescription = description || t('defaultDescription');
  const fullTitle = title === 'Alpha Center' ? title : `${title} | Alpha Center`;

  return (
    <Helmet>
      {/* Language */}
      <html lang={i18n.language} />

      {/* Title */}
      <title>{fullTitle}</title>

      {/* Primary Meta Tags */}
      <meta name="title" content={fullTitle} />
      <meta name="description" content={effectiveDescription} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={effectiveDescription} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={effectiveDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

// ============================================
// SEO COMPONENT - Meta tags dynamiques par page
// Utilise react-helmet-async
// ============================================

import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://alphacenter.cm';
const DEFAULT_IMAGE = '/og-image.jpg';

export default function SEO({
  title = 'Alpha Center',
  description = 'Centre de preparation aux concours des grandes ecoles au Cameroun. Ingenieurs, Medecine, Infirmieres.',
  image = DEFAULT_IMAGE,
  url = '',
  type = 'website',
  noIndex = false,
  jsonLd = null,
}) {
  const fullUrl = `${SITE_URL}${url}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const fullTitle = title === 'Alpha Center' ? title : `${title} | Alpha Center`;

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>

      {/* Primary Meta Tags */}
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

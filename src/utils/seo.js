// ============================================
// SEO UTILS - Schema.org JSON-LD Generators
// Pour l'indexation Google des profils equipe
// ============================================

const SITE_URL = 'https://alphacenter.cm';

/**
 * Genere le schema JSON-LD pour une personne
 * @param {Object} member - Membre de l'equipe (leadership ou teacher)
 * @param {string} pageUrl - URL de la page profil (optionnel)
 * @returns {Object} Schema.org Person
 */
export function generatePersonSchema(member, pageUrl) {
  // Gerer les images importees vs chemins string
  const imageUrl =
    typeof member.photo === 'string' && member.photo.startsWith('/')
      ? `${SITE_URL}${member.photo}`
      : member.photo;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role || member.title || member.subject,
    description: member.bio || member.fullBio || member.shortBio,
    url: pageUrl ? `${SITE_URL}${pageUrl}` : undefined,
    image: imageUrl,
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'Alpha Center',
      url: SITE_URL,
      description:
        'Centre de preparation aux concours des grandes ecoles au Cameroun',
    },
    sameAs: [member.social?.linkedin].filter(Boolean),
  };
}

/**
 * Genere le schema JSON-LD pour la page equipe complete
 * @param {Array} members - Liste des membres
 * @returns {Object} Schema.org EducationalOrganization avec employees
 */
export function generateTeamPageSchema(members) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Alpha Center',
    url: SITE_URL,
    description:
      'Centre de preparation aux concours des grandes ecoles au Cameroun. Polytechnique ENSPY, ENSTP, Medecine FMSB.',
    employee: members.map((m) =>
      generatePersonSchema(m, `/a-propos/equipe/${m.slug}`)
    ),
  };
}

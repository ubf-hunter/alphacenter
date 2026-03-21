import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CGU() {
  const { t } = useTranslation('application');
  const { t: ts } = useTranslation('seo');

  return (
    <>
      <SEO
        title={ts('cgu.title')}
        description={ts('cgu.description')}
        url="/cgu"
        noIndex
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">
              {t('legal.cgu.heading')}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              {/* Objet */}
              <div>
                <h2 className="text-xl font-semibold text-navy">1. Objet</h2>
                <p>
                  Les presentes Conditions Generales d'Utilisation (CGU) ont pour objet
                  de definir les modalites et conditions d'utilisation du site
                  alphacenter.cm, ainsi que les droits et obligations des utilisateurs.
                </p>
                <p>
                  Le site alphacenter.cm est un site de presentation des services de
                  preparation aux concours d'entree dans les grandes ecoles (ecoles
                  d'ingenieurs, medecine, commerce) propose par Alpha Center, base a
                  Yaounde, Cameroun.
                </p>
              </div>

              {/* Acces au site */}
              <div>
                <h2 className="text-xl font-semibold text-navy">2. Acces au site</h2>
                <p>
                  Le site est accessible gratuitement a tout utilisateur disposant d'un
                  acces a Internet. Alpha Center met tout en oeuvre pour assurer la
                  disponibilite du site, mais ne peut garantir un acces continu et
                  ininterrompu.
                </p>
                <p>
                  Alpha Center se reserve le droit de suspendre, modifier ou interrompre
                  l'acces au site, en tout ou partie, sans preavis ni indemnite.
                </p>
              </div>

              {/* Inscription et candidature */}
              <div>
                <h2 className="text-xl font-semibold text-navy">3. Inscription et candidature</h2>
                <p>
                  Les formulaires de contact et de candidature disponibles sur le site
                  permettent aux utilisateurs de soumettre des demandes d'information
                  ou des candidatures aux programmes proposes par Alpha Center.
                </p>
                <p>
                  L'utilisateur s'engage a fournir des informations exactes et
                  completes. Alpha Center se reserve le droit de refuser ou d'annuler
                  toute inscription fondee sur des informations inexactes.
                </p>
              </div>

              {/* Propriete intellectuelle */}
              <div>
                <h2 className="text-xl font-semibold text-navy">4. Propriete intellectuelle</h2>
                <p>
                  L'ensemble des contenus presents sur le site (textes, images, logos,
                  videos, elements graphiques) est protege par le droit de la propriete
                  intellectuelle et appartient a Alpha Center ou a ses partenaires.
                </p>
                <p>
                  Toute reproduction, diffusion ou utilisation de ces contenus, meme
                  partielle, est strictement interdite sans autorisation ecrite prealable
                  d'Alpha Center.
                </p>
              </div>

              {/* Responsabilite */}
              <div>
                <h2 className="text-xl font-semibold text-navy">5. Responsabilite</h2>
                <p>
                  Alpha Center s'efforce de fournir des informations aussi precises que
                  possible sur le site. Toutefois, Alpha Center ne saurait etre tenu
                  responsable des omissions, inexactitudes ou carences dans la mise a
                  jour de ces informations.
                </p>
                <p>
                  Alpha Center decline toute responsabilite en cas de dommages directs
                  ou indirects resultant de l'utilisation du site ou de l'impossibilite
                  d'y acceder.
                </p>
              </div>

              {/* Liens hypertextes */}
              <div>
                <h2 className="text-xl font-semibold text-navy">6. Liens hypertextes</h2>
                <p>
                  Le site peut contenir des liens vers des sites tiers. Alpha Center
                  n'exerce aucun controle sur le contenu de ces sites et decline toute
                  responsabilite quant a leur contenu ou aux eventuels dommages pouvant
                  resulter de leur consultation.
                </p>
              </div>

              {/* Modification des CGU */}
              <div>
                <h2 className="text-xl font-semibold text-navy">7. Modification des CGU</h2>
                <p>
                  Alpha Center se reserve le droit de modifier les presentes CGU a tout
                  moment. Les modifications entrent en vigueur des leur publication sur
                  le site. L'utilisateur est invite a consulter regulierement cette page.
                </p>
              </div>

              {/* Droit applicable */}
              <div>
                <h2 className="text-xl font-semibold text-navy">8. Droit applicable et juridiction</h2>
                <p>
                  Les presentes CGU sont soumises au droit camerounais. En cas de litige,
                  et apres tentative de resolution amiable, les tribunaux competents de
                  Yaounde seront seuls competents.
                </p>
              </div>

              {/* Date de mise a jour */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  {t('legal.cgu.lastUpdated')}
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

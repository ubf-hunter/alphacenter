import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function MentionsLegales() {
  const { t } = useTranslation('application');
  const { t: ts } = useTranslation('seo');

  return (
    <>
      <SEO
        title={ts('mentionsLegales.title')}
        description={ts('mentionsLegales.description')}
        url="/mentions-legales"
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
              {t('legal.mentionsLegales.heading')}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              {/* Editeur du site */}
              <div>
                <h2 className="text-xl font-semibold text-navy">1. Editeur du site</h2>
                <p>
                  Le site <strong>alphacenter.cm</strong> est edite par :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Raison sociale : <strong>Alpha Center</strong></li>
                  <li>Forme juridique : <strong>[A COMPLETER]</strong></li>
                  <li>Siege social : <strong>Yaounde, Cameroun</strong></li>
                  <li>Numero RCCM : <strong>[A COMPLETER]</strong></li>
                  <li>Numero de contribuable : <strong>[A COMPLETER]</strong></li>
                  <li>Telephone : <strong>+237 670 102 293</strong></li>
                  <li>Email : <strong>contact@alpha-center.cm</strong></li>
                </ul>
              </div>

              {/* Directeur de publication */}
              <div>
                <h2 className="text-xl font-semibold text-navy">2. Directeur de publication</h2>
                <p>
                  Le directeur de la publication est : <strong>[NOM DU DIRECTEUR - A COMPLETER]</strong>
                </p>
              </div>

              {/* Hebergement */}
              <div>
                <h2 className="text-xl font-semibold text-navy">3. Hebergement</h2>
                <p>Le site est heberge par :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nom : <strong>[NOM DE L'HEBERGEUR - A COMPLETER]</strong></li>
                  <li>Adresse : <strong>[ADRESSE - A COMPLETER]</strong></li>
                  <li>Telephone : <strong>[TELEPHONE - A COMPLETER]</strong></li>
                </ul>
              </div>

              {/* Propriete intellectuelle */}
              <div>
                <h2 className="text-xl font-semibold text-navy">4. Propriete intellectuelle</h2>
                <p>
                  L'ensemble du contenu du site alphacenter.cm (textes, images, logos,
                  videos, graphismes, icones) est la propriete exclusive d'Alpha Center
                  ou de ses partenaires et est protege par les lois camerounaises et
                  internationales relatives a la propriete intellectuelle.
                </p>
                <p>
                  Toute reproduction, representation, modification, publication ou
                  adaptation de tout ou partie des elements du site, quel que soit le
                  moyen ou le procede utilise, est interdite sans l'autorisation
                  ecrite prealable d'Alpha Center.
                </p>
              </div>

              {/* Credits */}
              <div>
                <h2 className="text-xl font-semibold text-navy">5. Credits</h2>
                <p>
                  Conception et developpement du site : <strong>[A COMPLETER]</strong>
                </p>
                <p>
                  Photographies : <strong>[A COMPLETER]</strong>
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-semibold text-navy">6. Contact</h2>
                <p>
                  Pour toute question relative aux mentions legales, vous pouvez nous
                  contacter a l'adresse : <strong>contact@alpha-center.cm</strong> ou
                  par telephone au <strong>+237 670 102 293</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

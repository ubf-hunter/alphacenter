import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Confidentialite() {
  const { t } = useTranslation('application');
  const { t: ts } = useTranslation('seo');

  return (
    <>
      <SEO
        title={ts('confidentialite.title')}
        description={ts('confidentialite.description')}
        url="/confidentialite"
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
              {t('legal.confidentialite.heading')}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              {/* Introduction */}
              <div>
                <p>
                  Alpha Center accorde une grande importance a la protection de vos
                  donnees personnelles. La presente politique de confidentialite vous
                  informe sur la maniere dont vos donnees sont collectees, utilisees
                  et protegees lorsque vous utilisez le site alphacenter.cm.
                </p>
              </div>

              {/* Donnees collectees */}
              <div>
                <h2 className="text-xl font-semibold text-navy">1. Donnees collectees</h2>
                <p>Nous collectons les donnees suivantes :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Formulaire de contact :</strong> nom, prenom, adresse email,
                    numero de telephone, message
                  </li>
                  <li>
                    <strong>Formulaire de candidature :</strong> nom, prenom, email,
                    telephone, niveau d'etudes, programme souhaite
                  </li>
                  <li>
                    <strong>Donnees de navigation :</strong> adresse IP, type de
                    navigateur, pages visitees, duree de visite (via Google Analytics)
                  </li>
                </ul>
              </div>

              {/* Finalite */}
              <div>
                <h2 className="text-xl font-semibold text-navy">2. Finalite de la collecte</h2>
                <p>Vos donnees sont collectees pour les finalites suivantes :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Repondre a vos demandes d'information</li>
                  <li>Traiter vos candidatures aux programmes de preparation</li>
                  <li>Vous contacter par telephone, email ou WhatsApp</li>
                  <li>Ameliorer notre site et nos services grace aux statistiques de navigation</li>
                </ul>
              </div>

              {/* Base legale */}
              <div>
                <h2 className="text-xl font-semibold text-navy">3. Base legale</h2>
                <p>
                  Le traitement de vos donnees repose sur votre consentement, exprime
                  lors de l'envoi d'un formulaire sur notre site, ainsi que sur l'interet
                  legitime d'Alpha Center a repondre a vos demandes et a ameliorer ses
                  services.
                </p>
              </div>

              {/* Google Analytics */}
              <div>
                <h2 className="text-xl font-semibold text-navy">4. Cookies et Google Analytics</h2>
                <p>
                  Le site utilise Google Analytics 4 pour analyser le trafic et
                  comprendre comment les visiteurs utilisent le site. Google Analytics
                  utilise des cookies pour collecter des informations de maniere anonyme,
                  notamment :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pages visitees et duree de visite</li>
                  <li>Source du trafic (moteur de recherche, lien direct, reseaux sociaux)</li>
                  <li>Type d'appareil et navigateur utilise</li>
                  <li>Localisation geographique approximative</li>
                </ul>
                <p>
                  Vous pouvez desactiver les cookies dans les parametres de votre
                  navigateur ou utiliser l'extension de navigateur Google Analytics
                  Opt-out.
                </p>
              </div>

              {/* Duree de conservation */}
              <div>
                <h2 className="text-xl font-semibold text-navy">5. Duree de conservation</h2>
                <p>
                  Vos donnees personnelles sont conservees pour une duree maximale
                  de <strong>[A COMPLETER - ex: 24 mois]</strong> a compter de leur
                  collecte, sauf obligation legale contraire.
                </p>
              </div>

              {/* Partage des donnees */}
              <div>
                <h2 className="text-xl font-semibold text-navy">6. Partage des donnees</h2>
                <p>
                  Vos donnees personnelles ne sont ni vendues, ni louees, ni cedees a
                  des tiers a des fins commerciales. Elles peuvent etre partagees
                  uniquement avec :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google (dans le cadre de Google Analytics)</li>
                  <li>Notre hebergeur (pour le fonctionnement technique du site)</li>
                </ul>
              </div>

              {/* Droits des utilisateurs */}
              <div>
                <h2 className="text-xl font-semibold text-navy">7. Vos droits</h2>
                <p>
                  Conformement a la reglementation en vigueur, vous disposez des droits
                  suivants concernant vos donnees personnelles :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Droit d'acces :</strong> obtenir la confirmation du traitement de vos donnees et en recevoir une copie</li>
                  <li><strong>Droit de rectification :</strong> demander la correction de donnees inexactes</li>
                  <li><strong>Droit de suppression :</strong> demander l'effacement de vos donnees</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos donnees</li>
                  <li><strong>Droit a la portabilite :</strong> recevoir vos donnees dans un format structure</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous a l'adresse :
                  <strong> contact@alpha-center.cm</strong>
                </p>
              </div>

              {/* Securite */}
              <div>
                <h2 className="text-xl font-semibold text-navy">8. Securite des donnees</h2>
                <p>
                  Alpha Center met en oeuvre les mesures techniques et
                  organisationnelles appropriees pour proteger vos donnees personnelles
                  contre tout acces non autorise, modification, divulgation ou
                  destruction.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-semibold text-navy">9. Contact</h2>
                <p>
                  Pour toute question relative a la protection de vos donnees
                  personnelles, vous pouvez nous contacter :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email : <strong>contact@alpha-center.cm</strong></li>
                  <li>Telephone : <strong>+237 670 102 293</strong></li>
                  <li>Adresse : <strong>Yaounde, Cameroun</strong></li>
                </ul>
              </div>

              {/* Date de mise a jour */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  {t('legal.confidentialite.lastUpdated')}
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

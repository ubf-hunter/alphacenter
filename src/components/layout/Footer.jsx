import { footerNavigation } from '@/data/navigation';
import logo from '@assets/logo.png';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="shrink-0 bg-navy-900 text-white pt-16 pb-8 mt-auto">
      <div className="container-alpha">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Alpha Center" className="h-12 w-auto" />
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Le centre de référence pour la préparation aux concours des
              grandes écoles d'ingénieurs au Cameroun depuis 2009.
            </p>
            <div className="flex gap-3">
              {footerNavigation.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-orange hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerNavigation.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Orientation</h3>
            <ul className="space-y-2">
              {footerNavigation.orientation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="shrink-0 mt-0.5 text-orange" />
                <span className="text-white/70">
                  {footerNavigation.contact.address}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={18} className="shrink-0 mt-0.5 text-orange" />
                <a
                  href={`tel:${footerNavigation.contact.phone}`}
                  className="text-white/70 hover:text-orange transition-colors"
                >
                  {footerNavigation.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={18} className="shrink-0 mt-0.5 text-orange" />
                <a
                  href={`mailto:${footerNavigation.contact.email}`}
                  className="text-white/70 hover:text-orange transition-colors"
                >
                  {footerNavigation.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; {currentYear} Alpha Center. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-6">
              {footerNavigation.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-white/50 hover:text-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

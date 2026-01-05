import { ctaButtons, mainNavigation } from '@/data/navigation';
import logo from '@assets/logo.png';
import {
  BarChart3,
  Building2,
  ChevronDown,
  GraduationCap,
  Lightbulb,
  Menu,
  Monitor,
  Target,
  Users,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Icon map for dynamic rendering
const iconMap = {
  Target,
  Building2,
  Monitor,
  Zap,
  Wrench,
  GraduationCap,
  Lightbulb,
  BarChart3,
  Users,
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  const getIcon = (iconName, size = 18) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6">
      <nav
        className={`
          mx-auto max-w-5xl flex items-center justify-between gap-4
          px-4 md:px-6 py-3 rounded-full transition-all duration-300
          ${
            isScrolled
              ? 'bg-white/50 backdrop-blur-xl shadow-lg shadow-navy/5 border border-gray-200/50'
              : 'bg-white/85  backdrop-blur-xl shadow-md shadow-navy/5 border border-white/60'
          }
        `}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Alpha Center" className="h-9 w-auto" />
        </Link>

        <div className="hidden xl:flex items-center gap-1">
          {mainNavigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {item.type === 'link' ? (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-navy bg-navy/8'
                        : 'text-gray-600 hover:text-navy hover:bg-navy/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <button
                  onClick={() => handleDropdownToggle(item.label)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeDropdown === item.label
                      ? 'text-navy bg-navy/8'
                      : 'text-gray-600 hover:text-navy hover:bg-navy/5'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              )}

              {item.type === 'dropdown' && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-navy/10 border border-gray-100 p-2">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-navy/5 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange">
                        {getIcon(subItem.icon, 20)}
                      </span>
                      <div>
                        <div className="font-semibold text-navy">
                          {subItem.label}
                        </div>
                        {subItem.description && (
                          <div className="text-sm text-gray-500">
                            {subItem.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {item.type === 'megamenu' && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-150 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-navy/10 border border-gray-100 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold text-navy mb-3">
                        <span className="w-6 h-6 rounded-lg bg-orange/10 flex items-center justify-center text-orange">
                          {getIcon(item.megamenu.metiers.titleIcon, 14)}
                        </span>
                        {item.megamenu.metiers.title}
                      </h3>
                      <div className="space-y-1">
                        {item.megamenu.metiers.items.map((metier) => (
                          <Link
                            key={metier.label}
                            to={metier.href}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-navy/5 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                              {getIcon(metier.icon, 16)}
                            </span>
                            <span className="text-sm font-medium text-navy">
                              {metier.label}
                            </span>
                          </Link>
                        ))}
                        <Link
                          to={item.megamenu.metiers.viewAll.href}
                          className="block p-2 text-sm font-semibold text-orange hover:text-orange-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.megamenu.metiers.viewAll.label} →
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold text-navy mb-3">
                        <span className="w-6 h-6 rounded-lg bg-orange/10 flex items-center justify-center text-orange">
                          {getIcon(item.megamenu.ecoles.titleIcon, 14)}
                        </span>
                        {item.megamenu.ecoles.title}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-semibold text-gray-400 mb-2">
                            Cameroun
                          </p>
                          <div className="space-y-1">
                            {item.megamenu.ecoles.cameroun.map((ecole) => (
                              <Link
                                key={ecole.label}
                                to={ecole.href}
                                className="block p-2 rounded-lg text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {ecole.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 mb-2">
                            Étranger
                          </p>
                          <div className="space-y-1">
                            {item.megamenu.ecoles.etranger.map((ecole) => (
                              <Link
                                key={ecole.label}
                                to={ecole.href}
                                className="block p-2 rounded-lg text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {ecole.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                        {item.megamenu.ecoles.viewAll && (
                          <Link
                            to={item.megamenu.ecoles.viewAll.href}
                            className="block p-2 text-sm font-semibold text-orange hover:text-orange-600 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.megamenu.ecoles.viewAll.label} →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  <Link
                    to={item.megamenu.cta.href}
                    className="mt-4 flex items-center gap-3 p-4 bg-apricot-light rounded-xl hover:bg-apricot transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center text-orange">
                      {getIcon(item.megamenu.cta.icon, 20)}
                    </span>
                    <div>
                      <p className="font-semibold text-navy">
                        {item.megamenu.cta.text}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.megamenu.cta.subtext}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-2">
          {ctaButtons.map((btn) => (
            <Link
              key={btn.label}
              to={btn.href}
              className={`
                px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200
                ${
                  btn.variant === 'primary'
                    ? 'bg-orange text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange/25 hover:-translate-y-0.5'
                    : 'text-navy border border-gray-200 hover:border-navy hover:bg-navy/5'
                }
              `}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMobileMenu}
          className="xl:hidden p-2 text-navy hover:bg-navy/5 rounded-full transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="xl:hidden mt-3 mx-auto max-w-5xl bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-xl shadow-navy/10 overflow-hidden">
          <div className="p-4">
            <nav className="space-y-1">
              {mainNavigation.map((item) => (
                <div key={item.label}>
                  {item.type === 'link' ? (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-navy bg-navy/8'
                            : 'text-gray-600 hover:text-navy hover:bg-navy/5'
                        }`
                      }
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDropdownToggle(item.label);
                        }}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-navy hover:bg-navy/5 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && item.items && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="flex items-center gap-2 py-2 text-sm text-gray-500 hover:text-navy transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              <span className="text-orange">
                                {getIcon(subItem.icon, 16)}
                              </span>
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                      {activeDropdown === item.label && item.megamenu && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                          {item.megamenu.metiers.items.map((metier) => (
                            <Link
                              key={metier.label}
                              to={metier.href}
                              className="flex items-center gap-2 py-2 text-sm text-gray-500 hover:text-navy transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              <span className="text-navy">
                                {getIcon(metier.icon, 16)}
                              </span>
                              {metier.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
              {ctaButtons.map((btn) => (
                <Link
                  key={btn.label}
                  to={btn.href}
                  onClick={toggleMobileMenu}
                  className={`
                    w-full px-4 py-3 text-sm font-semibold rounded-full text-center transition-all
                    ${
                      btn.variant === 'primary'
                        ? 'bg-orange text-white hover:bg-orange-600'
                        : 'text-navy border border-gray-200 hover:border-navy'
                    }
                  `}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

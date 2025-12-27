// ============================================
// SECTION TITLE - VERSION AVEC MOT ACCENT
// Support pour titre avec mot clé stylisé
// ============================================

import Badge from './Badge';

/**
 * SectionTitle avec support pour mot accent
 *
 * Usage simple (sans accent):
 * <SectionTitle title="Mon titre normal" />
 *
 * Usage avec accent (méthode 1 - prop séparée):
 * <SectionTitle
 *   title="Des programmes adaptés"
 *   accentWord="à chaque concours"
 * />
 * Résultat: "Des programmes adaptés à chaque concours"
 *                                    ^^^^^^^^^^^^^^^^ (orange italique)
 *
 * Usage avec accent (méthode 2 - marqueur dans le titre):
 * <SectionTitle title="Des programmes *adaptés* à chaque concours" />
 * Résultat: "Des programmes adaptés à chaque concours"
 *                          ^^^^^^^^ (orange italique)
 *
 * Usage avec accent (méthode 3 - position personnalisée):
 * <SectionTitle
 *   titleStart="Intègre l'école d'"
 *   accentWord="ingénieurs"
 *   titleEnd="de tes rêves"
 * />
 */

export default function SectionTitle({
  badge,
  title,
  // Méthode 1: Mot accent ajouté à la fin
  accentWord,
  // Méthode 3: Contrôle total de la position
  titleStart,
  titleEnd,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const containerClasses = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };

  // Fonction pour parser le titre avec marqueur *mot*
  const parseTitle = (text) => {
    if (!text) return null;

    // Cherche le pattern *mot* dans le titre
    const regex = /\*([^*]+)\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Texte avant le match
      if (match.index > lastIndex) {
        parts.push({
          type: 'normal',
          text: text.slice(lastIndex, match.index),
        });
      }
      // Le mot en accent
      parts.push({
        type: 'accent',
        text: match[1],
      });
      lastIndex = match.index + match[0].length;
    }

    // Texte restant après le dernier match
    if (lastIndex < text.length) {
      parts.push({
        type: 'normal',
        text: text.slice(lastIndex),
      });
    }

    // Si aucun match trouvé, retourne le texte normal
    if (parts.length === 0) {
      return [{ type: 'normal', text }];
    }

    return parts;
  };

  // Rendu du titre
  const renderTitle = () => {
    // Méthode 3: titleStart + accentWord + titleEnd
    if (titleStart !== undefined || titleEnd !== undefined) {
      return (
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-navy ${alignClasses[align]} leading-tight`}
        >
          {titleStart && <span>{titleStart}</span>}
          {accentWord && (
            <span className="font-accent italic text-orange">
              {' '}
              {accentWord}
            </span>
          )}
          {titleEnd && <span> {titleEnd}</span>}
        </h2>
      );
    }

    // Méthode 2: Parse le titre pour trouver *mot*
    if (title && title.includes('*')) {
      const parts = parseTitle(title);
      return (
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-black text-navy ${alignClasses[align]} leading-tight`}
        >
          {parts.map((part, index) =>
            part.type === 'accent' ? (
              <span key={index} className="font-accent italic text-orange">
                {part.text}
              </span>
            ) : (
              <span key={index}>{part.text}</span>
            )
          )}
        </h2>
      );
    }

    // Méthode 1: title + accentWord à la fin
    if (title && accentWord) {
      return (
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-navy ${alignClasses[align]} leading-tight`}
        >
          <span>{title} </span>
          <span className="font-accent italic text-orange">{accentWord}</span>
        </h2>
      );
    }

    // Titre simple sans accent
    return (
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold text-navy ${alignClasses[align]} leading-tight`}
      >
        {title}
      </h2>
    );
  };

  return (
    <div
      className={`flex flex-col gap-4 ${containerClasses[align]} ${className}`}
    >
      {badge && <Badge variant="primary">{badge}</Badge>}

      {(title || titleStart || accentWord) && renderTitle()}

      {subtitle && (
        <p className={`text-lg text-gray-600 max-w-2xl ${alignClasses[align]}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

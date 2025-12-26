# DESIGN REFERENCES - ALPHA CENTER

> Ce fichier complète CLAUDE_INSTRUCTIONS.md avec les références visuelles spécifiques.
> Claude Code doit lire ce fichier pour comprendre le style visuel exact attendu.

---

## 🎯 STYLE VISUEL CIBLE

Le design d'Alpha Center doit s'inspirer des tendances modernes suivantes :
- **Fond immersif** avec image/illustration en arrière-plan
- **Glassmorphism prononcé** avec vraies cards transparentes
- **Navigation épurée** style pill/capsule
- **Typographie élégante** avec mix de fonts
- **Éléments flottants** qui créent de la profondeur
- **Design très aéré** avec beaucoup d'espace

---

## 🖼️ HERO SECTION - NOUVEAU STYLE

### Structure visuelle

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ GLASS NAVBAR (pill shape, flottante)                                │   │
│  │                                                                      │   │
│  │  [LOGO]    [Accueil] [Programmes] [Orientation▼] [À propos▼]        │   │
│  │                                              [Contact] [S'inscrire]  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│                                                                             │
│                    ┌────────────────────────┐                               │
│                    │ 🏆 +500 admis depuis   │  ← Badge glass pill          │
│                    │    2009                │                               │
│                    └────────────────────────┘                               │
│                                                                             │
│                                                                             │
│              Intègre l'école d'_ingénieurs_                                │
│                  de tes rêves.                                              │
│                        ↑                                                    │
│              (H1 avec mot en italique/accent orange)                       │
│                                                                             │
│         Préparation intensive aux concours ENSP, ENSTP,                    │
│           ENS et grandes écoles d'ingénieurs.                              │
│                                                                             │
│                                                                             │
│              ┌──────────────────┐  ┌───────────────────┐                   │
│              │  Je m'inscris →  │  │ Voir les          │                   │
│              │  (primary pill)  │  │ programmes        │                   │
│              └──────────────────┘  └───────────────────┘                   │
│                                                                             │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                      │   │
│  │    ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐  │   │
│  │    │  500+    │     │   95%    │     │   15+    │     │   50+    │  │   │
│  │    │  Admis   │     │ Réussite │     │  Années  │     │  Profs   │  │   │
│  │    └──────────┘     └──────────┘     └──────────┘     └──────────┘  │   │
│  │                                                                      │   │
│  │    GLASS STATS BAR (flottante en bas du hero)                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════   │
│  BACKGROUND: Image/Illustration de campus, étudiants, ou ciel avec nuages  │
│  avec overlay gradient léger pour lisibilité du texte                      │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Code CSS du nouveau Hero

```css
/* Hero avec fond immersif */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
}

/* Image de fond */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: -2;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay gradient pour lisibilité */
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0.85) 100%
  );
}

/* Alternative: fond avec illustration/nuages */
.hero-cloud-bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  background: 
    url('/images/clouds-bg.png') center/cover,
    linear-gradient(180deg, #E8F4FD 0%, #FFFFFF 100%);
}
```

---

## 🧭 NAVIGATION - NOUVEAU STYLE

### Style Pill/Capsule flottant

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│            ┌─────────────────────────────────────────────────────┐          │
│            │                                                     │          │
│            │  [LOGO]  Accueil  Programmes  Orientation  À propos │          │
│            │                                                     │          │
│            │                           [Contact]  [S'inscrire]   │          │
│            │                            outline      filled      │          │
│            │                                                     │          │
│            └─────────────────────────────────────────────────────┘          │
│                          ↑                                                  │
│                 Glass pill navbar                                           │
│                 Flotte au-dessus du contenu                                │
│                 Ombre douce                                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Code CSS Navbar

```css
/* Navbar flottante style pill */
.navbar {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  padding: 0.75rem 1.5rem;
  
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 9999px; /* Full rounded = pill */
  
  box-shadow: 
    0 4px 24px rgba(0, 26, 81, 0.08),
    0 1px 2px rgba(0, 26, 81, 0.04);
}

/* Nav links */
.nav-link {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #334155;
  border-radius: 9999px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: rgba(0, 26, 81, 0.05);
  color: #001A51;
}

.nav-link.active {
  background: rgba(0, 26, 81, 0.08);
  color: #001A51;
}

/* CTA Buttons dans navbar */
.nav-btn-ghost {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #001A51;
  border: 1px solid #E2E8F0;
  border-radius: 9999px;
  transition: all 0.2s ease;
}

.nav-btn-ghost:hover {
  border-color: #001A51;
  background: rgba(0, 26, 81, 0.05);
}

.nav-btn-primary {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background: #FA5614;
  border-radius: 9999px;
  transition: all 0.2s ease;
}

.nav-btn-primary:hover {
  background: #D94400;
  box-shadow: 0 4px 12px rgba(250, 86, 20, 0.3);
}
```

---

## 🃏 CARDS - NOUVEAU STYLE GLASS

### Glass Card flottante

```css
/* Glass card vraiment transparente */
.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  
  padding: 2rem;
  
  box-shadow: 
    0 8px 32px rgba(0, 26, 81, 0.08),
    0 2px 8px rgba(0, 26, 81, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.75);
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px rgba(0, 26, 81, 0.12),
    0 8px 16px rgba(0, 26, 81, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

/* Stats card dans le hero */
.stats-bar {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 2rem;
  
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  
  box-shadow: 0 8px 32px rgba(0, 26, 81, 0.1);
}

.stat-item {
  text-align: center;
  padding: 0 1.5rem;
  border-right: 1px solid rgba(0, 26, 81, 0.1);
}

.stat-item:last-child {
  border-right: none;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #001A51;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748B;
  margin-top: 0.25rem;
}
```

---

## ✍️ TYPOGRAPHIE - NOUVEAU STYLE

### Mix Serif + Sans-serif avec accent

```css
/* Font principale - Corps */
body {
  font-family: 'Inter', system-ui, sans-serif;
}

/* Font display - Titres */
h1, h2, h3 {
  font-family: 'Poppins', system-ui, sans-serif;
}

/* Style pour mot en accent (italique ou couleur) */
.text-accent {
  font-style: italic;
  color: #FA5614;
}

/* OU avec une font serif pour le mot accent */
.text-accent-serif {
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

/* Exemple d'utilisation dans le H1 */
/*
  <h1>
    Intègre l'école d'<span class="text-accent">ingénieurs</span>
    de tes rêves.
  </h1>
*/
```

### Exemples de titres

```
OPTION 1 - Mot en italique orange:
"Intègre l'école d'𝘪𝘯𝘨é𝘯𝘪𝘦𝘶𝘳𝘴 de tes rêves."
                    ↑ italique + orange

OPTION 2 - Mot en serif italique:
"Intègre l'école d'𝑖𝑛𝑔é𝑛𝑖𝑒𝑢𝑟𝑠 de tes rêves."
                    ↑ Playfair Display italic

OPTION 3 - Emoji/Icône dans le titre:
"Intègre l'école 🎓 d'ingénieurs de tes rêves."
```

---

## 🖼️ BACKGROUNDS SUGGÉRÉS

### Option 1 : Photo de campus/étudiants

```
- Photo d'étudiants qui célèbrent
- Photo de campus universitaire
- Photo de remise de diplômes
- Avec overlay blanc 70-80% pour lisibilité
```

### Option 2 : Illustration style nuages/ciel (recommandé)

```
- Ciel bleu avec nuages blancs
- Style optimiste et lumineux
- Donne une impression d'élévation, de rêve
- Parfait pour "atteindre ses rêves"
```

### Option 3 : Gradient abstrait

```
- Gradient doux bleu clair → blanc
- Formes abstraites floues (blobs)
- Plus simple à implémenter
- Moderne et épuré
```

### Code pour fond nuages

```css
/* Option avec image de nuages */
.hero-bg-clouds {
  background: 
    url('/images/clouds-sky.jpg') center top / cover no-repeat,
    linear-gradient(180deg, #E8F4FD 0%, #FFFFFF 100%);
}

/* Option avec gradient + blobs */
.hero-bg-gradient {
  background: linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 50%, #FFF8F5 100%);
  position: relative;
}

.hero-bg-gradient::before {
  content: '';
  position: absolute;
  top: 10%;
  right: 10%;
  width: 400px;
  height: 400px;
  background: rgba(250, 86, 20, 0.08);
  border-radius: 50%;
  filter: blur(80px);
}

.hero-bg-gradient::after {
  content: '';
  position: absolute;
  bottom: 20%;
  left: 5%;
  width: 300px;
  height: 300px;
  background: rgba(0, 26, 81, 0.06);
  border-radius: 50%;
  filter: blur(60px);
}
```

---

## 📱 APP PREVIEW FLOTTANTE

### Comme dans les références (Afternoon, Frameblox)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        Révise partout avec                                  │
│                      l'application 𝘈𝘭𝘱𝘩𝘢                                    │
│                                                                             │
│              Ton compagnon de révision disponible                           │
│                   24h/24, même sans connexion.                              │
│                                                                             │
│              [App Store]    [Google Play]                                   │
│                                                                             │
│                                                                             │
│           ┌─────────────────────────────────────────┐                       │
│           │  ┌─────────────────────────────────┐   │                       │
│           │  │                                 │   │                       │
│           │  │      📱 MOCKUP APP              │   │ ← Phone frame         │
│           │  │                                 │   │                       │
│           │  │      Dashboard preview          │   │                       │
│           │  │      ou écran de l'app          │   │                       │
│           │  │                                 │   │                       │
│           │  │      Glass effect sur           │   │                       │
│           │  │      l'écran                    │   │                       │
│           │  │                                 │   │                       │
│           │  └─────────────────────────────────┘   │                       │
│           └─────────────────────────────────────────┘                       │
│                          ↑                                                  │
│                 Flotte avec ombre portée                                   │
│                 Légère rotation 3D optionnelle                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 PALETTE MISE À JOUR

### Couleurs principales (inchangées)

```
Navy:    #001A51 (textes, éléments principaux)
Orange:  #FA5614 (CTA, accents)
White:   #FFFFFF (fond principal)
```

### Nouvelles couleurs pour le style aéré

```
Sky Blue Light:   #F0F7FF (fond hero subtle)
Cloud White:      #F8FAFC (sections alternées)
Soft Orange BG:   #FFF8F5 (section orientation)
Glass White:      rgba(255, 255, 255, 0.6-0.8) (cards)
Shadow Navy:      rgba(0, 26, 81, 0.08-0.12) (ombres)
```

---

## ✅ CHECKLIST NOUVEAU STYLE

Pour que le design corresponde aux références, vérifier :

- [ ] **Hero** : Fond immersif (image/gradient/nuages), pas juste blanc
- [ ] **Navbar** : Style pill flottante, pas rectangulaire collée en haut
- [ ] **Cards** : Vraiment transparentes avec blur visible
- [ ] **Typographie** : Au moins un mot en accent (italique ou couleur) dans le H1
- [ ] **Stats** : Barre glass flottante, pas juste des cards séparées
- [ ] **Espacement** : Beaucoup d'espace, design aéré
- [ ] **Ombres** : Douces et diffuses, pas dures
- [ ] **Hover** : Animations subtiles (lift, glow)

---

## 🚀 PROMPT POUR CLAUDE CODE

Utilise ce prompt pour que Claude Code génère le nouveau style :

```
Lis les fichiers CLAUDE_INSTRUCTIONS.md et DESIGN_REFERENCES.md.

Le style actuel ne me plaît pas. Je veux un design plus moderne inspiré par :
- Fonds immersifs (gradient ciel/nuages, pas juste blanc)
- Navbar flottante style pill (border-radius full)
- Glass cards vraiment transparentes avec backdrop-blur visible
- Typographie avec mot en accent (italique orange ou serif)
- Stats bar glass flottante en bas du hero
- Design très aéré avec beaucoup d'espace

Refais le Header et le Hero avec ce nouveau style :

1. Header.jsx :
   - Navbar pill flottante (position fixed, top: 1.5rem, left: 50%, transform)
   - Background glass rgba(255,255,255,0.8) avec backdrop-blur
   - Border-radius full (9999px)
   - Liens en pill shape au hover
   - CTAs: Contact (outline pill) + S'inscrire (filled orange pill)

2. Hero.jsx :
   - Fond avec gradient ciel (#F0F7FF → #FFFFFF → #FFF8F5) + blobs décoratifs
   - Badge pill glass en haut
   - H1 avec le mot "ingénieurs" en italique et orange
   - Deux CTAs en pill shape
   - Stats bar glass en bas qui flotte
   - Beaucoup d'espace vertical (min-h-screen)

Assure-toi que le backdrop-filter fonctionne et que les cards sont vraiment transparentes.
```

---

## 📁 IMAGES À PRÉVOIR

Pour le nouveau style, tu auras besoin de :

```
/public/images/
├── backgrounds/
│   ├── hero-clouds.jpg       (ciel avec nuages)
│   ├── hero-gradient.svg     (gradient abstrait)
│   └── hero-campus.jpg       (photo campus - optionnel)
│
├── app/
│   ├── phone-mockup.png      (frame iPhone/Android)
│   └── app-screenshot.png    (capture écran app Alpha)
│
└── decorative/
    ├── blob-orange.svg
    └── blob-navy.svg
```

---

**Ce fichier doit être placé à côté de CLAUDE_INSTRUCTIONS.md à la racine du projet.**

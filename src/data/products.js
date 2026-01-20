// ============================================
// PRODUCTS - Bibliotheque de ressources Alpha
// Donnees des documents en vente (version imprimee uniquement)
// ============================================

import { BookOpen, GraduationCap } from 'lucide-react';

// ===== CATEGORIES =====
export const categories = [
  {
    id: 'prepa',
    name: 'Documents Prepa',
    shortName: 'Prepa',
    icon: GraduationCap,
    description: 'Documents pour preparer les concours',
    color: 'orange',
  },
  {
    id: 'terminale',
    name: 'Bords Terminale',
    shortName: 'Terminale',
    icon: BookOpen,
    description: 'Fascicules pour reussir le Bac',
    color: 'blue',
  },
];

// ===== DOCUMENTS PREPA =====
export const prepaDocuments = [
  {
    id: 'prepa-doc-1',
    slug: 'document-prepa-1',
    name: 'Document Prepa 1',
    categoryId: 'prepa',
    category: 'Prepa Concours',
    description: 'Description du document prepa 1. A personnaliser selon le contenu reel.',
    highlights: [
      'Point fort 1 du document',
      'Point fort 2 du document',
      'Point fort 3 du document',
    ],
    // Images du produit (l'utilisateur fournira les vraies images)
    images: [
      '/images/products/prepa-doc-1-cover.jpg',
      '/images/products/prepa-doc-1-inside.jpg',
    ],
    icon: GraduationCap,
    pages: null, // A renseigner
    price: 0, // A renseigner (prix en FCFA)
    color: 'orange',
    bestseller: false,
    isNew: false,
  },
  {
    id: 'prepa-doc-2',
    slug: 'document-prepa-2',
    name: 'Document Prepa 2',
    categoryId: 'prepa',
    category: 'Prepa Concours',
    description: 'Description du document prepa 2. A personnaliser selon le contenu reel.',
    highlights: [
      'Point fort 1 du document',
      'Point fort 2 du document',
      'Point fort 3 du document',
    ],
    images: [
      '/images/products/prepa-doc-2-cover.jpg',
      '/images/products/prepa-doc-2-inside.jpg',
    ],
    icon: GraduationCap,
    pages: null,
    price: 0,
    color: 'orange',
    bestseller: false,
    isNew: false,
  },
  {
    id: 'prepa-doc-3',
    slug: 'document-prepa-3',
    name: 'Document Prepa 3',
    categoryId: 'prepa',
    category: 'Prepa Concours',
    description: 'Description du document prepa 3. A personnaliser selon le contenu reel.',
    highlights: [
      'Point fort 1 du document',
      'Point fort 2 du document',
      'Point fort 3 du document',
    ],
    images: [
      '/images/products/prepa-doc-3-cover.jpg',
      '/images/products/prepa-doc-3-inside.jpg',
    ],
    icon: GraduationCap,
    pages: null,
    price: 0,
    color: 'orange',
    bestseller: false,
    isNew: false,
  },
  {
    id: 'prepa-doc-4',
    slug: 'document-prepa-4',
    name: 'Document Prepa 4',
    categoryId: 'prepa',
    category: 'Prepa Concours',
    description: 'Description du document prepa 4. A personnaliser selon le contenu reel.',
    highlights: [
      'Point fort 1 du document',
      'Point fort 2 du document',
      'Point fort 3 du document',
    ],
    images: [
      '/images/products/prepa-doc-4-cover.jpg',
      '/images/products/prepa-doc-4-inside.jpg',
    ],
    icon: GraduationCap,
    pages: null,
    price: 0,
    color: 'orange',
    bestseller: false,
    isNew: false,
  },
];

// ===== DOCUMENTS TERMINALE =====
export const terminaleDocuments = [
  {
    id: 'alpha-maths-tle-c',
    slug: 'alpha-mathematiques-terminale-c',
    name: "L'Alpha en Mathematiques - Terminale C",
    categoryId: 'terminale',
    category: 'Terminale C',
    description:
      'Fascicule complet de mathematiques pour la Terminale C. Cours resumes, exercices corriges et problemes type Bac.',
    highlights: [
      'Cours resumes par chapitre',
      'Exercices corriges progressifs',
      'Problemes type Baccalaureat',
      'Formulaire complet',
    ],
    images: [
      '/images/products/alpha-maths-tle-c-cover.jpg',
      '/images/products/alpha-maths-tle-c-inside.jpg',
    ],
    icon: BookOpen,
    pages: null,
    price: 7500,
    color: 'blue',
    bestseller: true,
    isNew: false,
  },
  {
    id: 'alpha-maths-tle-d',
    slug: 'alpha-mathematiques-terminale-d',
    name: "L'Alpha en Mathematiques - Terminale D",
    categoryId: 'terminale',
    category: 'Terminale D',
    description:
      'Fascicule complet de mathematiques pour la Terminale D. Cours resumes, exercices corriges et problemes type Bac.',
    highlights: [
      'Cours resumes par chapitre',
      'Exercices corriges progressifs',
      'Problemes type Baccalaureat',
      'Formulaire complet',
    ],
    images: [
      '/images/products/alpha-maths-tle-d-cover.jpg',
      '/images/products/alpha-maths-tle-d-inside.jpg',
    ],
    icon: BookOpen,
    pages: null,
    price: 6500,
    color: 'blue',
    bestseller: true,
    isNew: false,
  },
];

// ===== EXPORT COMBINE =====
export const allProducts = [...prepaDocuments, ...terminaleDocuments];

// ===== HELPERS =====
export const getProductBySlug = (slug) => {
  return allProducts.find((product) => product.slug === slug);
};

export const getProductById = (id) => {
  return allProducts.find((product) => product.id === id);
};

export const getProductsByCategory = (categoryId) => {
  return allProducts.filter((product) => product.categoryId === categoryId);
};

export const getBestsellers = () => {
  return allProducts.filter((product) => product.bestseller);
};

export const getNewProducts = () => {
  return allProducts.filter((product) => product.isNew);
};

export const getCategoryById = (categoryId) => {
  return categories.find((cat) => cat.id === categoryId);
};

export default allProducts;

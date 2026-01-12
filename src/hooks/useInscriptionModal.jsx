// ============================================
// USE INSCRIPTION MODAL - Hook pour gerer le modal d'inscription
// ============================================

import { createContext, useContext, useState } from 'react';

const InscriptionModalContext = createContext(null);

export function InscriptionModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState(null);

  const openModal = (programId = null) => {
    setPreselectedProgram(programId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPreselectedProgram(null);
  };

  return (
    <InscriptionModalContext.Provider
      value={{ isOpen, openModal, closeModal, preselectedProgram }}
    >
      {children}
    </InscriptionModalContext.Provider>
  );
}

export function useInscriptionModal() {
  const context = useContext(InscriptionModalContext);
  if (!context) {
    throw new Error(
      'useInscriptionModal must be used within an InscriptionModalProvider'
    );
  }
  return context;
}

export default useInscriptionModal;

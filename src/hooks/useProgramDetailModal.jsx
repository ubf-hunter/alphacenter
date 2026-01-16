// ============================================
// PROGRAM DETAIL MODAL HOOK
// Gère l'état de la modal de détails programme
// ============================================

import { createContext, useCallback, useContext, useState } from 'react';

const ProgramDetailModalContext = createContext(null);

export function ProgramDetailModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openModal = useCallback((program) => {
    setSelectedProgram(program);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Delay clearing program to allow exit animation
    setTimeout(() => setSelectedProgram(null), 300);
  }, []);

  return (
    <ProgramDetailModalContext.Provider
      value={{ isOpen, selectedProgram, openModal, closeModal }}
    >
      {children}
    </ProgramDetailModalContext.Provider>
  );
}

export function useProgramDetailModal() {
  const context = useContext(ProgramDetailModalContext);
  if (!context) {
    throw new Error(
      'useProgramDetailModal must be used within a ProgramDetailModalProvider'
    );
  }
  return context;
}

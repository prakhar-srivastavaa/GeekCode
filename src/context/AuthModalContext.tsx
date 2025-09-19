import React, { createContext, useContext, useState } from 'react';

type AuthModalType = 'login' | 'register' | 'forgotPassword';

type AuthModalContextType = {
  isOpen: boolean;
  type: AuthModalType;
  openModal: (type: AuthModalType) => void;
  closeModal: () => void;
};

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export const AuthModalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<AuthModalType>('login');

  const openModal = (modalType: AuthModalType) => {
    setType(modalType);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AuthModalContext.Provider value={{ isOpen, type, openModal, closeModal }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
};
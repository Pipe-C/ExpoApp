import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  isRegistered: boolean;
  completeOnboarding: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const completeOnboarding = () => {
    setIsRegistered(true);
    console.log('Onboarding completado');
  };

  return (
    <AppContext.Provider value={{ isRegistered, completeOnboarding }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};
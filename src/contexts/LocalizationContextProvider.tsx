'use client';
import { createContext, ReactNode, useContext } from 'react';

interface LocalizationContextProps {
  messages: any;
  locale: string;
}

const LocalizationContext = createContext<LocalizationContextProps | null>(null);

export const LocalizationProvider = ({ children, messages, locale }: { children: ReactNode, messages: any, locale: string }) => {
  return (
    <LocalizationContext.Provider value={{ messages, locale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

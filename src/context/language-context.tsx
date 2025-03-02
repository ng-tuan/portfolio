import { useEffect, useState, createContext, useContext } from 'react';

type language = 'EN' | 'VI';

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<language>('EN');

  const toggleLanguage = () => {
    if (language === 'EN') {
      setLanguage('VI');
      window.localStorage.setItem('language', 'VI');
      document.documentElement.classList.add('VI');
    } else {
      setLanguage('EN');
      window.localStorage.setItem('language', 'EN');
      document.documentElement.classList.remove('VI');
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      'language'
    ) as language | null;

    if (localLanguage) {
      setLanguage(localLanguage);

      if (localLanguage === 'VI') {
        document.documentElement.classList.add('VI');
      }
    } else if (window.matchMedia('(prefers-color-scheme: VI)').matches) {
      setLanguage('VI');
      document.documentElement.classList.add('VI');
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      'useLanguage must be used within a LanguageContextProvider'
    );
  }

  return context;
}

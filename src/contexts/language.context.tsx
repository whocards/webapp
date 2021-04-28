import React, {
  Context,
  createContext,
  PropsWithChildren,
  useState,
} from 'react';
import LANGUAGES from 'data/languages.json'
import * as Storage from 'modules/Storage';

const keys = Object.keys(LANGUAGES)
export type Language = typeof keys[number]

interface ContextProps {
  language: Language;
  setLanguage: Function
}

const defaultPros: ContextProps = {
  language: Storage.getDefaultLanguage() as Language,
  setLanguage: () => {},
}

// set the defaults
export const LanguageContext: Context<ContextProps> = createContext(defaultPros)

export const LanguageProvider = ({children}: PropsWithChildren<any>) => {
  const [language, languageChange] = useState(Storage.getDefaultLanguage())

  const provider: ContextProps = {
    language,
    setLanguage: (newLanguage: string) => {
      if (newLanguage in LANGUAGES) {
        Storage.setStoredLanguage(newLanguage)
        languageChange(newLanguage)
      }
    }
  }

  return (
    <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>
  )
}

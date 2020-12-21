import React, {
  Context,
  Dispatch,
  SetStateAction,
} from 'react';

interface IContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

// set the defaults
const LanguageContext: Context<IContextProps> = React.createContext({} as IContextProps)

// @ts-ignore
export default LanguageContext

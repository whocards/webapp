import React, {
  Context,
  Dispatch,
  SetStateAction,
} from 'react';

interface IContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const defaultPros: IContextProps = {
  language: 'en',
  setLanguage: () => {},
}

// set the defaults
const LanguageContext: Context<IContextProps> = React.createContext(defaultPros)

// @ts-ignore
export default LanguageContext

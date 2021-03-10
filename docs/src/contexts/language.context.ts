import React, {
  Context,
  Dispatch,
  SetStateAction,
} from 'react';
import { getDefaultLanguage } from '../helpers';

interface IContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const defaultPros: IContextProps = {
  language: getDefaultLanguage(),
  setLanguage: () => {},
}

// set the defaults
const LanguageContext: Context<IContextProps> = React.createContext(defaultPros)

// @ts-ignore
export default LanguageContext

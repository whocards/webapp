import LANGUAGES from 'data/languages.json'

const KEY = 'whocards'

const Keys = ['language', 'name', 'email']
interface IStorage {
  language: string
  name?: string
  email?: string
}

const defaultLanguage = 'en'
const defaultStorage: IStorage = {
  language: defaultLanguage,
}

const getStorage = (): IStorage => {
  const stored = localStorage.getItem(KEY)

  return stored ? (JSON.parse(stored) as IStorage) : defaultStorage
}

const setStorage = (key: string, value: string | number): IStorage => {
  const values = getStorage()
  // @ts-ignore
  values[key] = value
  localStorage.setItem(KEY, JSON.stringify(values))

  return values
}

export const setStoredLanguage = (value: string) =>
  setStorage('language', value)

const isValidLanguage = (language: string) => language && language in LANGUAGES

export const getDefaultLanguage = (): string => {
  let { language } = getStorage()
  if (language && isValidLanguage(language)) {
    return language
  }
  language = window.navigator.language
  language = language.startsWith('en') ? language.split('-')[0] : language
  if (!isValidLanguage(language)) {
    language = defaultLanguage
  }
  setStoredLanguage(language)
  return language
}

export const LocalStorage = {
  get: (key: string) => {
    return Keys.includes(key) ? getStorage()[key as keyof IStorage] : undefined
  },
  set: (key: string, value: string | number) => {
    if (Keys.includes(key)) {
      setStorage(key, value)
    }
  },
}

import LANGUAGES from 'data/languages.json'

const KEY = 'whocards'

interface Storage {
	language: string;
}

const defaultLanguage = 'en'
const defaultStorage: Storage = {
	language: defaultLanguage
}

const getStorage = (): Storage => {
	const stored = localStorage.getItem(KEY)

	return stored ? JSON.parse(stored) as Storage : defaultStorage
}

const setStorage = (key: string, value: string | number): Storage => {
	const values = getStorage()
	// @ts-ignore
	values[key] = value
	localStorage.setItem(KEY, JSON.stringify(values))

	return values
}

export const setStoredLanguage = (value: string) => setStorage('language', value)

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

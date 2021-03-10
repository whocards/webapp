const KEY = 'whocards'

interface Storage {
	language: string;
}

const defaultStorage: Storage = {
	language: 'en'
}

export const getStorage = (): Storage =>
	JSON.parse(localStorage.getItem(KEY) || '{}') as Storage

export const setStorage = (key: string, value: string | number): Storage => {
	const values = getStorage()
	// @ts-ignore
	values[key] = value
	localStorage.setItem(KEY, JSON.stringify(values))

	return values
}

export const setStoredLanguage = (value: string) => setStorage('language', value)
import {
	getStorage,
	setStorage,
} from './modules/Storage';

export const randomNumber = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min)

export const getDefaultLanguage = (): string => {
	let language = getStorage().language
	if (language) {
		return language
	}
	language = window.navigator.language
	language = language.startsWith('en') ? language.split('-')[0] : language
	// TODO add check if supported language
	setStorage('language', language)
	return language
}

export const randomList = (min: number, max: number): number[] => {
	// create full list
	const array = Array(max - min + 1).fill(0).map((_, idx) => min + idx)

	// randomize
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array
}

export const isTouchDevice = (): boolean => 'ontouchstart' in window

export const titleize = (str: string): string => str[0].toUpperCase() + str.slice(1).toLowerCase()

export const encode = (data: any) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}
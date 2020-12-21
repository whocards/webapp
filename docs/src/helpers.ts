export const randomNumber = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min)


export const getDefaultLanguage = (): string => {
	const language = window.navigator.language
	return language.startsWith('en') ? language.split('-')[0] : language
}

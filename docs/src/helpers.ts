export const randomNumber = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min)

export const getDefaultLanguage = (): string => {
	const language = window.navigator.language
	return language.startsWith('en') ? language.split('-')[0] : language
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
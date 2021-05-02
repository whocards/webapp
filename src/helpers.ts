export const randomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const randomList = (min: number, max: number): number[] => {
  // create full list
  const array = Array(max - min + 1)
    .fill(0)
    .map((_, idx) => min + idx)

  // randomize
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

export const isTouchDevice = (): boolean => 'ontouchstart' in window

export const titleize = (str: string): string =>
  str[0].toUpperCase() + str.slice(1).toLowerCase()

export const IS_PROD = window.location.host === 'whocards.cc'

export const encode = (data: { [key: string]: any }) => {
  const formData = new FormData()
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k])
  })
  return formData
}

export const cssClasses = (arr: Array<string | boolean | undefined>): string =>
  arr.filter(Boolean).join(' ')

import React, {
	useContext,
	useState,
} from 'react'
import useEventListener from '@use-it/event-listener';
import LanguageContext from 'contexts/language.context';
import QUESTIONS from 'data/questions.json'
import { randomList } from 'helpers';
import './Questions.css'

interface QuestionsProps {}

const MAX: number = QUESTIONS.length-1

export const Questions: React.FunctionComponent<QuestionsProps> = () => {
	// @ts-ignore
	const { language } = useContext(LanguageContext)
	const [list] = useState(randomList(1, MAX))
	const [index, setIndex] = useState<number>(0)

	const hasNext = index < MAX - 1
	const hasPrevious = !!index

	const next = () => {
		if (hasNext) {
			setIndex(i => ++i)
		}
	}

	const previous = () => {
		if (hasPrevious) {
			setIndex(i => --i)
		}
	}

	useEventListener('keydown', (event) => {
		// @ts-ignore
		const { key } = event
		if (key === 'ArrowRight') {
			next()
		} else if (key === 'ArrowLeft') {
			previous()
		}
	})

	// @ts-ignore
	const question = () => QUESTIONS[list[index]][language]

	return (
		<div className='flex-row p1'>
			<div
				className={`arrow-left hover ${hasPrevious ? '' : 'disabled'}`}
				onClick={previous}
			/>
			<h2 className='question'>{ question() }</h2>
			<div
				className={`arrow-right hover ${hasNext ? '' : 'disabled'}`}
				onClick={next}
			/>
		</div>
	)
}

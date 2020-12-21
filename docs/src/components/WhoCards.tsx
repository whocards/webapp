import React, {
	useContext,
	useEffect,
	useState,
} from 'react'
import LanguageContext from '../contexts/language.context';
import QUESTIONS from '../data/questions.json'
import { randomNumber } from '../helpers';

interface WhoCardsProps {
	show: boolean,
}

export const WhoCards: React.FunctionComponent<WhoCardsProps> = ({ show }) => {
	// @ts-ignore
	const { language } = useContext(LanguageContext)
	const [id, setId] = useState<number>(-1)

	const getNextQuestion = () => {
		setId(randomNumber(0, QUESTIONS.length - 1))
	}

	useEffect(() => {
		getNextQuestion()
	}, [])

	if (!show || id < 0) {
		return <span />
	}

	// @ts-ignore
	const question = () => QUESTIONS[id][language]

	return (
		<div>
			<button onClick={getNextQuestion}>Next Question</button>
			<h1>Question: {QUESTIONS[id].questionId}</h1>
			<h2>{ question() }</h2>
		</div>
	)
}

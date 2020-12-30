import React, {
	useContext,
	useEffect,
	useState,
} from 'react'
import LanguageContext from 'contexts/language.context';
import QUESTIONS from 'data/questions.json'
import { randomNumber } from 'helpers';
import './Questions.css'

interface QuestionsProps {}

export const Questions: React.FunctionComponent<QuestionsProps> = () => {
	// @ts-ignore
	const { language } = useContext(LanguageContext)
	const [id, setId] = useState<number>(randomNumber(0, QUESTIONS.length - 1))

	const getNextQuestion = () => {
		setId(randomNumber(0, QUESTIONS.length - 1))
	}

	useEffect(() => {
		getNextQuestion()
	}, [])

	if (id < 0) {
		getNextQuestion()
	}

	// @ts-ignore
	const question = () => QUESTIONS[id][language]

	return (
		<div className='flex-row p1'>
			<div className='arrow-left hover' />
			<h2 className='question'>{ question() }</h2>
			<div className='arrow-right hover' onClick={getNextQuestion} />
		</div>
	)
}

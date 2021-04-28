import useEventListener from '@use-it/event-listener'
import { LanguageContext } from 'contexts/language.context'
import QUESTIONS from 'data/questions.json'
import { randomList } from 'helpers'
import {
	AnalyticsAction,
	AnalyticsCategory,
	gtagEvent,
} from 'modules/Analytics'
import React, {
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import { useBeforeunload } from 'react-beforeunload'
import './Questions.css'

interface QuestionsProps {}

const MAX: number = QUESTIONS.length - 1

export const Questions: React.FunctionComponent<QuestionsProps> = () => {
	// @ts-ignore
	const { language } = useContext(LanguageContext)
	const [list] = useState(randomList(1, MAX))
	const [index, setIndex] = useState<number>(0)
	const [total, setTotal] = useState<number>(1)

	const hasNext = index < MAX - 1
	const hasPrevious = !!index

	const sendGtagEvent = useCallback((isNext: boolean = true) => {
		const action: AnalyticsAction = isNext ? AnalyticsAction.play_next : AnalyticsAction.play_back
		gtagEvent(action, {
			category: AnalyticsCategory.play,
			value: list[index],
		})
	}, [list, index])

	useBeforeunload((event: any) => {
		gtagEvent(AnalyticsAction.play_total, {
			category: AnalyticsCategory.play,
			label: language,
			value: total,
		})
	})

	useEffect(() => {
		sendGtagEvent()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	const next = () => {
		if (hasNext) {
			setIndex(i => {
				const next = i + 1
				if (next === total) {
					setTotal(total + 1)
				}
				return next
			})
			sendGtagEvent()
		}
	}

	const previous = () => {
		if (hasPrevious) {
			setIndex(index - 1)
			sendGtagEvent(false)
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

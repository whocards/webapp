import useEventListener from '@use-it/event-listener'
import { LanguageContext } from 'contexts/Language'
import QUESTIONS from 'data/questions.json'
import { randomList } from 'helpers'
import {
  AnalyticsAction,
  AnalyticsCategory,
  gtagEvent,
} from 'modules/Analytics'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useBeforeunload } from 'react-beforeunload'
import './Questions.css'

interface QuestionsProps {}

const MAX: number = QUESTIONS.length - 1
const MOVE: number = 150

export const Questions: React.FunctionComponent<QuestionsProps> = () => {
  // @ts-ignore
  const { language } = useContext(LanguageContext)
  const [list] = useState(randomList(1, MAX))
  const [index, setIndex] = useState<number>(0)
  const [total, setTotal] = useState<number>(1)
  const [touch, setTouch] = useState<number>(0)

  const hasNext = index < MAX - 1
  const hasPrevious = !!index

  const sendGtagEvent = useCallback(
    (isNext: boolean = true) => {
      const action: AnalyticsAction = isNext
        ? AnalyticsAction.play_next
        : AnalyticsAction.play_back
      gtagEvent(action, {
        category: AnalyticsCategory.play,
        value: list[index],
      })
    },
    [list, index],
  )

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
      setIndex((i) => {
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

  useEventListener('touchstart', (event: TouchEvent) => {
    setTouch(event.targetTouches[0].clientX)
  })

  useEventListener('touchmove', (event: TouchEvent) => {
    if (touch > -1) {
      const touched = event.changedTouches[0].clientX - touch
      if (touched > MOVE) {
        next()
        setTouch(-1)
      } else if (Math.abs(touched) > MOVE) {
        previous()
        setTouch(-1)
      }
    }
  })

  useEventListener('touchend', () => {
    setTouch(0)
  })

  // @ts-ignore
  const question = () => QUESTIONS[list[index]][language]

  return (
    <div className='flex-row flex-between p1'>
      <div
        className={`arrow-left hover ${hasPrevious ? '' : 'disabled'}`}
        onClick={previous}
      />
      <h2 className='question'>{question()}</h2>
      <div
        className={`arrow-right hover ${hasNext ? '' : 'disabled'}`}
        onClick={next}
      />
    </div>
  )
}

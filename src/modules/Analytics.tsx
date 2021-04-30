import { AnalyticsEvent } from 'domains/Analytics'
import { CustomWindow } from 'domains/CustomWindow'

declare let window: CustomWindow

export enum AnalyticsCategory {
  play = 'play',
  print = 'print',
}

export enum AnalyticsAction {
  play_total = 'play_total',
  play_next = 'play_next',
  play_back = 'play_back',
  print = 'print',
}

export function gtagEvent(
  action: AnalyticsAction,
  eventDetails: AnalyticsEvent,
): void {
  window.gtag('event', action, eventDetails)
}

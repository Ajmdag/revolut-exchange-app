export enum ECounter {
  NEXT_CURRENCY_CARD_FROM = '@counterFrom/INCREMENT',
  PREV_CURRENCY_CARD_FROM = '@counterFrom/DECREMENT',
  NEXT_CURRENCY_CARD_TO = '@counterTo/INCREMENT',
  PREV_CURRENCY_CARD_TO = '@counterTo/DECREMENT',
}

export const incrementCounter = () => ({type: ECounter.NEXT_CURRENCY_CARD_FROM})
export const decrementCounter = () => ({type: ECounter.PREV_CURRENCY_CARD_TO})

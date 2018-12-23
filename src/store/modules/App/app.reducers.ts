import {AnyAction, combineReducers} from 'redux'
import {ECounter} from './app.actions'

const initialState: IStore = {
  counterFrom: 0,
  counterTo: 0,
}

const counterFrom = (state = initialState.counterFrom, action: AnyAction) => {
  switch (action.type) {
    case ECounter.NEXT_CURRENCY_CARD_FROM:
      return state + 1
    case ECounter.PREV_CURRENCY_CARD_FROM:
      return state - 1
    default:
      return state
  }
}

const counterTo = (state = initialState.counterTo, action: AnyAction) => {
  switch (action.type) {
    case ECounter.NEXT_CURRENCY_CARD_FROM:
      return state + 1
    case ECounter.PREV_CURRENCY_CARD_FROM:
      return state - 1
    default:
      return state
  }
}

export default combineReducers<IStore>({
  counterFrom,
  counterTo,
})

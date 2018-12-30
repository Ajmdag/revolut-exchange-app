import {AnyAction, combineReducers} from 'redux'
import {EApp} from './app.actions'

const initialState: IStore = {
  fromCurrency: 'USD',
  fromCurrencyQuantity: 0,
  ratesData: {},
  toCurrency: 'USD',
  toCurrencyQuantity: 0,
  userMoney: {
    EUR: 300,
    GBP: 2620,
    USD: 3300,
  },
}

const fromCurrency = (state = initialState.fromCurrency, action: AnyAction) => {
  switch (action.type) {
    case EApp.FROM_CURRENCY_CHANGE:
      return action.payload
    default:
      return state
  }
}

const toCurrency = (state = initialState.toCurrency, action: AnyAction) => {
  switch (action.type) {
    case EApp.TO_CURRENCY_CHANGE:
      return action.payload.rates ? action.payload.rates : action.payload
    default:
      return state
  }
}

const fromCurrencyQuantity = (state = initialState.fromCurrencyQuantity, action: AnyAction) => {
  switch (action.type) {
    case EApp.FROM_CURRENCY_CHANGE_QUANTITY:
      return Number(action.payload)
    default:
      return state
  }
}

const ratesData = (state = initialState.ratesData, action: AnyAction) => {
  switch (action.type) {
    case EApp.FETCH_RATES:
      return action.payload.rates ? action.payload.rates : action.payload
    default:
      return state
  }
}

const toCurrencyQuantity = (state = initialState.toCurrencyQuantity, action: AnyAction) => {
  switch (action.type) {
    case EApp.COUNT_TO_CURRENCY_QUANTITY:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  fromCurrency,
  fromCurrencyQuantity,
  ratesData,
  toCurrency,
  toCurrencyQuantity,
})

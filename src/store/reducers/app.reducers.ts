import { AnyAction, combineReducers } from 'redux'
import { exchangeCurrencies as exchangeCurrenciesAction } from '../actions/exchangeCurrencies'
import { EApp } from '../modules/App/app.actions'
import {IGetStateData} from '../sagas/exchangeCurrencies'

const initialState: IStore = {
  fromCurrency: 'USD',
  fromCurrencyQuantity: '',
  ratesData: {},
  toCurrency: 'USD',
  toCurrencyQuantity: '',
  userMoney: {
    EUR: 300,
    GBP: 2620,
    USD: 3300,
  },
}

const userMoney = (state = initialState.userMoney, action: {type: string, payload: IGetStateData}) => {
  switch (action.type) {
    case exchangeCurrenciesAction.type:
      const actionPayload = action.payload

      return {
        ...state,
        [actionPayload.fromCurrency]:
          Number(state[actionPayload.fromCurrency]) - Number(actionPayload.fromCurrencyQuantity),
        [actionPayload.toCurrency]:
          Number(state[actionPayload.toCurrency]) + Number(actionPayload.toCurrencyQuantity),
      }
    default:
      return state
  }
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
    case EApp.ERROR_COUNT_TO_CURRENCY_QUANTITY:
      return action.payload
    default:
      return state
  }
}

// const userMoney = (state = initialState.userMoney) => {
//   return state
// }

export default combineReducers({
  // exchangeCurrencies,
  fromCurrency,
  fromCurrencyQuantity,
  ratesData,
  toCurrency,
  toCurrencyQuantity,
  userMoney,
})

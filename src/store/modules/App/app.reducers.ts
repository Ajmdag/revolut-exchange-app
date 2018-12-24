import {AnyAction} from 'redux'
import {EApp} from './app.actions'

const initialState: IStore = {
  fromCurrency: 'USD',
  fromCurrencyQuantity: 0,
  toCurrency: 'EUR',
  toCurrencyQuantity: 0,
  userMoney: {
    EUR: 300,
    GBP: 2620,
    USD: 3300,
  },
}

const changeFromCurrency = (state = initialState.fromCurrency, action: AnyAction) => {
  switch (action.type) {
    case EApp.FROM_CURRENCY_CHANGE:
      return action.type
    default:
      return state
  }
}

export default changeFromCurrency
import {IDispatch, IGetState} from '../../'

// API data for openexchangerates.org
const API = 'https://openexchangerates.org/api/latest.json?app_id='
const APP_ID = 'db72535fa96944f8b020ae751a503707___'

export enum EApp {
  FROM_CURRENCY_CHANGE = '@fromCurrency/CHANGE',
  TO_CURRENCY_CHANGE = '@toCurrency/CHANGE',
  FROM_CURRENCY_CHANGE_QUANTITY = '@fromCurrency/CHANGE_QUANTITY',
  TO_CURRENCY_CHANGE_QUANTITY = '@toCurrency/CHANGE_QUANTITY',
  COUNT_TO_CURRENCY_QUANTITY = '@toCurrency/COUNT',
  ERROR_COUNT_TO_CURRENCY_QUANTITY = '@toCurrency/ERROR_WHEN_COUNT',
  FETCH_RATES = '@rates/FETCH_RATES',
}

export const changeFromCurrency = (currency: string) => ({type: EApp.FROM_CURRENCY_CHANGE, payload: currency})
export const changeToCurrency = (currency: string) => ({type: EApp.TO_CURRENCY_CHANGE, payload: currency})

export const changeFromCurrencyQuantity = (quantity: string) => (
  {type: EApp.FROM_CURRENCY_CHANGE_QUANTITY, payload: quantity}
  )

export const countToCurrencyQuantity = () => {
  return (dispatch: IDispatch, getState: IGetState) => {
    const {ratesData, toCurrency, fromCurrency, fromCurrencyQuantity} = getState()

    const toCurrencyQuantity = Number((
      1 / ratesData[fromCurrency] * ratesData[toCurrency] * Number(fromCurrencyQuantity)
      ).toFixed(2))

      if (toCurrencyQuantity) {
        dispatch({
          payload: toCurrencyQuantity,
          type: EApp.COUNT_TO_CURRENCY_QUANTITY,
        })
      } else {
        dispatch({
          payload: 'An error happend ;(',
          type: EApp.ERROR_COUNT_TO_CURRENCY_QUANTITY,
        })
      }
  }
}

export const fetchRates = () => {
  return (dispatch: IDispatch) => {
    fetch(API + APP_ID)
      .then(response => response.json())
      .then(data => dispatch({type: EApp.FETCH_RATES, payload: data}))
      .catch(err => {alert(err)})
  }
}

import {IDispatch, IGetState} from '../../'

// API data for openexchangerates.org
const API = 'https://openexchangerates.org/api/latest.json?app_id='
const APP_ID = 'db72535fa96944f8b020ae751a503707***'

export enum EApp {
  FROM_CURRENCY_CHANGE = '@fromCurrency/CHANGE',
  TO_CURRENCY_CHANGE = '@toCurrency/CHANGE',
  FROM_CURRENCY_CHANGE_QUANTITY = '@fromCurrency/CHANGE_QUANTITY',
  TO_CURRENCY_CHANGE_QUANTITY = '@toCurrency/CHANGE_QUANTITY',
  COUNT_TO_CURRENCY_QUANTITY = '@toCurrency/COUNT',
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

    const toCurrencyQuantity = (
      1 / ratesData[fromCurrency] * ratesData[toCurrency] * Number(fromCurrencyQuantity)
      ).toFixed(2)

    dispatch({type: EApp.COUNT_TO_CURRENCY_QUANTITY, payload: toCurrencyQuantity})
  }
}

export const fetchRates = () => {
  return (dispatch: IDispatch) => {
    fetch(API + APP_ID)
      .then(response => response.json())
      .then(data => dispatch({type: EApp.FETCH_RATES, payload: data}))
      .catch(err => {throw err})
  }
}

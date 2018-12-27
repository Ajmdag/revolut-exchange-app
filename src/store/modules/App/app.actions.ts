import {IDispatch} from '../../'

export enum EApp {
  FROM_CURRENCY_CHANGE = '@fromCurrency/CHANGE',
  TO_CURRENCY_CHANGE = '@toCurrency/CHANGE',
  TO_CURRENCY_CHANGE_QUANTITY = '@toCurrency/CHANGE_QUANTITY',
  FROM_CURRENCY_CHANGE_QUANTITY = '@fromCurrency/CHANGE_QUANTITY',
  FETCH_RATES = '@rates/FETCH_RATES',
}

export const changeFromCurrency = (currency: string) => ({type: EApp.FROM_CURRENCY_CHANGE, payload: currency})
export const changeToCurrency = (currency: string) => ({type: EApp.TO_CURRENCY_CHANGE, payload: currency})

export const changeFromCurrencyQuantity = (quantity: string) => (
  {type: EApp.FROM_CURRENCY_CHANGE_QUANTITY, payload: quantity}
  )

export const fetchRates = () => {
  return (dispatch: IDispatch) => {
    fetch('https://openexchangerates.org/api/latest.json?app_id=db72535fa96944f8b020ae751a503707')
      .then(response => response.json())
      .then(data => dispatch({type: EApp.FETCH_RATES, payload: data}))
  }
}

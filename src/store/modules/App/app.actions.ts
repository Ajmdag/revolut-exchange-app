export enum EApp {
  FROM_CURRENCY_CHANGE = '@fromCurrency/CHANGE',
  TO_CURRENCY_CHANGE = '@toCurrency/CHANGE',
  TO_CURRENCY_CHANGE_QUANTITY = '@toCurrency/CHANGE_QUANTITY',
  FROM_CURRENCY_CHANGE_QUANTITY = '@fromCurrency/CHANGE_QUANTITY',
}

export const changeFromCurrency = (currency: string) => ({type: EApp.FROM_CURRENCY_CHANGE, payload: currency})
export const changeToCurrency = (currency: string) => ({type: EApp.TO_CURRENCY_CHANGE, payload: currency})

export const changeFromCurrencyQuantity = (quantity: string) => (
  {type: EApp.FROM_CURRENCY_CHANGE_QUANTITY, payload: quantity}
  )
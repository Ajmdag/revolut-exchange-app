export enum EApp {
  FROM_CURRENCY_CHANGE = '@fromCurrency/CHANGE',
  TO_CURRENCY_CHANGE = '@toCurrency/CHANGE',
}

export const changeFromCurrency = (currency: string) => ({type: EApp.FROM_CURRENCY_CHANGE, payload: currency})
export const changeToCurrency = (currency: string) => ({type: EApp.TO_CURRENCY_CHANGE, payload: currency})

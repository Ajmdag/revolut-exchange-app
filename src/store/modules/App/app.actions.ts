export enum EApp {
  FROM_CURRENCY_CHANGE = '@fromCurrency/INCREMENT',
}

export const changeFromCurrency = () => ({type: EApp.FROM_CURRENCY_CHANGE})

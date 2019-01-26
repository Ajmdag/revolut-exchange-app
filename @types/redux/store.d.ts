interface IStore {
  userMoney: {
    EUR: number,
    USD: number,
    GBP: number,
  }
  fromCurrencyQuantity: number | string // (what user enters)
  toCurrencyQuantity: number | string // (what user enters)
  fromCurrency:  'EUR' | 'GBP' | 'USD' // (what user enters)
  toCurrency:  'EUR' | 'GBP' | 'USD' // (what user enters)
  ratesData: {
    [key: string]: number,
  }
}

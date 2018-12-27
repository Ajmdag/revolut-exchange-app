interface IStore {
  userMoney: {
    EUR: number | '',
    USD: number | '',
    GBP: number | '',
  },
  fromCurrencyQuantity: number, // (what user enters)
  toCurrencyQuantity: number, // (what user enters)
  fromCurrency: any, // (what user enters)
  toCurrency: any, // (what user enters)
}

interface IStore {
  userMoney: {
    EUR: number | '',
    USD: number | '',
    GBP: number | '',
  },
  fromCurrencyQuantity: number | string, // (what user enters)
  toCurrencyQuantity: number | string, // (what user enters)
  fromCurrency: string, // (what user enters)
  toCurrency: string, // (what user enters)
  ratesData: {
    [key: string]: number;
  },
}

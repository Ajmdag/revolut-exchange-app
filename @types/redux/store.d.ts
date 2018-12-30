interface IStore {
  userMoney: {
    EUR: number | '',
    USD: number | '',
    GBP: number | '',
  },
  fromCurrencyQuantity: number, // (what user enters)
  toCurrencyQuantity: number, // (what user enters)
  fromCurrency: string, // (what user enters)
  toCurrency: string, // (what user enters)
  ratesData: {
    [key: string]: number;
  },
}

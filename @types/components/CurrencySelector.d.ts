interface ICurrencySelector {
  fromCurrency: string
  toCurrency: string
  changeFromCurrency: (arg: string) => void
}

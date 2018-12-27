interface ICurrencySelectorProps {
  fromCurrency: string
  toCurrency: string
  currencyType: string
  changeFromCurrency: (arg: string) => void
  changeToCurrency: (arg: string) => void
}

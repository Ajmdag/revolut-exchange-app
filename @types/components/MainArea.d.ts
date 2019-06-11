interface IMainAreaDispatchProps {
  changeFromCurrency: (arg: string) => void
  changeToCurrency: (arg: string) => void
  fetchRates: () => any
}
interface IMainAreaMapProps {
  fromCurrency: 'EUR' | 'GBP' | 'USD',
  toCurrency: 'EUR' | 'GBP' | 'USD',
}
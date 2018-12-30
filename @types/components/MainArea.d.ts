interface IMainAreaDispatchProps {
  changeFromCurrency: (arg: string) => void
  changeToCurrency: (arg: string) => void
  fetchRates: () => any
}
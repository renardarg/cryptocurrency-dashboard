import {
  Currency,
  ActionTypes,
  IFetchCurrenciesAction,
  ISetCurrenciesAction,
  ICurrenciesLoadingStartAction,
  ICurrenciesLoadingStopAction,
} from '.';

export const fetchCurrencies = (): IFetchCurrenciesAction => ({
  type: ActionTypes.FETCH_CURRENCIES,
});

export const setCurrencies = (payload: Currency[]): ISetCurrenciesAction => ({
  payload,
  type: ActionTypes.SET_CURRENCIES,
});

export const currenciesLoadingStart = (): ICurrenciesLoadingStartAction => ({
  type: ActionTypes.CURRENCIES_LOADING_START,
});

export const currenciesLoadingStop = (): ICurrenciesLoadingStopAction => ({
  type: ActionTypes.CURRENCIES_LOADING_STOP,
});
import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { fetchCurrencies } from '@src/redux_/currencies';
import { setLayout } from '@src/redux_/layout';
import { selectCurrentLayout } from '@src/redux_/layout/selectors';
import { selectValidCurrencies } from '@src/redux_/currencies/selectors';
import { selectLoaded } from '@src/redux_/prices/selectors';
import { App } from '.';

const mapStateToProps = (state: IRootState) => ({
  currencies: selectValidCurrencies(state),
  layout: selectCurrentLayout(state),
  pricesLoaded: selectLoaded(state),
});

const mapDispatchToProps = {
  fetchCurrencies,
  setLayout,
};

export const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

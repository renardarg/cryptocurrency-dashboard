import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { makeSelectPrice, selectLoading } from '@src/redux_/prices/selectors';
import { selectTarget } from '@src/redux_/currencies/selectors';
import { CurrencyWidget, ICurrencyWidgetProps } from '.';

const mapStateToProps = (state: IRootState, ownProps: Partial<ICurrencyWidgetProps>) => {
  const { currency } = ownProps;
  const selectPrice = makeSelectPrice();

  return {
    price: selectPrice(state, currency!),
    priceLoading: selectLoading(state),
    target: selectTarget(state),
  };
};

export const CurrencyWidgetConnected = connect(
  mapStateToProps,
)(CurrencyWidget);
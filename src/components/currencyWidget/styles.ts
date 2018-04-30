import { Theme } from 'material-ui/styles';
import { grey } from 'material-ui/colors';

export type ClassNames =
  | 'currencyName'
  | 'divider'
  | 'menuIcon'
  | 'options'
  | 'placeholder'
  | 'price';

const ellipsis = {
  overflow: 'hidden' as 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export const styles = (theme: Theme) => ({
  currencyName: {
    ['&:hover']: {
      outline: `2px dashed ${grey.A100}`,
      outlineOffset: '2px',
    },
    cursor: 'move',
    marginRight: '40px',
    ...ellipsis,
  },
  divider: {
    margin: '10px 0',
  },
  menuIcon: {
    marginRight: 0,
  },
  options: {
    position: 'absolute' as 'absolute',
    right: '3px',
    top: '3px',
  },
  placeholder: {
    display: 'none',
  },
  price: {
    ...ellipsis,
  },
});

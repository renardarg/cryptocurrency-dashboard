import React, { SFC } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import CodeIcon from 'material-ui-icons/Code';
import RefreshIcon from 'material-ui-icons/Refresh';
import { withStyles, WithStyles } from 'material-ui/styles';

import { styles, ClassNames } from './styles';
import { RefreshRate } from '@src/redux_/refresh';

export interface IToolbarProps {
  refreshRate: RefreshRate;
}

export const ToolbarRaw: SFC<
  IToolbarProps & WithStyles<ClassNames>
> = ({ classes, refreshRate }) => {
  const renderRefreshButton = refreshRate === 'manual' && (
    <Grid item={true}>
      <Tooltip
        title={'Refresh'}
        placement={'top'}
      >
        <Button
          className={'bounceIn animated'}
          aria-label={'Refresh'}
          color={'primary'}
          fab={true}
        >
          <RefreshIcon />
        </Button>
      </Tooltip>
    </Grid>
  );

  return (
    <div className={classes.toolbar}>
      <Grid
        alignItems={'center'}
        container={true}
        spacing={0}
      >
        <Grid item={true}>
          <Tooltip
            title={'Source'}
            placement={'top'}
          >
            <IconButton
              href={'https://github.com/rkrupinski/cryptocurrency-dashboard'}
              aria-label={'Source'}
            >
              <CodeIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        {renderRefreshButton}
      </Grid>
    </div>
  );
};

export const Toolbar = withStyles(styles)(ToolbarRaw);
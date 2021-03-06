import { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}))

const ChannelDetail = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.toolbar} />
      <Typography paragraph>
        ChannelDetail
      </Typography>
    </Fragment>
  )
};

export default ChannelDetail;
import { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}))

const VideoWatch = props => {

  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.toolbar} />
      <Typography paragraph>
        VideoWatch
      </Typography>
    </Fragment>
  )
};

export default VideoWatch;
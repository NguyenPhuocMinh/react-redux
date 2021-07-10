import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    bottom: 0,
    margin: 0,
    border: 0,
    padding: theme.spacing(2),
    textAlign: 'center',
    display: props => !props.open ? 'none' : null
  },
}))

const Footer = ({ open }) => {

  const classes = useStyles({ open });

  return (
    <footer className={classes.footer}>
      <Typography color="inherit" variant='caption' component='p'>
        © Copy right 2021
      </Typography>
    </footer>
  )
};

export default Footer;
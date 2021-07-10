import React from 'react';
// redux
import { useDispatch } from 'react-redux';
import { authActions } from '../store/actions';
import {
  Popover,
  Paper,
  Box,
  Avatar,
  Typography,
  Divider,
  MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  headerProfile: {
    display: 'flex',
    padding: theme.spacing(2)
  },
  headerAvatar: {
    marginRight: theme.spacing(1.5),
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& .MuiTypography-subtitle1': {
      fontWeight: 'bold'
    },
    '& .MuiTypography-subtitle2': {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 1,
      textDecoration: 'none',
      color: '#065fd4',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'normal',
    }
  },
  icon: {
    marginRight: theme.spacing(1.5)
  },
  sectionMenu: {
    height: '40px',
    color: '#777474'
  }
}));

const Profile = ({
  profileName,
  pictureURL,
  open,
  anchorEl,
  handleClose
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmitLogout = () => {
    dispatch(authActions.logout());
  }

  return (
    <div className={classes.root}>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Paper elevation={3}>
          <Box display='flex' flexDirection='column' width={300}>
            <div id='header-profile' className={classes.headerProfile}>
              <div className={classes.headerAvatar}>
                <Avatar alt='' src={pictureURL} />
              </div>
              <div id='header-content' className={classes.headerContent}>
                <Typography variant='subtitle1' component="span">
                  {profileName}
                </Typography>
                <Typography
                  variant='subtitle2'
                  href='/'
                  component='a'
                  target='_blank'
                >
                  Quản lý Tài khoản Google của bạn
              </Typography>
              </div>
            </div>
            <Divider />
            <div id='section-profile'>
              <MenuItem
                className={classes.sectionMenu}
                onClick={handleSubmitLogout}
              >
                <ExitToAppIcon className={classes.icon} />
                <Typography variant='subtitle2' component='span'>
                  Đăng xuất
                </Typography>
              </MenuItem>
            </div>
          </Box>
        </Paper>
      </Popover>
    </div>
  );
};

export default Profile;
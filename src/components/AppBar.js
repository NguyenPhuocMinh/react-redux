import { useEffect, useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/actions';
// logo
import logo from '../logo.svg'
// material ui
import {
  Toolbar,
  AppBar,
  IconButton,
  InputBase,
  useMediaQuery,
  Button,
  Avatar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles, fade } from '@material-ui/core/styles';
import Profile from './Profile';
// lodash
import { isEmpty, get } from 'lodash';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.common.black
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  appBarSearch: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    // pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid'
  },
  iconButtonSearch: {
    padding: theme.spacing(0.5),
    color: 'white',
    '&.MuiIconButton-root:hover': {
      backgroundColor: 'none'
    }
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '50ch',
      },
    },
    [theme.breakpoints.only('md')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch'
      }
    },
    [theme.breakpoints.only('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '25ch',
      },
    },
    [theme.breakpoints.only('xs')]: {
      width: props => props.showSearch ? '25ch' : '15ch',
      '&:focus': {
        width: props => props.showSearch ? '30ch' : '15ch'
      }
    }
  },
  logo: {
    height: '35px',
    marginRight: theme.spacing(0, 1, 0, 0),
    objectFit: 'contain'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  appBarLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  appBarRight: {
    display: 'flex',
    alignItems: 'center',
  },
  colorIcon: {
    color: 'white',
  },
  loginButton: {
    border: '1px solid blue',
    color: 'blue',
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white
    }
  },
  pictureURL: {
    height: theme.spacing(4.5),
    width: theme.spacing(4.5)
  }
}))

const AppBarHeader = ({
  handleDrawerPermanent,
  handleDrawerTemporary,
  matches
}) => {

  const [valueSearch, setValueSearch] = useState(undefined);
  const [showSearch, setShowSearch] = useState(false);

  const handleChangeSearch = (event) => {
    setValueSearch(event.target.value)
  }

  const handleShowSearch = () => {
    setShowSearch(true);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
  };

  const classes = useStyles({ showSearch });
  const isMobile = useMediaQuery('(max-width:500px)');

  useEffect(() => {
    if (!isMobile) {
      setShowSearch(false);
    }
  }, [isMobile])

  const dispatch = useDispatch();

  const handleSubmitLogin = () => {
    dispatch(authActions.login());
  };

  const auth = useSelector(state => state.auth);
  const user = get(auth, 'user', {});

  const [anchorEl, setAnchorEl] = useState('');

  const handleShowProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("showSearch", showSearch)
  console.log("user", user)

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {!showSearch ?
          <div className={classes.appBarLeft}>
            <IconButton
              edge="start"
              onClick={matches ? handleDrawerTemporary : handleDrawerPermanent}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="" className={classes.logo} />
          </div> :
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseSearch}
          >
            <ArrowBackIcon />
          </IconButton>
        }
        {!isMobile || showSearch ? (
          <div className={classes.appBarSearch}>
            <InputBase
              placeholder="Tìm kiếm..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              name="search"
              value={valueSearch}
              onChange={handleChangeSearch}
            />
            <div className={classes.searchIcon}>
              <IconButton
                className={classes.iconButtonSearch}
                onClick={(e) => console.log("XXXX", e)}
              >
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        ) : null
        }
        <div className={classes.appBarRight}>
          {isMobile && !showSearch ?
            <IconButton
              className={classes.colorIcon}
              onClick={handleShowSearch}
            >
              <SearchIcon />
            </IconButton>
            : null
          }
          {!showSearch ?
            <IconButton
              className={classes.colorIcon}
              onClick={e => console.log("VideoCallIcon", e)}
            >
              <VideoCallIcon />
            </IconButton> : null
          }
          {!showSearch ?
            <IconButton
              className={classes.colorIcon}
              onClick={e => console.log("AppsIcon", e)}
            >
              <AppsIcon />
            </IconButton> : null
          }
          {!showSearch ?
            <IconButton
              className={classes.colorIcon}
              onClick={e => console.log("NotificationsIcon", e)}
            >
              <NotificationsIcon />
            </IconButton> : null
          }
          {!showSearch && isEmpty(user) ?
            <Button
              startIcon={<AccountCircleIcon />}
              className={classes.loginButton}
              onClick={handleSubmitLogin}
            >
              Đăng nhập
           </Button> : !showSearch && !isEmpty(user) ? (
              <IconButton onClick={handleShowProfile}>
                <Avatar alt='' src={user?.pictureURL} className={classes.pictureURL} />
              </IconButton>
            ) : null
          }
          {open && !isEmpty(user) ? (
            <Profile
              profileName={user.name}
              pictureURL={user.pictureURL}
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
            />
          ) : null
          }
        </div>
      </Toolbar>
    </AppBar>
  )
};

export default AppBarHeader;
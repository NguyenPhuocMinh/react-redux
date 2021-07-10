import { forwardRef } from 'react';
import clsx from 'clsx';
// material ui
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ListItemFirsts,
  ListItemSeconds
} from './ListItem';
import Footer from '../Footer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) - 2,
    },
    ['@media (max-width:776px)']: { // eslint-disable-line no-useless-computed-key
      width: '0'
    }
  },
  drawerContainer: {
    overflow: 'auto',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  selectedRow: {
    color: 'rgba(0, 0, 0, 0.87)',
    '&.MuiListItem-root': {
      color: theme.palette.success.dark
    },
    '& .MuiListItemIcon-root': {
      color: theme.palette.success.dark
    },
    '& .MuiListItemText-primary': {
      fontWeight: 'bold'
    }
  },
  notSelectedRow: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
}))

const NavLinkRef = forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));

const PermanentDrawer = ({ open, matches }) => {

  const classes = useStyles();
  const location = useLocation();

  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <Toolbar className={classes.toolbar} />
      <div className={classes.drawerContainer}>
        <List>
          {ListItemFirsts.map((item, index) => {
            const { text, icon, path } = item;

            const selected = path === location.pathname;
            return (
              <ListItem
                button
                key={index}
                component={NavLinkRef}
                to={path}
                selected={selected}
                className={selected ? classes.selectedRow : classes.notSelectedRow}
              >
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                />
              </ListItem>
            )
          })}
          {matches ? <ListItem button>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary='Thư viện' />
          </ListItem> : null
          }
        </List>
        {!matches ? (
          <>
            <Divider />
            <List>
              {ListItemSeconds.map((item, index) => (
                <ListItem
                  button
                  key={index}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </>
        ) : null
        }
      </div>
      {!matches ? (
        <>
          <Divider />
          <div className={classes.drawerFooter}>
            <Footer open={open} />
          </div>
        </>
      ) : null
      }
    </Drawer>
  )
};

export default PermanentDrawer;
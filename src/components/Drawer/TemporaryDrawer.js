import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  IconButton
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
  toolBardMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 0.5),
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36
  }
}))

const TemporaryDrawer = ({ openAnchor, handleDrawerTemporary }) => {

  const classes = useStyles();

  return (
    <Drawer
      anchor='left'
      open={openAnchor}
      onClose={handleDrawerTemporary}
      variant="temporary"
      classes={{
        paper: classes.drawerOpen
      }}
    >
      <Toolbar className={classes.toolBardMenu}>
        <IconButton
          className={classes.menuButton}
          onClick={handleDrawerTemporary}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <div className={classes.drawerContainer}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
};

export default TemporaryDrawer;
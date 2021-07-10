import { Fragment, useState, useEffect } from 'react';
import AppBar from './AppBar';
import PermanentDrawer from './Drawer/PermanentDrawer';
import TemporaryDrawer from './Drawer/TemporaryDrawer';
import {
  CssBaseline,
  useMediaQuery
} from '@material-ui/core';

const Header = () => {

  const matches = useMediaQuery('(max-width:1325px)');
  const [open, setOpen] = useState(false);
  const [openAnchor, setOpenAnchor] = useState(false);

  const handleDrawerPermanent = () => {
    setOpen(!open);
  };

  const handleDrawerTemporary = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenAnchor(!openAnchor);
  };

  useEffect(() => {
    if (matches) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [matches])

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        handleDrawerPermanent={handleDrawerPermanent}
        handleDrawerTemporary={handleDrawerTemporary}
        matches={matches}
      />
      <PermanentDrawer open={open} matches={matches} />
      {matches && (
        <TemporaryDrawer
          openAnchor={openAnchor}
          handleDrawerTemporary={handleDrawerTemporary}
        />
      )}
    </Fragment>
  )
};

export default Header;
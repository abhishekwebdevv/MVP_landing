import React, { useState } from 'react';
import { Drawer, IconButton, ClickAwayListener } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GiHamburgerMenu } from 'react-icons/gi';

// const drawerWidth = 240

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <GiHamburgerMenu />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="top"
        elevation={4}
        open={open}
        onClose={handleClose}
      >
        <h1>asdashjdvasjdas</h1>
      </Drawer>
    </>
  );
}

const useStyles = makeStyles({
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: drawerWidth,
  // },
});

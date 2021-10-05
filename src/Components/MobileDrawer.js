import React, { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import { GiHamburgerMenu } from 'react-icons/gi';

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

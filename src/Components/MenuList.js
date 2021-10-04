import React, { useState, useRef } from 'react';
import {
  MenuList as MuiMenuList,
  MenuItem,
  Popper,
  Grow,
  Paper,
  Button,
  ClickAwayListener,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

export default function MenuList({ text }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const classes = useStyles();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div>
      <div className={classes.topBar}></div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        variant="text"
        disableRipple
        onClick={handleToggle}
        classes={{
          text: classes.btnText,
        }}
        className={classes.btn}
      >
        {text}{' '}
        {open ? (
          <BiChevronUp className={classes.icon} />
        ) : (
          <BiChevronDown className={classes.icon} />
        )}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'top' : 'bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MuiMenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MuiMenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

const useStyles = makeStyles({
  btn: {
    textTransform: 'none !important',
  },
  btnText: {
    color: '#000 !important',

    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
  icon: {
    margin: '0px 4px',
  },
});

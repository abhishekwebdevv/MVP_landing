import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

export default function Button({
  children,
  variant,
  large,
  subVariant,
  ...other
}) {
  const classes = useStyles();

  const btnStyles = () => {
    if (subVariant === 'dark') return classes.containedDark;
    else if (subVariant === 'light') return classes.containedLight;
  };

  return (
    <MuiButton
      variant={variant || 'contained'}
      className={`${classes.btn} ${btnStyles()} ${large && classes.largeBtn}`}
      {...other}
    >
      {children}
    </MuiButton>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    btn: {
      textTransform: 'none !important',
      fontWeight: 'bold !important',
    },
    containedDark: {
      backgroundColor: 'rgba(12, 101, 184, 1) !important',
    },
    containedLight: {
      backgroundColor: 'rgba(12, 101, 184, 0.1) !important',
      color: '#002f6c !important',
    },
    largeBtn: {
      padding: '10px 16px !important',
      fontSize: '16px !important',
    },
  })
);

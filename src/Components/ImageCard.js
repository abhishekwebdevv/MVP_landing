import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import Button from './Button';

export default function ImageCard({ img, heading, slogan }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img src={img} alt="dashboard and charts" className={classes.image} />
      <CardContent>
        <Typography fontSize="21px">{heading}</Typography>
        <Typography fontSize="14px" color="#595959" marginBottom="20px">
          {slogan}
        </Typography>
        <Button
          fullWidth
          variant="contained"
          subVariant="dark"
          disableElevation
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '100%',
      height: '100%',
      borderRadius: '16px !important',
      boxShadow: '3px 3px 9px 1px rgb(0 0 0 / 10%) !important',
    },
    image: {
      width: '100%',
    },
  })
);

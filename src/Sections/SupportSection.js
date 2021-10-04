import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import BooksImage from '../Assets/books.png';

export default function SupportSection() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Grid container padding="0px 450px">
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography fontSize="35px" fontWeight="bold">
            Dedicated implementation and A+ support.
          </Typography>
          <Typography fontSize="15px">
            With an average response time of 30 seconds, our world-class support
            team is here to help you solve virtually any problem. We even
            provide direct support for your teachers. And our dedicated
            implementation team ensures you’re set up for success from the
            moment you deploy GoGuardian.³
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={BooksImage} alt="devices" className={classes.image} />
        </Grid>
      </Grid>
    </section>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      backgroundColor: '#EEF7FF',
    },
    image: {
      height: '100%',
      width: '100%',
    },
  })
);

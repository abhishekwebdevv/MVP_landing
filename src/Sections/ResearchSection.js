import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import ResearchImage from '../Assets/research.png';

export default function ResearchSection() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Grid container padding="0px 450px">
        <Grid item xs={6}>
          <img src={ResearchImage} alt="devices" className={classes.image} />
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography fontSize="35px" fontWeight="bold">
            Backed by research, powered by learning.
          </Typography>
          <Typography fontSize="15px">
            As the world of digital learning accelerates, we believe it is
            critical to study and understand the impact of the digital learning
            experience on student outcomes. Our dedicated impact research team
            is working tirelessly to understand this impact, and how digital
            learning can be improved.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      padding: '56px 0px',
    },
    image: {
      height: '100%',
      width: '100%',
    },
  })
);

import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import ResearchImage from '../Assets/research.png';
import useBreakpoints from '../Components/useBreakpoints';

export default function ResearchSection() {
  const classes = useStyles();
  const { md, lg, xl } = useBreakpoints();

  return (
    <section className={classes.section}>
      <Grid container paddingX={xl ? '450px' : lg ? '350px' : '28px'}>
        <Grid
          item
          xs={12}
          md={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img src={ResearchImage} alt="devices" className={classes.image} />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography
            fontSize={md ? '35px' : '30px'}
            fontWeight="bold"
            align="center"
          >
            Backed by research, powered by learning.
          </Typography>
          <Typography fontSize="15px" align="center">
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
      maxHeight: '409px',
      width: '100%',
      maxWidth: '454px',
    },
  })
);

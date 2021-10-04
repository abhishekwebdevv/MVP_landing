import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import BooksImage from '../Assets/books.png';
import useBreakpoints from '../Components/useBreakpoints';

export default function SupportSection() {
  const classes = useStyles();
  const { md, lg } = useBreakpoints();

  return (
    <section className={classes.section}>
      <Grid
        container
        paddingX={lg ? '450px' : '28px'}
        paddingBottom={!md && '20px'}
      >
        <Grid
          item
          xs={12}
          md={7}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          order={!md && 2}
        >
          <Typography
            fontSize={md ? '35px' : '30px'}
            fontWeight="bold"
            align="center"
          >
            Dedicated implementation and A+ support.
          </Typography>
          <Typography fontSize="15px" align="center">
            With an average response time of 30 seconds, our world-class support
            team is here to help you solve virtually any problem. We even
            provide direct support for your teachers. And our dedicated
            implementation team ensures you’re set up for success from the
            moment you deploy GoGuardian.³
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          order={!md && 1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
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
      maxHeight: '409px',
      width: '100%',
      maxWidth: '454px',
    },
  })
);

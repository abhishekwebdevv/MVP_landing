import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography, Box } from '@mui/material';
import AirBaloon from '../Assets/airbaloon.png';
import { HiOutlineCheck } from 'react-icons/hi';
import Button from '../Components/Button';

const listItems = [
  'Dedicated implementation team',
  'Get up and running in minutes',
  'Free online product training',
];

export default function TrialSection() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Grid container padding="0px 450px">
        <Grid item xs={6}>
          <img src={AirBaloon} alt="devices" className={classes.image} />
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography fontSize="35px" fontWeight="bold">
            Start a free trial today
          </Typography>

          {listItems.map((item) => (
            <Box display="flex" alignItems="center" margin="5px 0px">
              <HiOutlineCheck color="#00a6e1" size={28} />
              <Typography fontSize="18px" margin="0px 10px">
                {item}
              </Typography>
            </Box>
          ))}

          <Box maxWidth="40%" margin="20px 0px">
            <Button
              fullWidth
              variant="contained"
              subVariant="dark"
              large
              disableElevation
            >
              Try It Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      padding: '84px 28px',
    },
    image: {
      height: '100%',
      width: '100%',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0px 500px',
      textAlign: 'center',
    },
  })
);

import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import DeviceImage from '../Assets/deviceImage.png';

export default function DeviceSection() {
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
            Any device, anywhere.
          </Typography>
          <Typography fontSize="15px">
            Seamlessly integrate multiple device types and platforms into your
            1:1 deployment. From Chromebooks and Apple devices to Windows and
            BYOD, GoGuardian’s suite of tools can help keep your students safe
            on any device.²
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={DeviceImage} alt="devices" className={classes.image} />
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

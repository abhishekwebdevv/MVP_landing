import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import DeviceImage from '../Assets/deviceImage.png';
import useBreakpoints from '../Components/useBreakpoints';

export default function DeviceSection() {
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
            Any device, anywhere.
          </Typography>
          <Typography fontSize="15px" align="center">
            Seamlessly integrate multiple device types and platforms into your
            1:1 deployment. From Chromebooks and Apple devices to Windows and
            BYOD, GoGuardian’s suite of tools can help keep your students safe
            on any device.²
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
      maxHeight: '409px',
      width: '100%',
      maxWidth: '454px',
    },
  })
);

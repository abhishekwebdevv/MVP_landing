import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography, Box, Divider } from '@mui/material';
import google from '../Assets/googlePartner.png';
import microsoft from '../Assets/microsoftPartner.png';
import student from '../Assets/studentPartner.jpg';
import gei from '../Assets/geiPartner.jpg';
import perpa from '../Assets/PerpaPartner.jpg';
import ida from '../Assets/idaPartner.jpg';
import useBreakpoints from '../Components/useBreakpoints';

const partners = [
  { img: google, height: '60px' },
  { img: microsoft, height: '45px' },
  { img: student, height: '50px' },
  { img: gei, height: '55px' },
  { img: perpa, height: '65px' },
  { img: ida, height: '60px' },
];

const information = [
  "1. GoGuardian Beacon serves as one data point of a school's overall suicide prevention program.",
  '2. Not all features are available on all devices. Inquire for more details.',
  '3. Certain limitations apply.',
];

export default function PartnerSection() {
  const classes = useStyles();
  const { lg } = useBreakpoints();

  return (
    <>
      <section className={classes.section}>
        <Grid container paddingX={lg ? '450px' : '28px'}>
          {partners.map((item) => (
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginY="20px"
              xs={6}
              md={2}
            >
              <img src={item.img} alt="logos" height={item.height} />
            </Grid>
          ))}
        </Grid>
      </section>
      <Box bgcolor="#fafafa" paddingY="70px" paddingX={lg ? '680px' : '28px'}>
        {information.map((item) => (
          <Typography fontSize="12px" color="#000000A6" lineHeight="25px">
            {item}
          </Typography>
        ))}
      </Box>
      <Divider />
    </>
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

import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import Button from '../Components/Button';
import bannerImage from '../Assets/bannerImage.png';
import feature1 from '../Assets/feature1.png';
import feature2 from '../Assets/feature2.png';
import feature3 from '../Assets/feature3.png';
import feature4 from '../Assets/feature4.png';
import feature5 from '../Assets/feature5.png';
import feature6 from '../Assets/feature6.png';

const featured = [
  {
    img: feature1,
    width: '120px',
  },
  {
    img: feature2,
    width: '90px',
  },
  {
    img: feature3,
    width: '120px',
  },
  {
    img: feature4,
    width: '65px',
  },
  {
    img: feature5,
    width: '110px',
  },
  {
    img: feature6,
    width: '39px',
  },
];

export default function BannerSection() {
  const classes = useStyles();

  return (
    <>
      <section className={classes.bannerSection}>
        <Grid container>
          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid container spacing={2} padding="0px 0px 0px 48px">
              <Grid item xs={12}>
                <Typography variant="h3" className="bold">
                  Safer Students.
                </Typography>
                <Typography variant="h3" className="bold">
                  Better Learning.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography className={classes.slogan}>
                  Take your digital learning program to new heights with
                  GoGuardian, the most powerful all-in-one suite to manage your
                  school’s 1:1 technology.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Button
                      large
                      fullWidth
                      disableElevation
                      variant="contained"
                      subVariant="dark"
                    >
                      Get more info
                    </Button>
                  </Grid>

                  <Grid item xs={4}>
                    <Button
                      large
                      fullWidth
                      disableElevation
                      variant="contained"
                      subVariant="light"
                    >
                      Explore the suite
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <img
              src={bannerImage}
              alt="people working"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </section>
      <section>
        <div className={classes.featured}>
          <Typography
            variant="button"
            align="center"
            letterSpacing="5px"
            color="#787878"
            fontSize={16}
            fontWeight="bold"
          >
            as featured in
          </Typography>
          <Grid container padding="0px 336px" alignItems="center" margin="10px">
            {featured.map((item) => (
              <Grid item xs={2} display="flex" justifyContent="center">
                <img src={item.img} alt="company logo" width={item.width} />
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    bannerSection: {
      padding: '8rem 20rem',
    },
    slogan: {
      color: 'rgba(0,0,0,.65)',
      fontSize: '1.25em !important',
    },
    image: {
      height: '100%',
      width: '100%',
    },
    featured: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import educator1 from '../Assets/educator1.png';
import educator2 from '../Assets/educator2.png';
import educator3 from '../Assets/educator3.png';
import educator4 from '../Assets/educator4.png';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const educators = [
  {
    img: educator1,
    width: '110px',
  },
  {
    img: educator2,
    width: '100px',
  },
  {
    img: educator3,
    width: '100px',
  },
  {
    img: educator4,
    width: '100px',
  },
];

export default function CarouselSection() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.header}>
        <Typography fontWeight="bold" color="#002f6c" fontSize="35px">
          We're in classrooms just like yours.
        </Typography>
        <Typography color="#474747" fontSize="17.5px" margin="14px 0px">
          22,000,000+ Students. 10,000+ Schools. 500,000+ Educators.
        </Typography>

        <Grid
          container
          display="flex"
          alignItems="center"
          spacing={3}
          margin="10px 0px"
        >
          {educators.map((item) => (
            <Grid item xs={3}>
              <img src={item.img} alt="educators logo" width={item.width} />
            </Grid>
          ))}
        </Grid>

        <div>
          <Carousel />
        </div>
      </div>
    </section>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      padding: '84px 28px',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0px 500px',
      textAlign: 'center',
    },
    image: {
      width: '110px',
    },
  })
);

import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';
import ImageCard from '../Components/ImageCard';

const images = [
  {
    img: image1,
    heading: 'Filtering & Monitoring',
    slogan:
      "Filter and monitor any device and any OS with K-12's most powerful content filter.",
  },
  {
    img: image2,
    heading: 'Classroom Management',
    slogan:
      "Eliminate distractions and connect with students by using K-12's  leading classroom management software.",
  },
  {
    img: image3,
    heading: 'Student Safety',
    slogan:
      'Identify students who are at risk of suicide or possible harm to others through threats, violence, and bullying.',
  },
];

export default function FeaturesSection() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.header}>
        <Typography fontWeight="bold" color="#002f6c" fontSize="35px">
          Powerful Alone. Better Together.
        </Typography>
        <Typography color="#474747" fontSize="17.5px" margin="14px 0px">
          Unify your filtering, classroom engagement, and school mental health
          tools into a single suite. GoGuardian’s suite of tools helps you
          maximize the learning potential of your 1:1 school technology program.
        </Typography>
      </div>
      <Grid container spacing={4} padding="0px 300px" marginTop="20px">
        {images.map((item) => (
          <Grid item xs={4}>
            <ImageCard
              img={item.img}
              heading={item.heading}
              slogan={item.slogan}
            />
          </Grid>
        ))}
      </Grid>
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
      margin: '0px 600px',
      textAlign: 'center',
    },
  })
);

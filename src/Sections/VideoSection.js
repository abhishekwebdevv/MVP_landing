import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import Iframe from 'react-iframe';

export default function VideoSection() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.videoContainer}>
        <Iframe
          url="http://www.youtube.com/embed/xDMP3i36naA"
          width="800px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    </section>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      backgroundColor: '#EEF7FF',
      padding: '84px 28px',
    },
    videoContainer: {
      margin: '0px 525px',
    },
  })
);

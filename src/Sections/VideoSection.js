import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import Iframe from 'react-iframe';
import { Box } from '@mui/material';
import useBreakpoints from '../Components/useBreakpoints';

export default function VideoSection() {
  const classes = useStyles();
  const { lg } = useBreakpoints();

  return (
    <section className={classes.section}>
      <Box
        maxWidth="800px"
        maxHeight="450px"
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Iframe
          url="http://www.youtube.com/embed/xDMP3i36naA"
          width="800px"
          height={lg ? '450px' : '350px'}
          display="initial"
          position="relative"
        />
      </Box>
    </section>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      backgroundColor: '#EEF7FF',
      padding: '84px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

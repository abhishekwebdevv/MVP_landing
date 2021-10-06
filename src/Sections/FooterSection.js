import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Divider, Grid, Typography } from '@mui/material';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from 'react-icons/ai';
import useBreakpoints from '../Components/useBreakpoints';

const solutionsList = [
  'Explore the Suite',
  'Filtering & Monitoring',
  'Classroom Management',
  'Video Conferencing',
  'Student Safety',
  'Network Filtering',
  'Asset Management',
  'For Windows',
  'Pricing',
];

const resourcesList = [
  'Federal Funding Resources',
  'Distance Learning Resources',
  'Self Harm & Suicide Prevention',
  'Glossary of Technical Terms',
  'Livestreams & Webinars',
  'Conferences & Events',
  'Success Stories',
];

const supportList = [
  'Help Center',
  'Video Training',
  'Status Page',
  'Website Terms',
  'Website Privacy Policy',
  'Contact Us',
];

const companyList = [
  'Careers',
  'Leadership Team',
  'Research & Insights',
  'Newsroom',
  'Brand Guidelines',
  'Channel Partner Portal',
  'Security Reporting Program',
  'Trust & Privacy',
];

const pearDeckList = [
  'Pear Deck Website',
  'Suite + Pear Deck Bundle',
  'Teacher + Pear Deck Bundle',
  'Pricing',
  'Resources',
  'Pear Deck Blog',
  'Sign in to Pear Deck',
];

export default function FooterSection() {
  const classes = useStyles();
  const { md, lg, xl } = useBreakpoints();

  return (
    <section className={classes.section}>
      <Grid container display="flex" justifyContent="center" flexWrap="wrap">
        <Grid item xs={12} sm={4} lg={2}>
          <Box padding="0px 30px">
            <Typography fontSize="14px" fontWeight="bold" marginBottom="15px">
              Solutions
            </Typography>
            {solutionsList.map((item) => (
              <Typography
                fontSize="11px"
                color="#939393"
                marginBottom="10px"
                className="link"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} lg={2}>
          <Box padding="0px 30px">
            <Typography fontSize="14px" fontWeight="bold" marginBottom="15px">
              Resources
            </Typography>
            {resourcesList.map((item) => (
              <Typography
                fontSize="11px"
                color="#939393"
                marginBottom="10px"
                className="link"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} lg={2}>
          <Box padding="0px 30px">
            <Typography fontSize="14px" fontWeight="bold" marginBottom="15px">
              Support
            </Typography>
            {supportList.map((item) => (
              <Typography
                fontSize="11px"
                color="#939393"
                marginBottom="10px"
                className="link"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} lg={2}>
          <Box padding="0px 30px">
            <Typography fontSize="14px" fontWeight="bold" marginBottom="15px">
              Company
            </Typography>
            {companyList.map((item) => (
              <Typography
                fontSize="11px"
                color="#939393"
                marginBottom="10px"
                className="link"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} lg={2}>
          <Box padding="0px 30px">
            <Typography fontSize="14px" fontWeight="bold" marginBottom="15px">
              Pear Deck
            </Typography>
            {pearDeckList.map((item) => (
              <Typography
                fontSize="11px"
                color="#939393"
                marginBottom="10px"
                className="link"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box paddingTop="20px" paddingX={xl ? '450px' : lg ? '350px' : '28px'}>
        <Divider />
        <Box
          display="flex"
          flexDirection={md ? 'row' : 'column'}
          justifyContent="space-between"
          alignItems="center"
          padding="18px 0px"
        >
          <Box>
            <AiFillFacebook className={classes.icon} />
            <AiOutlineInstagram className={classes.icon} />
            <AiOutlineTwitter className={classes.icon} />
            <AiFillYoutube className={classes.icon} />
            <AiFillLinkedin className={classes.icon} />
          </Box>
          <Typography fontSize="12px">
            © Liminex, Inc. doing business as GoGuardian. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </section>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      padding: '80px 16px 0px',
    },
    icon: {
      margin: '0px 10px',
      cursor: 'pointer',
    },
  })
);

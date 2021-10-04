import React from 'react';
import {
  AppBar,
  useScrollTrigger,
  Slide,
  Toolbar,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuList from './MenuList';
import { BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from './Button';
import useBreakpoints from './useBreakpoints';
import MobileDrawer from './MobileDrawer';

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default function Layout(props) {
  const { children } = props;
  const classes = useStyles();

  const { md, lg } = useBreakpoints();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Grid
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              container
            >
              <Grid item xs={4}>
                <Typography variant="h5" component="div" color="#0c65b8">
                  EdVision
                </Typography>
              </Grid>

              {md ? (
                <Grid item xs={8}>
                  <Grid container>
                    <Grid item xs={6} className={classes.menuItems}>
                      <MenuList text="Products" />
                      <MenuList text="Resources" />
                      <MenuList text="Company" />
                      <MenuList text="Careers" />
                    </Grid>

                    <Grid item xs={1} className={classes.iconContainer}>
                      <IconButton>
                        <BiSearch />
                      </IconButton>
                    </Grid>

                    <Grid item xs={5}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Button
                            variant="contained"
                            subVariant="light"
                            disableElevation
                          >
                            Sign In
                          </Button>
                        </Grid>

                        <Grid item xs={7}>
                          <Button
                            variant="contained"
                            subVariant="dark"
                            disableElevation
                          >
                            Request a trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  item
                  xs={1}
                >
                  {/* <GiHamburgerMenu /> */}
                  <MobileDrawer />
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {children}
    </>
  );
}

const useStyles = makeStyles({
  appbar: {
    backgroundColor: '#fff !important',
    boxShadow: '1px 1px 3px 0 rgb(0 0 0 / 15%) !important',
  },
  toolbar: {
    padding: '0rem 20rem !important',
    color: '#000',

    '@media(max-width:1200px)': {
      padding: ' 0rem 1rem !important',
    },
  },
  menuItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

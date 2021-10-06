import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  AppBar,
  Toolbar,
  Grid,
  Typography,
  TextField,
  ListItem,
  InputAdornment,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import Button from './Button';

export default function MobileDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [openProduct, setOpenProduct] = useState(false);
  const [openResource, setOpenResource] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProductClick = () => {
    setOpenProduct((prev) => !prev);
  };

  const handleResourceClick = () => {
    setOpenResource((prev) => !prev);
  };

  const handleCompanyClick = () => {
    setOpenCompany((prev) => !prev);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <GiHamburgerMenu />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="top"
        elevation={4}
        open={open}
        onClose={handleClose}
      >
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

              <Grid
                display="flex"
                alignItems="center"
                justifyContent="center"
                item
                xs={1}
              >
                <IconButton onClick={handleClose}>
                  <GiHamburgerMenu />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            marginTop: '50px',
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            disableRipple
            onClick={handleProductClick}
            className={classes.listItemButton}
          >
            <ListItemText primary="Product" />
            {openProduct ? <BsChevronUp /> : <BsChevronDown />}
          </ListItemButton>

          <Collapse in={openProduct} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItemButton}>
                <ListItemText primary="Careers" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            disableRipple
            onClick={handleResourceClick}
            className={classes.listItemButton}
          >
            <ListItemText primary="Resources" />
            {openResource ? <BsChevronUp /> : <BsChevronDown />}
          </ListItemButton>

          <Collapse in={openResource} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItemButton}>
                <ListItemText primary="Careers" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            disableRipple
            onClick={handleCompanyClick}
            className={classes.listItemButton}
          >
            <ListItemText primary="Company" />
            {openCompany ? <BsChevronUp /> : <BsChevronDown />}
          </ListItemButton>

          <Collapse in={openCompany} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItemButton}>
                <ListItemText primary="Careers" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton className={classes.listItemButton}>
            <ListItemText primary="Careers" />
          </ListItemButton>

          <ListItem disableRipple className={classes.listItemButton}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BiSearchAlt2 />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>

          <ListItem>
            <Button
              disableElevation
              fullWidth
              variant="contained"
              subVariant="light"
            >
              Sign In
            </Button>
          </ListItem>

          <ListItem>
            <Button
              disableElevation
              fullWidth
              variant="contained"
              subVariant="dark"
            >
              Request a trial
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

const useStyles = makeStyles({
  listItemButton: {
    // border: '1px solid black !important',
  },
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
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

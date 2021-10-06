import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import educator1 from '../Assets/educator1.png';
import educator2 from '../Assets/educator2.png';
import educator3 from '../Assets/educator3.png';
import educator4 from '../Assets/educator4.png';
import useBreakpoints from '../Components/useBreakpoints';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

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

const items = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis cumque cupiditate nesciunt distinctio, architecto natus maxime eos dolor obcaecati et nulla, dolorum earum, esse rem? Dolore unde magnam dicta?',
    name: 'Abhishek Singh Dhakad',
    designation: 'Teacher',
    address: 'nahi pata hame apna ghar ka pata',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis cumque cupiditate nesciunt distinctio, architecto natus maxime eos dolor obcaecati et nulla, dolorum earum, esse rem? Dolore unde magnam dicta?',
    name: 'Abhishek Singh Dhakad',
    designation: 'Teacher',
    address: 'nahi pata hame apna ghar ka pata',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis cumque cupiditate nesciunt distinctio, architecto natus maxime eos dolor obcaecati et nulla, dolorum earum, esse rem? Dolore unde magnam dicta?',
    name: 'Abhishek Singh Dhakad',
    designation: 'Teacher',
    address: 'nahi pata hame apna ghar ka pata',
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis cumque cupiditate nesciunt distinctio, architecto natus maxime eos dolor obcaecati et nulla, dolorum earum, esse rem? Dolore unde magnam dicta?',
    name: 'Abhishek Singh Dhakad',
    designation: 'Teacher',
    address: 'nahi pata hame apna ghar ka pata',
  },
  {
    id: 5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis cumque cupiditate nesciunt distinctio, architecto natus maxime eos dolor obcaecati et nulla, dolorum earum, esse rem? Dolore unde magnam dicta?',
    name: 'Abhishek Singh Dhakad',
    designation: 'Teacher',
    address: 'nahi pata hame apna ghar ka pata',
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ previous, next }) => (
  <Box width="100%">
    <Box display="flex" justifyContent="space-between">
      <IconButton onClick={previous}>
        <IoIosArrowRoundBack />
      </IconButton>
      <IconButton onClick={next}>
        <IoIosArrowRoundForward />
      </IconButton>
    </Box>
  </Box>
);

const CarouselCard = ({ text, name, designation, address, classes }) => (
  <Card className={classes.card}>
    <CardContent className={classes.content}>
      <Typography align="left" marginBottom="20px">
        {text}
      </Typography>
      <Typography className="bold" align="left">
        {name}
      </Typography>
      <Typography align="left">{designation}</Typography>
      <Typography align="left">{address}</Typography>
    </CardContent>
  </Card>
);

export default function CarouselSection() {
  const classes = useStyles();
  const { lg } = useBreakpoints();

  return (
    <section className={classes.section}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        marginX={lg ? '500px' : '28px'}
      >
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
            <Grid
              item
              xs={6}
              sm={3}
              display="flex"
              marginY="10px"
              justifyContent="center"
            >
              <img src={item.img} alt="educators logo" width={item.width} />
            </Grid>
          ))}
        </Grid>

        <Box width="100%">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            customButtonGroup={<ButtonGroup />}
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            keyBoardControl={true}
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            responsive={responsive}
            showDots={true}
            dotListClass={classes.dots}
            renderDotsOutside={true}
            slidesToSlide={1}
          >
            {items.map((item) => (
              <CarouselCard
                key={item.id}
                text={item.text}
                name={item.name}
                designation={item.designation}
                address={item.address}
                classes={classes}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
    </section>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      padding: '84px 28px',
    },
    image: {
      width: '110px',
    },
    card: {
      margin: '10px',
      boxShadow: '1px 1px 10px 0 rgb(0 0 0 / 15%) !important',
    },
    content: {
      padding: '60px !important',

      '@media(max-width:600px)': {
        padding: '20px !important',
      },
    },
    dots: {
      position: 'relative',
    },
  })
);

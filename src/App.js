import React, { Fragment } from 'react';
import { CssBaseline } from '@mui/material';
import './App.css';
import Layout from './Components/Layout';
import BannerSection from './Sections/BannerSection';
import FeaturesSection from './Sections/FeaturesSection';
import DeviceSection from './Sections/DeviceSection';
import ResearchSection from './Sections/ResearchSection';
import SupportSection from './Sections/SupportSection';
import CarouselSection from './Sections/CarouselSection';
import VideoSection from './Sections/VideoSection';
import TrialSection from './Sections/TrialSection';
// import PartnerSection from './Sections/PartnerSection';
// import FooterSection from './Sections/FooterSection';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Layout>
        <BannerSection />
        <FeaturesSection />
        <DeviceSection />
        <ResearchSection />
        <SupportSection />
        <CarouselSection />
        <VideoSection />
        <TrialSection />
        {/* <PartnerSection /> */}
        {/* <FooterSection /> */}
      </Layout>
    </Fragment>
  );
}

export default App;

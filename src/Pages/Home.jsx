import React from 'react';
import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import About from '../components/About/About';
import Specials from '../components/Specials/Specials';
import MonthlyHighlights from '../components/MonthlyHighlight/MonthlyHighlight';
import DiningPage from '../components/DinningPage/DinningPage';
import ReviewsPage from '../components/ReviewPage/ReviewPage';
import GalleryPage from '../components/GalleryPage/GalleryPage';
import ContactPage from '../components/ContactPage/ContactPage';
import FooterPage from '../components/FooterPage/FooterPage';


const Home = () => {
  return (
    <>
    <Hero/>
    <Menu/>
    <About/>
    <Specials/>
    <MonthlyHighlights/>
    <DiningPage/>
    <ReviewsPage/>
    <GalleryPage/>
    <ContactPage/>
    <FooterPage/>
    
    
    </>
  )
}

export default Home
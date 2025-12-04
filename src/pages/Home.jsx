// Home page - combines all homepage sections
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Pricing from '../components/Pricing';
import FeaturedWork from '../components/FeaturedWork';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <TechStack />
            <Pricing />
            {/* Ensure clear separation from testimonials */}
            <FeaturedWork />
            <Clients />
            <Contact />
        </>
    );
};

export default Home;

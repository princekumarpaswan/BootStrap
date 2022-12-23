import React from 'react'
import Navbar from "./Navbar";
import HeroSection from './hero';
import Store from './store';
import Card from './card';
import Footer from './footer';

const App = () => (
    <div>
        <Navbar />
        <HeroSection />
        <Store />
        <Card />
        <Footer />
    </div>
)

export default App
import React from 'react';
import Banner from './Banner';
import Skills from './Skills';
import Projects from './Projects';
import HireReason from './HireReason';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <HireReason></HireReason>
            <Contact></Contact>
        </div>
    );
};

export default Home;
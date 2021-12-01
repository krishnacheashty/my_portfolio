import React from 'react';
import { Container } from 'react-bootstrap';
import AboutMe from '../aboutMe/AboutMe';
import Banner from '../banner/Banner';
import Contact from '../contactme/Contact';
import Navtop from "../navbar/Navtop";
import Projects from '../projects/Projects';


const Home = () => {
    return (
        <Container>
            <Navtop></Navtop>
            <Banner></Banner>
            <AboutMe/>
            <Projects></Projects>
            <Contact></Contact>
        </Container>
    );
};

export default Home;
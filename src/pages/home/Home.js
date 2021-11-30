import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../banner/Banner';
import Contact from '../contactme/Contact';
import Navtop from "../navbar/Navtop";
import Projects from '../projects/Projects';


const Home = () => {
    return (
        <Container>
            <Navtop></Navtop>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </Container>
    );
};

export default Home;
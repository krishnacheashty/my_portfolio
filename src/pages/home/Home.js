import React from 'react';
import { Container } from 'react-bootstrap';
import AboutMe from '../aboutMe/AboutMe';
import Banner from '../banner/Banner';
import Navtop from "../navbar/Navtop";
import Projects from '../projects/Projects';



const Home = () => {
    return (
        <Container>
            <Navtop></Navtop>
            <Banner></Banner>
            <AboutMe/>
            <Projects/> 
                 
        </Container>
    );
};

export default Home;
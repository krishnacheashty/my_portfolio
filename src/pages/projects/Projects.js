import React from 'react';
import { Container } from 'react-bootstrap';
import FirstProjects from './firstprojects/FirstProjects'
import SecondProjects from './secondProjects/SecondProjects';
import ThirdProjects from './thirdProjects/ThirdProjects';
import img from '../../images/divider1.png'


const Projects = () => {
    return (
        <div className="firstProjects">
            <div>
                <h2 className="my-2"> MY PROJECTS </h2>
                <div><img src={img} alt="" /></div>
            </div>
            <FirstProjects ></FirstProjects>
            <SecondProjects ></SecondProjects>
            <ThirdProjects ></ThirdProjects>
        </div>
    );
};

export default Projects;
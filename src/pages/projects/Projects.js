import React from 'react';
import FirstProjects from './firstprojects/FirstProjects'
import SecondProjects from './secondProjects/SecondProjects';
import ThirdProjects from './thirdProjects/ThirdProjects';
const Projects = () => {
    return (
        <div>
            <div><h2 className="my-5"> MY PROJECTS </h2></div>
            <FirstProjects ></FirstProjects>
            <SecondProjects ></SecondProjects>
            <ThirdProjects ></ThirdProjects>
        </div>
    );
};

export default Projects;
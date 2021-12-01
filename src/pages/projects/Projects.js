import React from 'react';
import FirstProjects from './firstprojects/FirstProjects'
import SecondProjects from './secondProjects/SecondProjects';
import ThirdProjects from './thirdProjects/ThirdProjects';
import img from '../../images/divider1.png'


const Projects = () => {
    return (
        <div className="firstProjects">
            <div style={{textAlign:'center' ,marginBottom:'20px',padding:'20px 0 20px 0'}}>
                <h2 className="pt-5"> MY PROJECTS </h2>
                <div><img src={img} alt="" /></div>
            </div>
            <FirstProjects ></FirstProjects>
            <SecondProjects ></SecondProjects>
            <ThirdProjects ></ThirdProjects>
        </div>
    );
};

export default Projects;
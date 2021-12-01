import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from "../../images/my-bg2.png"
const AboutMe = () => {
    return (
        <div  className="firstProjects text-white ">
            <Row>
                <Col sx={12}md={6}>
                    <div style={{marginTop:'30%',color:'#F5DEB2',marginLeft:'30px'}}><h3> HI, I AM KRISHNA</h3></div>
                    <div>
                        <ul>
                            <h6 style={{textAlign:'start'}}>
                                I am MERN stack Developer.My passion is making ideas come to life, be it working solo, as part of a team or leading a team of fellow developers.

                            </h6>
                            <h6  style={{textAlign:'start'}}>My go-to technologies are React and Node.js, and I have completed a wide range of projects using them. Those are not the only two libraries/frameworks I'm familiar with though, and I'm always happy to discuss my client's needs and find the best solutions for them.</h6>
                        </ul>
                    </div>
                </Col>
                <Col sx={12}md={6}>
                    <img src={img} style={{width:'300px',marginTop:'25%'}} alt="" />
                </Col>

            </Row>
        </div>
    );
};

export default AboutMe;
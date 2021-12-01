import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import img from '../../images/my-bg.png'


const Banner = () => {
  return (
    <Container className="back">

    <Row className="back">
      <Col sm={12}md={6} className="upperContainer">
          <img src={img} className="img-my" alt="" />
      </Col>
      <Col sm={12}md={6} className="upperContainer">
        <h3 class="text-center textWe">Hi, I AM KRISHNA CHEASHTY</h3>
        <h4 class="text-center textW">Frontend Developer </h4>
        <Button variant="primary" style={{margin:'5% 0% 0 33%'}}><a href="https://drive.google.com/file/d/18foGfCiSH0N3tGBqimmrNnrmUbK6_XFH/view?usp=sharing"className="buttonD" >Download Resume</a></Button>
        
      </Col>
      
    </Row>
    </Container>   
  );
};

export default Banner;
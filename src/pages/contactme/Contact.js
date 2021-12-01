import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './contact.css'
import ContactUs from './ContactUs';
import img from '../../images/divider1.png'
import Navtop from '../navbar/Navtop';

const Contact = () => {
    return (
        <Container className="pro-text ">
             <Navtop/>
            <div style={{textAlign:'center'}}>
                <h3 className="text-center text-dark pt-5">CONTACT ME</h3>
                <img src={img} alt="" />
            </div>
            <Row className="full-container">
                <Col sm={12}md={6}>
                <div className="container mx-auto flex sm:flex-nowrap flex-wrap up-con">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)", }}
                        src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    
                    </div>
                </div>
                </Col>
                <Col sm={12}md={6} className="low-con" >
                    <ContactUs/>
                    
                </Col>
            
            </Row>
        </Container> 
    );
};

export default Contact;
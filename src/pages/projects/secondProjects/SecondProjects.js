import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";

const SecondProjects = () => {
    return (
        <div className="firstProjects" >
            <Row className='mb-5 py-5 '>
                <Col sx={12} md={6}>
                    <div className='my-5'> <h3>Projects Detail</h3> </div>
                        <div>
                        <h4> EYE-CARE-CENTER Eye-Care Service Relative Website</h4>
                            <ul>
                                <h6>Overview : </h6>
                                <li> Firebase Authentication system with google login and services details also. </li>
                                <li>Only Login users can take services here, see Blogs at blog page and have opportunite routing others pages.</li>
                                <li>This site is responsive for Mobile Devices, Tablets, and Others.</li>
                                <li>This side mainly focused in Eye care Related.Here you can Appointment eye doctor</li>
                                <li>TECHNOLOGY USER : BootStrap 5, React ,CSS 3, HTML 5 , Firebase,React Router.</li>
                            </ul>
                            
                        </div>
                        <div>
                            <a href="https://github.com/krishnacheashty/eyecare-hospital"><button>Github link</button></a>
                            <a href="https://eye-care-center-a25de.web.app/"><button> Live site</button></a>
                    </div>
                </Col>
                <Col sx={12} md={6}>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12" className="mb-3">
                            <img src="https://i.ibb.co/k2NQfD0/eye1.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            </MDBRow>
                            <MDBRow>
                            <MDBCol lg="4" md="12" className="mb-3">
                            <img src="https://i.ibb.co/wzy2z3f/eye2.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            <MDBCol lg="4" md="6" className="mb-3">
                                <img src="https://i.ibb.co/FKWnwLw/eye3.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            <MDBCol lg="4" md="6" className="mb-3">
                                <img src="https://i.ibb.co/gjR1xSm/eye4.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" className="mb-3">
                            <img src="https://i.ibb.co/dP4gmbd/eye7.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            <MDBCol md="6" className="mb-3">
                            <img src="https://i.ibb.co/6tSstDX/eye6.png" className="img-fluid z-depth-1" alt="" / >
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </Col>
            </Row>
        </div>
    );
};

export default SecondProjects;
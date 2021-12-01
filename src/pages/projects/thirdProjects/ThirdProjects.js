import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";

const ThirdProjects = () => {
    return (
            <div className="firstProjects">
                <Row  >
                <Col sx={12} md={6}>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12" className="mb-3 doit">
                            <img src="https://i.ibb.co/HhkQCpS/travel1.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            </MDBRow>
                            <MDBRow>
                            <MDBCol lg="4" md="12" className="mb-3">
                            <img src="https://i.ibb.co/WnKTxYK/travel2.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            <MDBCol lg="4" md="6" className="mb-3">
                                <img src="https://i.ibb.co/MpS2K7S/travel3.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            <MDBCol lg="4" md="6" className="mb-3">
                                <img src="https://i.ibb.co/cyJQLL6/travel4.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" className="mb-3">
                            <img src="https://i.ibb.co/yQPWYRF/travel5.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            <MDBCol md="6" className="mb-3">
                            <img src="https://i.ibb.co/ZM0jGd8/travel6.png" className="img-fluid z-depth-1" alt="" / >
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </Col>
                <Col sx={12} md={6}>
                <div className='my-5'> <h3>Projects Detail</h3> </div>
                    <div>
                    <h4> TRAVEL-UNDER-SEA Travel Related Website</h4>
                        <ul>
                        <h6>Overview : </h6>
                            <li>It is an online Travel Related website with MARN stack.</li>
                            <li>Insistence clients can add Travel Related Services. Added Services showed MY-ORDER page. Clients also remove Order here. </li>
                            <li>Users can see their own order And others' orders at the Manage All Order page. </li>
                            <li>This side mainly focused in Travel under sea Related.Here you can Booking events .</li>
                            <li>TECHNOLOGY USER : BootStrap 5, React ,CSS 3, Firebase, MongoDB, Expressjs, Nodejs. </li>
                        </ul>
                         
                    </div>
                    <div>
                        <a href="https://github.com/krishnacheashty/tourism-client-side"><button>Github link</button></a>
                        <a href="https://travel-under-sea.web.app/"><button> Live site</button></a>
                    </div>
                
                </Col>
            </Row>
            </div>
    );
};

export default ThirdProjects;
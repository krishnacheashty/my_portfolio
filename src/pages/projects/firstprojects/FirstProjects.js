import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import './firstProjects.css'

const FirstProjects = () => {
    return (
        <div className="firstProjects" >
            <Row>
                <Col sx={12} md={6}>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12" className="mb-3">
                            <img src="https://i.ibb.co/bs78TKc/diamond1.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            </MDBRow>
                            <MDBRow>
                            <MDBCol lg="4" md="12" className="mb-3">
                            <img src="https://i.ibb.co/HpTNwYF/diamond2.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            <MDBCol lg="4" md="6" className="mb-3">
                                <img src="https://i.ibb.co/qyfZmx7/diamond-4.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            <MDBCol lg="4" md="6" className="mb-3">
                                <img src="https://i.ibb.co/jfJFNmm/screenshot4.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" className="mb-3">
                            <img src="https://i.ibb.co/ySKY1kF/diamond-login.png" className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                            <MDBCol md="6" className="mb-3">
                            <img src="https://i.ibb.co/xJTdhKq/daimond-dash.png" className="img-fluid z-depth-1" alt="" / >
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </Col>
                <Col sx={12} md={6}>
                <div  className='my-5'> <h3>Projects Detail</h3> </div>
                    <div>
                        <h4> DIAMOND WOULD Necklace selling website</h4>
                        <ul>
                            <h6>Overview : </h6>
                            <li> Built Firebase Authentication system with email, password, and google login for users and admin. </li>
                            <li>Existence Users can order products. Those orders are consistent on the MY-ORDER page at Dashboard. Have the option to review products too.</li>
                            <li>Admin can make admin, add new products, cancel orders from MANAGE ALL ORDER page</li>
                            <li>Admin can add new products and review also.</li>
                            <li>TECHNOLOGY USER: MUI, React, CSS 3, Firebase, MongoDB, Expressjs, Nodejs.</li>
                        </ul>
                         
                    </div>
                    <div>
                        <a href="https://github.com/krishnacheashty/Diamond-would"><button>Github link</button></a>
                        <a href="https://diamond-house-1024c.web.app/"><button> Live site</button></a>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default FirstProjects;



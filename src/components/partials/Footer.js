import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    componentDidMount() {
        const $ = window.$;
        $('body, html').animate({ scrollTop: 0 });
    }
    render() {
        return (
            <Container fluid="true">
                <Row className="footer-container justify-content-center">
                    <Col md="auto">
                        <div className="footer-engaging-container">
                            <span className="footer-engaging-text">
                                engaging mobile.
                            </span>
                        </div>

                        <div id="desktop-footer">

                            <div className="footer-nav-container">
                                <Navbar collapseOnSelect className="footer-navbar justify-content-center">
                                    <Navbar.Brand className="footer-nav-link">
                                        <Nav className="mr-auto">
                                            <NavLink to="/about" className="nav-link">About Us</NavLink>
                                            <NavLink to="/team" className="nav-link">Team</NavLink>
                                            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                                            <NavLink to="/?adFeatures=true" className="nav-link">Ad Features</NavLink>
                                            <NavLink to="/targeting" className="nav-link">Targeting</NavLink>
                                        </Nav>
                                    </Navbar.Brand>
                                </Navbar>
                            </div>

                            <div className="footer-address">
                                <span>
                                    Esentepe mah. Büyükdere Cad. Ecza Sok. Safter Is Merkezi No:6/1 Levent Sisli - Istanbul<br />
                                    <a href="mailto:team@themediamove.com">team@themediamove.com</a>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <div id="mobile-footer-container">

                        <Row className="justify-content-center">
                            <Col>
                                <NavLink to="/" className="mobile-navlink nav-link">Home Page</NavLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col sm="auto" md="auto">
                                <NavLink to="/about" className="mobile-navlink nav-link">About</NavLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col>
                                <NavLink to="/team" className="mobile-navlink nav-link">Team</NavLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col>
                                <NavLink to="/gallery" className="mobile-navlink nav-link">Gallery</NavLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col>
                                <NavLink to="/?adFeatures=true" className="mobile-navlink nav-link">Ad Features</NavLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col>
                                <NavLink to="/targeting" className="mobile-navlink nav-link">Targeting</NavLink>
                            </Col>
                        </Row>

                        <Row className="justify-content-center" style={{ marginTop: 30, textAlign: "center" }}>
                            <Col>
                                <div className="contact-address">
                                    <span style={{ marginRight: 0 }}>Address</span>
                                    <p style={{ marginRight: 0 }}>Esentepe mah. Büyükdere Cad. Ecza <br />Sok. Safter Is Merkezi No:6/1 Levent <br />SISLI - ISTANBUL</p>
                                </div>
                                <div className="contact-email">
                                    <span style={{ marginRight: 0 }}>e-mail</span>
                                    <p style={{ marginRight: 0 }}>team@themediamove.com</p>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Row>


            </Container>
        )
    }
}

export default Footer;
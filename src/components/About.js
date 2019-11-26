import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


import Header from './partials/Header';
import Footer from './partials/Footer';

const $ = window.$;
class About extends React.Component {

    openContact() {

        $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
            $('.nav-contact').trigger('click');
        });
    }


    render() {
        return (
            <div style={{ background: "#F8FCFF" }}>
                <Header headerTitle="About us" />

                <Container className="about">
                    <Row className="justify-content-md-auto">
                        <Col md="auto">
                            <div className="about-title">
                                <span>
                                    Move is the highest quality mobile advertising and marketing platform
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-auto">
                        <Col md="auto">
                            <div className="about-text">
                                <span>
                                    Operating as Turkey's first mobile advertising sales house since 2009, Move was Turkcell’s exclusive ad sales house for 4 years for its mobile display media services (except permission based database of Turkcell), and the turnover of business has shown a success of over 100 % increase each year.
                                </span>
                            </div>
                        </Col>
                    </Row>


                </Container>

                <Container fluid={true} className="about-image">
                    <Row className="about-image-container justify-content-center">
                        <Col className="about-image-col" md="auto" sm="auto" xs="auto" >
                            <div className="about-advertiser">
                                <div className="about-image-text">
                                    <span>Advertiser</span>
                                    <p>
                                        It is now a rapidly growing sector providing brands, agencies and marketers the opportunity to connect with consumers beyond traditional and digital media directly on their mobile phones.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="about-image-col" md="auto" sm="auto" xs="auto" >
                            <div className="about-we" >
                                <div className="about-image-text">
                                    <span>We</span>
                                    <p>
                                        Turkey's first mobile ad salehous Move, operating since 2009. Move enable best revenue to publishers with successful business modal and provides unique creative services to brands and agencies.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="about-image-col" md="auto" sm="auto" xs="auto" >
                            <div className="about-publisher">
                                <div className="about-image-text">
                                    <span>Publisher</span>
                                    <p>
                                        In mobile media World of Turkey, Move is the first company to do mobile campaigns and magnified the market. Move also aims high ad revenue for its publishers with its strong team.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="about-contact-form">
                    <Row className="justify-content-md-auto">
                        <Col md="auto" className="about-contact-text">
                            <span>The Media Move founded with the goal of reinventing mobile advertising.
                            </span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Col className="about-contact-button" md="auto">
                                <Button onClick={e => this.openContact()} type="button">Contact</Button>
                            </Col>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </div>
        )
    }
}

export default About;
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Header from './partials/Header';
import Footer from './partials/Footer';

class Team extends React.Component {
    render() {
        return (
            <div>
                <Header headerTitle="Team" />

                <Container>
                    <Row className="team-images justify-content-center">
                        <Col md="auto" sm="auto" xs="auto">
                            <div className="team-image-container">
                                <Image src={require('./../assets/images/team/tezcan.png')} alt="Tezcan İsarlı" />
                                <span>Tezcan İsarlı</span>
                                <p>Founding Partner</p>
                            </div>
                        </Col>
                        <Col md="auto" sm="auto" xs="auto">
                            <div className="team-image-container">
                                <Image src={require('./../assets/images/team/ceylan.png')} alt="Ceylan Erdoğru" />
                                <span>Ceylan Erdoğru</span>
                                <p>Head of Sales </p>
                            </div>
                        </Col>
                        <Col md="auto" sm="auto" xs="auto">
                            <div className="team-image-container">
                                <Image src={require('./../assets/images/team/sertac.png')} alt="Halit Sertaç Uzun" />
                                <span>Halit Sertaç Uzun</span>
                                <p>Head of Operation</p>
                            </div>
                        </Col>
                        <Col md="auto" sm="auto" xs="auto">
                            <div className="team-image-container">
                                <Image src={require('./../assets/images/team/musti.png')} alt="Mustafa Okurlu" />
                                <span>Mustafa Okurlu</span>
                                <p>Sales Manager</p>
                            </div>
                        </Col>
                        <Col md="auto" sm="auto" xs="auto">
                            <div className="team-image-container">
                                <Image src={require('./../assets/images/team/eren.png')} alt="Eren Aksu" />
                                <span>Eren Aksu</span>
                                <p>Sales Manager</p>
                            </div>
                        </Col>
                        <Col md="auto" sm="auto" xs="auto">
                            <div className="team-image-container">
                                <Image src={require('./../assets/images/team/bahar.png')} alt="Bahar Ertul User" />
                                <span>Bahar Ertul User</span>
                                <p>Senior Ad Ops.</p>
                            </div>
                        </Col>
                        <Col md="auto" sm="auto" xs="auto">
                            <div className="team-image-container">
                                <Image src={require('./../assets/images/team/koray.png')} alt="Koray Şen" />
                                <span>Koray Şen</span>
                                <p>Project Manager</p>
                            </div>
                        </Col>
                        <Col md="auto" sm="auto" xs="auto">
                            <div className="team-image-container">
                                <Image src={require('./../assets/images/team/beyto.png')} alt="Beytullah Öztunç" />
                                <span>Beytullah Öztunç</span>
                                <p>Software Developer</p>
                            </div>
                        </Col>
                        <Col md="auto" sm="auto" xs="auto">
                            <div className="team-image-container">
                                <Image src={require('./../assets/images/team/hatice.png')} alt="Mustafa Okurlu" />
                                <span>Hatice Şeker</span>
                                <p>Finance Manager</p>
                            </div>
                        </Col>
                         

                    </Row>
                </Container>

                <Footer />

            </div>
        )
    }
}

export default Team;
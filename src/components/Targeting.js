import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';


import Header from './partials/Header';
import Footer from './partials/Footer';
import DSP from './targeting/dsp';
import Addressable from './targeting/addressable';
import MicroLocation from './targeting/microLocation';
import TargetingData from './targeting/targetingData';
import Native from './targeting/native';


const $ = window.$;
class Targeting extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            getTarget: []
        }

    }
    openContact() {
        $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
            $('.nav-contact').trigger('click');
        });
    }

    showTarget(targetName) {

        var targetClass = [];

        switch (targetName) {
            case "dsp":
                targetClass.push(<DSP key="dsp" />);
                $('.about-contact-text span').text('Adform has provided an integrated Buy Side Platform for the buying, managing, and serving of digital advertising');
                break;
            case "addressable":
                targetClass.push(<Addressable key="Addressable" />);
                $('.about-contact-text span').text('Admongrel is an end-to-end service provider for the fast growing Connected TV industry');
                break;
            case "microLocation":
                targetClass.push(<MicroLocation key="MicroLocation" />);
                $('.about-contact-text span').text('Helping you to reach the right person on-the-go by acting on real world and behavioral data of audiences based on their location visits.');
                break;
            case "data":
                targetClass.push(<TargetingData key="TargetingData" />);
                $('.about-contact-text span').text('Transform your data into your greatest asset!');
                break;
            case "native":
                targetClass.push(<Native key="Native" />)
                break;
            default:
                break;
        }

        this.setState({
            getTarget: targetClass
        });

        $('html, body').animate({
            scrollTop: $('.targeting').offset().top
        });
    }


    componentDidMount() {
        this.setState({
            getTarget: <DSP />
        });
        $('button').click(function () {
            $("button").removeClass('active');
            $(this).addClass("active");
        })
    }
    render() {


        return (
            <div>
                <Header headerTitle="Targeting" />

                <Container className="targeting">
                    <Row>
                        <Col md="auto">
                            <Table className="gallery-button-table" responsive>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <Button className="targeting-buttons active bigSize" onClick={e => this.showTarget("dsp")} type="button">DSP</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <Button className="targeting-buttons" onClick={e => this.showTarget("addressable")} type="button">Addressable TV</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <Button className="targeting-buttons" onClick={e => this.showTarget("microLocation")} type="button">Micro Location</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <Button className="targeting-buttons bigSize" onClick={e => this.showTarget("data")} type="button">Data</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <Button className="targeting-buttons bigSize" onClick={e => this.showTarget("native")} type="button">Native</Button>
                                            </div>
                                        </td>

                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    {this.state.getTarget}

                </Container>

                <Container className="about-contact-form" fluid={true} style={{ background: "#F8FCFF" }}>
                    <Row className="justify-content-center" style={{ paddingTop: 97 }}>
                        <Col md={6} className="about-contact-text">
                            <span>Adform has provided an integrated Buy Side Platform for the buying, managing, and serving of digital advertising.
                            </span>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="about-contact-button" md={6}>
                            <Button onClick={e => this.openContact()} type="button">Contact</Button>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </div>
        )
    }
}

export default Targeting;
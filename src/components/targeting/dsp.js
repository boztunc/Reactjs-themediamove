import React from 'react';
import { Row, Col, } from 'react-bootstrap';


class DSP extends React.Component {
    render() {
        return (

            <div>


                <Row>
                    <Col className="targeting-info-header">
                        <div className="targeting-logo-test">
                            <img src={require('./../../assets/images/targeting/logo_adform.png')} alt="adform logo" />
                        </div>
                        <h1>Adform</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="targeting-info-text">
                        <p>
                            Our brand-new self-service audience discovery experience is now available through the Adform DSP.  In line with our commitment to delivering you the most intuitive and efficient buying process in the industry, we’ve made finding, understanding, and activating the right audiences easier.  The Audience Marketplace draws on the expertise and resources of our world-class Data Management Platform (DMP) to further enhance your ability to make data-driven decisions in the Adform Demand Side Platform (DSP).
                            </p>
                    </Col>
                </Row>

                <Row>
                    <Col className="targeting-info-text" style={{ marginTop: 48 }}>
                        <p style={{ fontWeight: "bold" }}>
                            Targeting options
                        </p>
                        <h1>all data, all platforms, no barrıers</h1>
                    </Col>
                </Row>

                <Row className="targeting-info-detail">
                    <Col>
                        Forex financier<br />
                        Betters<br />
                        Home owners / Leaseholders <br />
                        Car and home, insurance owners<br />
                        Employed, looking for a job<br />
                        Car - motorcycle repaired people <br />
                        Occupational groups
                        </Col>
                    <Col>
                        Driver licence owners<br />
                        Students <br />
                        Music and film lovers <br />
                        Entrepreneur<br />
                        Travellers <br />
                        Fan of a football team<br />
                        Technology interesters
                        </Col>
                    <Col>
                        Level of income<br />
                        Book lovers<br />
                        Car owners <br />
                        Pet owners <br />
                        Credit card users<br />
                        Vegans <br />
                        Newly mothers
                        </Col>
                </Row>
            </div>
        )
    }
}

export default DSP;
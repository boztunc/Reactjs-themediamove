import React from 'react';

import { Row, Col } from 'react-bootstrap';

class TargetingData extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="targeting-info-header">
                        <div className="targeting-logo-test">
                            <img src={require('./../../assets/images/targeting/logo_onedio.png')} alt="adform logo" />
                        </div>
                        <h1>Onedio.com</h1>
                    </Col>
                </Row>

                <Row>
                    <Col className="targeting-data-info">
                        <p className="targeting-data-header">
                            MANY OF THE ONEDIO.COM TESTS ARE ASKED PURELY FOR ENTERTAINMENT PURPOSES. BUT NOT ALL OUR TEST
    QUESTIONS ARE ENTIRELY EMOTIONAL.
                        </p>
                        <p>
                            We use the questions we place between onedio tests in user profiling. We enrich these profiles with content consumed by users on Onedio. The information we receive from Facebook from registered users is added to these profiles and as a result; onedio com user segments are emerging.
                        </p>
                        <p>
                            You can contact our sales team to find out Onedio.com segments available to you for use in your campaigns.
                        </p>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default TargetingData;
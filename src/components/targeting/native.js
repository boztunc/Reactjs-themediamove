import React from 'react';
import { Row, Col, } from 'react-bootstrap';

class Native extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="targeting-info-header">
                        <div className="targeting-logo-test">
                            <img src={require('./../../assets/images/targeting/logo_taboola.png')} alt="adform logo" />
                        </div>
                        <h1>Taboola</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="targeting-info-text">
                        <p style={{ fontSize: 15 }}>
                            Taboola links news, essays, blogs, videos and other content which online users are interested in, by with relevant content, and allows consumers to discover them online. The system uses machine learning and examines hundreds of signals to determine exactly what is of interest to each user.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="targeting-info-text">
                        <h1>What is Native advertising?</h1>
                        <p style={{ fontSize: 15 }}>
                            Native advertising is the type of paid media in which the ad experience follows the natural user experience as the way the ad is placed. There are 2 faces of native advertising: content providing and correct distrubition and this way; right content meets with correct target audiance at the right time.
                        </p>
                    </Col>
                </Row>

                <Row style={{ marginTop: 52 }}>
                    <Col className="taboola-image">
                        <img src={require('./../../assets/images/targeting/native_taboola.svg')} alt="native taboola" />
                    </Col>
                    <Col className="targeting-info-text" style={{ alignContent: "center", alignItems: "center", display: "grid" }} >
                        <h1>Sample liste of publishers</h1>
                        <ul>
                            <li>- Milliyet</li>
                            <li>- Gazete Vatan</li>
                            <li>- All MSN Channels (Hotmail, Skype, Outlook vb.)</li>
                            <li>- Maçkolik,  Sahadan</li>
                            <li>- Turkuaz Media Group</li>
                            <li>- Onedio</li>
                            <li>- Goal.com</li>
                            <li>- Storia</li>
                            <li>- Indigo Magazine</li>
                            <li>- Bloomberg, Busines Insider</li>
                            <li>- Dailymotion</li>
                        </ul>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Native;
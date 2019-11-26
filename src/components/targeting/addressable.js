import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';


class addressable extends React.Component {
    render() {
        return (

            <div>


                <Row>
                    <Col className="targeting-info-header">
                        <div className="targeting-logo-test">
                            <img src={require('./../../assets/images/targeting/logo_admongrel.png')} alt="adform logo" />
                        </div>
                        <h1>Admongrel</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="targeting-info-text" style={{ marginTop: 48 }}>
                        <h1>Reinvent TV Ads!</h1>
                        <p>
                            The Admongrel creating interactive TV channel applications in which viewers can interact using just their remote controls.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className="targeting-info-text">
                        <h1 className="label-text">Interact within TV</h1>
                        <p style={{ color: "#355058", fontSize: 16 }}>
                            Here is how we do Addressable TV and Interactive Ads.
                        </p>
                    </Col>
                </Row>


                <Row className="targeting-info-detail">
                    <Col>
                        <h1>SWITCHES TO TV CHANNEL</h1>
                        <span>
                            Your campaign will be show up immediately after users switch the channel. So we make sure that the audience is there and ready to interact.
                        </span>
                    </Col>
                    <Col>
                        <h1>YOUR ADS WILL BE SHOW UP</h1>
                        <span>
                            Your campaign will be show up when user switches the channel after 5 seconds. The campaign displays for 8 seconds.
                        </span>
                    </Col>
                    <Col>
                        <h1>INTERACTS WITH AD</h1>
                        <span>
                            User can be interact by just hit a button. User directs to main page when red button(usually red) hitted
                        </span>
                    </Col>
                    <Col>
                        <h1>TAKES ACTION</h1>
                        <span>
                            Users can view gallery , reach additional information and send own phone number.
                        </span>
                    </Col>
                </Row>

                <Row>
                    <Col className="targeting-info-text" style={{ marginTop: 35 }}>
                        <h1 className="label-text">INTERACTIVE AD FORMATS</h1>
                    </Col>
                </Row>

                <Row>
                    <Col className="admongrel-ad-formats">
                        <h1>BUTTOM BAND</h1>
                        <img src={require('./../../assets/images/targeting/admongrel_altbant.png')} alt="admongrel alt bant" />
                        <h1>
                            Standard Interactive TV Band Display
                        </h1>
                        <div style={{ width: 264 }}>
                            <p>
                                Format similar to traditional TV ads.
                           </p>
                            <p>
                                Banner is displayed 5 seconds after consumer start watching the channel.
                             </p>

                            <p>
                                Viewers can interact with the visual, and reach your brand or your campaign’s detailed information.
                            </p>

                        </div>
                    </Col>
                    <Col className="admongrel-ad-formats">
                        <h1>L-BAND</h1>
                        <img src={require('./../../assets/images/targeting/admongrel_lbant.png')} alt="admongrel L bant" />
                        <h1>
                            Display with Extended Promotional Area
                        </h1>
                        <div style={{ width: 285 }}>
                            <p>
                                Extended format up to 35% of the screen.
                           </p>
                            <p>
                                Banner is displayed 5 seconds after consumer start watching the channel.
                             </p>

                            <p>
                                Viewers can interact with the visual and it is the best format for awareness campaigns.
                            </p>
                        </div>
                    </Col>
                    <Col className="admongrel-ad-formats">
                        <h1>CUSTOMARY APPLICATIONS</h1>
                        <img src={require('./../../assets/images/targeting/admongreal_ozeluygulamalar.png')} alt="admongrel özel uygulama" />
                        <h1>
                            Customized applications
                        </h1>
                        <div style={{ width: 256 }}>
                            <p>
                                Customized and enriched application for your brand.
                           </p>
                            <p>
                                Applications can contain photo gallery, data collection and interactive areas.
                             </p>

                            <p>
                                Audiances can leave their mobile number to attend surveys, competitions and other mechanisms.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="admongrel-yudum-egem">
                        <img src={require('./../../assets/images/targeting/admongrel_yudumegemden.png')} alt="admongrel tv" />
                        <h1>Yudum Egemden Timecoded Spot Sync</h1>
                    </Col>
                </Row>

                <Row>
                    <Col className="targeting-info-text" style={{ marginTop: 100 }}>
                        <h1 className="label-text">TV CHANNEL LIST</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Table responsive className="admongrel-tv-channels" style={{ marginTop: 30 }}>
                            <tbody>
                                <tr>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_fox.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_cnn.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_trt1.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_kanald.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_kanal7.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_eurod.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_ulketv.png')} alt="tv channels" />
                                    </td>

                                </tr>
                                <tr>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_tvnet.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_trtbelgesel.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_trtturk.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_trtspor.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_trtavaz.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_tv85.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_tv8int.png')} alt="tv channels" />
                                    </td>

                                </tr>
                                <tr>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_taytv.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_teve2.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_dreamtv.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_dreamturk.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_sinematurk.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_sinema2.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_sinemaaile.png')} alt="tv channels" />
                                    </td>


                                </tr>
                                <tr>
                                    <td colSpan="1"></td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_sinemaaksiyon.png')} alt="tv channels" />
                                    </td>
                                    <td >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_sinema1001.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_filtv.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_kidz.png')} alt="tv channels" />
                                    </td>
                                    <td  >
                                        <img src={require('./../../assets/images/targeting/tvchannels/targeting_kanal_dizitvhd.png')} alt="tv channels" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default addressable;
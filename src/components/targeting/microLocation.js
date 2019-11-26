import React from 'react';

import { Row, Col, Table } from 'react-bootstrap';

class microLocation extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="targeting-info-header">
                        <div className="targeting-logo-test">
                            <img src={require('./../../assets/images/targeting/logo_blesh.png')} alt="adform logo" />
                        </div>
                        <h1>Blesh</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="targeting-info-text">
                        <p style={{ fontSize: 15, color: "#355058" }}>
                            Reaching target audiance at spesified place via beacon and geofence. Audiance is segmented by their location history and app usage habbits. With the script placed on the Mobile Site, retargeting mobile site visitors with push notificataion at offline location. Meanwhile, we are retargeting users at the specific location at online over DMP.
                        </p>
                    </Col>
                </Row>

                <Row style={{ marginTop: 50 }}>
                    <Col className="targeting-blesh-info">
                        <h1>What Do We Do?</h1>
                        <span>
                            Thru Applications that Blesh sdk code entegraded, reaching targeted audiances via micro location by push notifications Over 100.000+ beacon located in Turkey 6 mio unique reach monthly
                        </span>
                        <h1 style={{ marginTop: 44 }}>Benefits of Push Notification</h1>
                        <span>
                            100 visibility on the home screen Hundreds of unread sms Coming through user's; preferred apps In terms of message's opening mechanics incorrect clickthrough rate close to zero
                        </span>
                        <h1 style={{ marginTop: 40 }}>How Does Blesh Ads Work?</h1>
                        <span>
                            100 visibility on the home screen Hundreds of unread sms Coming through user's; preferred apps In terms of message's opening mechanics incorrect clickthrough rate close to zero
                        </span>
                    </Col>
                    <Col className="blesh-phone">
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_pn.png')} alt="blesh micro location" />
                    </Col>
                    <Col className="targeting-blesh-graphic">
                        <div style={{ fontSize: 12, color: "#355058", height: 80, width: 150 }}>
                            There are 100.000 Beacon devices in Turkey. Beacon devices and locations targeted.
                        </div>

                        <img style={{ width: 126, height: 104 }} src={require('./../../assets/images/targeting/mikrolokasyon_beacon.png')} alt=" mikrolokasyon beacon" />
                        <img style={{ marginTop: -66, marginLeft: -20 }} src={require('./../../assets/images/targeting/mikrolokasyon_line2.png')} alt=" mikrolokasyon beacon" />
                        <div>
                            <img style={{ width: 186, height: 186, marginTop: -89, marginLeft: -90 }} src={require('./../../assets/images/targeting/mikrolokasyon_geofence.png')} alt=" mikrolokasyon beacon" />
                            <p style={{ width: 186, marginLeft: -90, textAlign: "center", marginTop: 12 }}>Targeted audiance is queried thru applicatons with Blesh sdk codes by location, Beacon devices, bluetooth and geofence.</p>
                        </div>
                        <img style={{ width: 103, height: 140, zIndex: -1, marginTop: -78, marginLeft: -39 }} src={require('./../../assets/images/targeting/mikrolokasyon_line1.png')} alt=" mikrolokasyon beacon" />

                    </Col>
                </Row>

                <Row>
                    <Col className="targeting-blesh-list">
                        <h1>Apps with Blesh Sdk Code</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="targeting-blesh-list img">
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_milliyet.png')} alt="milliyet" />
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_cnnturk.png')} alt="cnn türk" />
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_tv8.png')} alt="tv8" />
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_sabah.png')} alt="sabah" />
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_iddaa.png')} alt="iddaa" />
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_fotomac.png')} alt="fotomaç" />
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_acunn.png')} alt="acunn" />
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_startv.png')} alt="star tv" />
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_kanald.png')} alt="kanald" />
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_kaavefali.png')} alt="kahve falı" />
                    </Col>
                </Row>

                <Row>
                    <Col className="targeting-info-header" style={{ marginTop: 59 }}>
                        <div className="targeting-logo-test">
                            <img src={require('./../../assets/images/targeting/logo_veloxity.png')} alt="adform logo" />
                        </div>
                        <h1>Veloxity</h1>
                    </Col>
                </Row>

                <Row>
                    <Col md="7" className="targeting-blesh-info" style={{ marginTop: 38 }}>
                        <h1>Why Veloxity?</h1>
                        <span>
                            Since we've always found a way to target what you want, event it seems impossible! To get to know your own customers To get to know new audiences similar to your own customers To get to know potential customers who prefer competing brands over your place To connect with the API and enrich your own data
                        </span>
                        <h1 style={{ marginTop: 28 }}>Competitive Advantage</h1>
                        <Table className="targeting-veloxity-list" style={{ marginTop: 27 }}>
                            <tbody>
                                <tr>
                                    <td>
                                        CTR
                                    </td>
                                    <td style={{ color: "#101010", fontFamily: "Roboto-Medium" }}>
                                        %14
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fraud Rate
                                    </td>
                                    <td style={{ color: "#101010", fontFamily: "Roboto-Medium" }}>
                                        ZERO
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Micro-lokasyon capability
                                    </td>
                                    <td style={{ color: "#101010", fontFamily: "Roboto-Medium" }}>
                                        <img src={require('./../../assets/images/targeting/icon_okay.svg')} alt="icon okay" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Targeting a real-time moment of need
                                    </td>
                                    <td>
                                        <img src={require('./../../assets/images/targeting/icon_okay.svg')} alt="icon okay" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Brand-specific Consumer insight analysis
                                    </td>
                                    <td>
                                        <img src={require('./../../assets/images/targeting/icon_okay.svg')} alt="icon okay" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Competitive targeting
                                    </td>
                                    <td>
                                        <img src={require('./../../assets/images/targeting/icon_okay.svg')} alt="icon okay" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        360 real life habits
                                    </td>
                                    <td style={{ color: "#101010", fontFamily: "Roboto-Medium" }}>
                                        FULL
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Data standardization
                                    </td>
                                    <td>
                                        <img src={require('./../../assets/images/targeting/icon_okay.svg')} alt="icon okay" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>


                    </Col>

                    <Col className="targeting-veloxity-headers">
                        <p style={{ fontSize: 63, marginLeft: 93, marginTop: 60 }}>100+ brand</p>
                        <p style={{ fontSize: 80, marginLeft: -70 }}>%14+ ctr</p>
                        <p style={{ fontSize: 71, marginLeft: 15 }}>350+ campaign</p>
                        <p style={{ fontSize: 56, marginLeft: -40 }}>50m+ impression</p>
                    </Col>
                </Row>

                <Row>
                    <Col className="targeting-veloxity-okay">
                        <div>
                            <img src={require('./../../assets/images/targeting/icon_okay.svg')} alt="okay icon" />
                            <p>Correct targeting</p>
                        </div>
                    </Col>
                    <Col className="targeting-veloxity-okay">
                        <div>
                            <img src={require('./../../assets/images/targeting/icon_okay.svg')} alt="okay icon" />
                            <p>Correct timing</p>
                        </div>
                    </Col>
                    <Col className="targeting-veloxity-okay">
                        <div>
                            <img src={require('./../../assets/images/targeting/icon_okay.svg')} alt="okay icon" />
                            <p>Correct guidance</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="targeting-veloxity-adunits">
                        <h1>Ad Spaces</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="targeting-veloxity-push">
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_veloxity_android1.svg')} alt="veloxity android" />
                        <div className="targeting-veloxity-push-container">
                            <h1>ANDROID POPUP</h1>

                            <span>
                                <p>Our ads on android phones, appear on the phone&#39;s home screen directly on the right without the user having to open an app on devices</p>
                                <p>Users who press the OK button are redirected to the relevant page</p>
                                <p>Video also can be played.</p>
                                <p>Each user has the possibility of encountering our ads up to 2 times a month</p>
                            </span>
                        </div>


                    </Col>
                    <Col className="targeting-veloxity-push">
                        <img src={require('./../../assets/images/targeting/mikrolokasyon_veloxity_android2.svg')} alt="veloxity android" />
                        <div className="targeting-veloxity-push-container" style={{ width: 286 }}>
                            <span>
                                <h1>rich notificataion</h1>
                                <p>Notification will be sent from one of our apps within our Network.</p>
                                <p>When campaign-interested users click on the notification, a campaign message is sent in the area that opens downwards. Re-clicking user is redirected to the related page.</p>
                                <p>Pricing is made when the user sees the larger version of the image.</p>
                                <p>Video or gif also can be played.</p>
                            </span>
                        </div>


                    </Col>
                </Row>
            </div>
        )
    }
}

export default microLocation;
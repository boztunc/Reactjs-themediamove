import React from 'react';
import { Container, Row, Col, Media, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Header from './partials/Header';
import RichmediaSlider from './partials/RichmediaSlider';
import Footer from './partials/Footer';

const $ = window.$;
var adformatFrame = "";
class Home extends React.Component {

    componentDidMount() {
        var getUrl = new URLSearchParams(window.location.search);
        var adFeatures = getUrl.has("adFeatures");

        if (adFeatures) {
            $('html, body').animate({
                scrollTop: $('.adformat-bg').offset().top - 40
            }, 1000);
        }

        var windowWidth = window.screen.width;

        if (windowWidth >= 320 && windowWidth <= 330)
            $('.adformat-bg').css('height', '920px');
        else if (windowWidth > 330 && windowWidth <= 415)
            $('.adformat-bg').css('height', '650px');
        else if (windowWidth > 415 && windowWidth <= 428)
            $('.adformat-bg').css('height', '690px');
        else if (windowWidth > 415 && windowWidth <= 504)
            $('.adformat-bg').css('height', '640px');
        else if (windowWidth > 504 && windowWidth < 768)
            $('.adformat-bg').css('height', '560px');

        adformatFrame = $('#adformat-video-frame');
    }

    showAdFormats(videoId) {
        adformatFrame.fadeOut();
        adformatFrame.attr('src', "https://player.vimeo.com/video/" + videoId + "?title=0&amp;amp;byline=0&amp;amp;portrait=0&amp;amp;color=FFFFFF&amp;amp;autoplay=1&amp;amp;loop=0&amp;amp;wmode=transparent;");
        adformatFrame.fadeIn(1000);
    }


    render() {
        return (
            <div className="home">

                <Header home={true} headerTitle="Home" />

                <Container>
                    <div className="right-shape">
                        <img src={require('./../assets/images/right-shape.png')} alt="shape background" />
                    </div>
                    <div className="left-shape">
                        <img src={require('./../assets/images/left-shape.png')} alt="shape background" />
                    </div>
                    <Row className="home-phone justify-content-md-center">
                        <Col md="auto">
                            <img src={require('./../assets/images/home-iphone.png')} alt="iphone template" />
                        </Col>
                    </Row>

                    <div className="publisher-text-big">
                        <span>Publishers</span>
                    </div>

                    <Row className="publisher-text-container justify-content-md-auto">
                        <Col md="auto">
                            <span className="publisher-text-header">Publishers</span> <br />

                            <span className="publisher-text-alt">In mobile media World of Turkey, Move is the first company to do mobile campaigns and magnified the market. Move also aims high ad revenue for its publishers with its strong team.</span>
                        </Col>
                    </Row>


                    <Table responsive>
                        <tbody>
                            <tr>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/0.png')} alt="akşam logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/1.png')} alt="basketball logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/2.png')} alt="birbilenesor logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/3.png')} alt="blesh logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/4.png')} alt="cokokunan logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/5.png')} alt="diziler logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/6.png')} alt="fragmanlar logo" />
                                </td>
                            </tr>
                            <tr>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/7.png')} alt="güneş logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/8.png')} alt="hisse.net logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/9.png')} alt="investing logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/10.png')} alt="istanbul.net.tr logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/11.png')} alt="kelimeavı logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/12.png')} alt="maxicep logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/13.png')} alt="onedio logo" />
                                </td>
                            </tr>
                            <tr>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/passo.png')} alt="passo.com.tr logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/14.png')} alt="sporx logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/15.png')} alt="star logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/16.png')} alt="t24 logo" />
                                </td>
                                <td className="publisher-container">
                                    <img src={require('./../assets/images/publishers-logo/17.png')} alt="veloxity logo" />
                                </td>
                            </tr>
                            <tr className="publisher-container">
                                <td colSpan={2}>
                                    <p>*in alphabetical order.</p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>


                    <div className="adformat-bg"></div>
                    <div className="adformat-header-big">
                        <span>Featured Ad Formats</span>
                    </div>
                    <Row className="justify-content-md-auto">
                        <Col className="adformat-header">
                            <span>Featured Ad Formats</span>
                        </Col>
                    </Row>
                    <Row className="adformat-container justify-content-md-auto">

                        <Col className="adformat-left-box" md="auto">


                            <div className="adformat-button-box" tabIndex={1} onClick={e => { this.showAdFormats("308066858"); }} >
                                <span>Rich Media</span>
                            </div>
                            <p className="adformat-alt-text">
                                Move Rich Media ads enable advertisers to deliver fully interactive experiences to users with nearly limitless possibilities.
                            </p>

                            <div className="adformat-button-box" tabIndex={2} onClick={e => { this.showAdFormats("365245814"); }}>
                                <span> Expandable<br />Funnel</span>
                            </div>
                            <p className="adformat-alt-text">
                                With expandable Funnel Banner brands get the chance for the ultimate expression of creativity, taking full advantage of today’s technology and the user’s expectations.
                            </p>

                            <div className="adformat-button-box" tabIndex={3} onClick={e => { this.showAdFormats("289639101"); }}>
                                <span>Interactive <br />Micro Site</span>
                            </div>
                            <p className="adformat-alt-text">
                                Microsites can be used to help brands achieve a number of things. For example, some companies have used them to highlight a campaign or target specific buyer personas.
                            </p>
                        </Col>

                        <Col className="adformat-center-box" md="auto">
                            <img src={require('./../assets/images/adformat-phone.png')} alt="ad formats" />
                            <iframe id="adformat-video-frame" width="260" height="462" frameBorder="0" title="adformat-frame" allow="autoplay;" src="" ></iframe>
                        </Col>

                        <Col className="adformat-right-box" md="auto">
                            <div className="adformat-button-box" tabIndex={4} onClick={e => { this.showAdFormats("365258045"); }}>
                                <span>Video</span>
                            </div>
                            <p className="adformat-alt-text">
                                All video ads are optimized for device type, connection speed and other variables in real-time to higher conversions.
                            </p>

                            <div className="adformat-button-box" tabIndex={5} onClick={e => { this.showAdFormats("289854277"); }}>
                                <span>Gamification</span>
                            </div>
                            <p className="adformat-alt-text">
                            Typically as an online marketing technique to encourage engagement with a product or service.
                            </p>

                            <div className="adformat-button-box" tabIndex={6} onClick={e => { this.showAdFormats("289857321"); }}>
                                <span>Parallax</span>
                            </div>
                            <p className="adformat-alt-text">
                                Parallax banner is basically, moving images on the full page ad modal according to the user's scroll movement.
                            </p>
                        </Col>
                    </Row>

                    <div className="mobile-adformat-container">
                        <Row className="justify-content-center mobile-adformat-bgcolor">
                            <Col style={{ display: "-webkit-box" }}>
                                <div className="adformat-button-box" tabIndex={1}>
                                    <span>Rich Media</span>
                                </div>
                                <p className="adformat-alt-text">
                                    Move Rich Media ads enable advertisers to deliver fully interactive experiences to users with nearly limitless possibilities.
                                </p>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mobile-adformat-bgcolor">
                            <Col style={{ display: "-webkit-box" }}>
                                <div className="adformat-button-box" tabIndex={2}>
                                    <span>Expandable <br />Funnel</span>
                                </div>
                                <p className="adformat-alt-text">
                                    With expandable Funnel Banner brands get the chance for the ultimate expression of creativity, taking full advantage of today’s technology and the user’s expectations.
                            </p>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mobile-adformat-bgcolor">
                            <Col style={{ display: "-webkit-box" }}>
                                <div className="adformat-button-box" tabIndex={3}>
                                    <span>Interactive <br />Micro Site</span>
                                </div>
                                <p className="adformat-alt-text">
                                    Microsites can be used to help brands achieve a number of things. For example, some companies have used them to highlight a campaign or target specific buyer personas.
                            </p>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mobile-adformat-bgcolor">
                            <Col style={{ display: "-webkit-box" }}>
                                <div className="adformat-button-box" tabIndex={4}>
                                    <span>Video</span>
                                </div>
                                <p className="adformat-alt-text">
                                    All video ads are optimized for device type, connection speed and other variables in real-time to higher conversions.
                            </p>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mobile-adformat-bgcolor">
                            <Col style={{ display: "-webkit-box" }}>
                                <div className="adformat-button-box" tabIndex={5}>
                                    <span>Gamification</span>
                                </div>
                                <p className="adformat-alt-text">
                                    Typically as an online marketing technique to encourage engagement with a product or service.
                            </p>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mobile-adformat-bgcolor">
                            <Col style={{ display: "-webkit-box" }}>
                                <div className="adformat-button-box" tabIndex={6}>
                                    <span>Parallax</span>
                                </div>
                                <p className="adformat-alt-text">
                                    Parallax banner is basically, moving images on the full page ad modal according to the user's scroll movement.
                            </p>
                            </Col>
                        </Row>
                    </div>


                    <div className="showcase-header-big">
                        <span>Showcase</span>
                    </div>
                    <Row className="justify-content-md-auto">
                        <Col className="showcase-header">
                            <span>Showcase</span>
                        </Col>
                    </Row>
                </Container>

                <RichmediaSlider />

                <Container>
                    <Row>
                        <Col className="richmedia-text">
                            <span>
                                Rich Media drives dramatically higher engagement and user response over traditional static ads.
                        </span>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="green-button" xs="auto" sm="auto" md="auto">
                            <NavLink to="/gallery">Rich Media Gallery</NavLink>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="auto" sm="auto" xs="auto">
                            <Media className="partners-container">
                                <span className="mr-3"> PARTNERS </span>
                                <Media.Body>
                                    <img src={require('./../assets/images/logo-carat.png')} className="mr-5" alt="carat" />
                                    <img src={require('./../assets/images/logo-ingage.svg')} className="mr-5" alt="ingage" />
                                    <img src={require('./../assets/images/logo-groupm.svg')} className="mr-5" alt="groupM" />
                                    <img src={require('./../assets/images/logo-omd.svg')} className="mr-5" alt="OMD" />
                                    <img src={require('./../assets/images/logo-sem.png')} className="mr-5" alt="SEM" />
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </div>
        )
    }
}

export default Home;
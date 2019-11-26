import React from 'react';
import { Container, Row, Col, Media, NavbarBrand, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from './../../assets/images/move_logo.svg';

const $ = window.$;
class Header extends React.Component {

    componentDidMount() {


        $('.dropdown:eq(0)').mouseover(function () {
            $('.dropdown-menu:eq(0)').addClass("show");
        }).mouseout(function () {
            $('.dropdown-menu:eq(0)').removeClass("show");
        });
        $('.dropdown:eq(1)').mouseover(function () {
            $('.dropdown-menu:eq(1)').addClass("show");
        }).mouseout(function () {
            $('.dropdown-menu:eq(1)').removeClass("show");
        });

        $('.nav-contact').click(function () {
            $('body').css('overflow', 'hidden');
            $('.contact-container').css('display', 'block');
            $('.contact-container').animate({ right: 0 });
            $('.transparent-bg').css('height', window.outerHeight);
            $('.transparent-bg').fadeIn();
        });

        $('.transparent-bg').click(function () {

            $('.contact-container').animate({ right: -542 }, function () {
                $('body').css('overflow', '');
                $('.contact-container').css('display', 'none');
                $('.transparent-bg').css('height', 0);
                $('.transparent-bg').fadeOut();
            });
        });

        $('#contact-close').click(function () {

            $('.contact-container').animate({ right: -542 }, function () {
                $('body').css('overflow', '');
                $('.contact-container').css('display', 'none');
                $('.transparent-bg').css('height', 0);
                $('.transparent-bg').fadeOut();
            });
        });

        if (!this.props.home) {
            $('#header-home').fadeOut();
            $('.header').animate({ height: 230 });
            $('.header-bg').animate({ height: 230 });
            $('.header-gradiant').animate({ height: 230 }, function () {
                $('#header-subpages').fadeIn();
            });

        }
        if (window.screen.width < 1000) {
            $('#frameMap').prop('height', '350').prop('width', '315');
            $('.contact-email').find('p').eq(0).css('font-size', '15px');
            $('.contact-address').find('p').eq(0).css('font-size', '15px');
        }



        $('.mobile-navlink').click(function () {
            $('#mobile-header-container').animate({
                height: '0'
            }, 1000, () => {
                $('#mobile-header-container').css('display', 'none');
            });
        })

    }

    openHamburger() {
        $('#mobileFrameMap').prop('width', window.innerWidth - 100);
        $('#mobile-header-container').css('display', 'block');
        $('#mobile-header-container').animate({
            height: '100%'
        }, 1000);

    }
    closeHamburger() {
        $('#mobile-header-container').animate({
            height: '0'
        }, 1000, () => {
            $('#mobile-header-container').css('display', 'none');
        });
    }
    render() {



        return (
            <div>
                <Helmet>
                    <title>The Media Move | {this.props.headerTitle}</title>
                </Helmet>
                <div className="contact-container">
                    <div className="contact-header">
                        <span>Contact</span>
                        <img src={(require('./../../assets/images/close.svg'))} id="contact-close" alt="close button" />
                    </div>
                    <div className="contact-address">
                        <span>Address</span>
                        <p>Esentepe mah. Büyükdere Cad. Ecza <br />Sok. Safter Is Merkezi No:6/1 Levent <br />SISLI - ISTANBUL</p>
                    </div>
                    <div className="contact-email">
                        <span>e-mail</span>
                        <p>team@themediamove.com</p>
                    </div>
                    <div className="contact-maps">
                        <iframe id="frameMap" src="https://maps.google.com/maps?q=safter%20i%C5%9F%20han%C4%B1&t=&z=15&ie=UTF8&iwloc=&output=embed" title="contact map" width="482" height="511" frameBorder="0"></iframe>
                    </div>
                </div>

                <Container id="mobile-header-container" fluid>

                    <Row className="justify-content-end" style={{ textAlign: "right", padding: "20px" }}>
                        <Col>
                            <img onClick={this.closeHamburger} src={require('./../../assets/images/close.svg')} alt="close button" />
                        </Col>
                    </Row>
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
                            <div className="contact-maps">
                                <iframe id="mobileFrameMap" src="https://maps.google.com/maps?q=safter%20i%C5%9F%20han%C4%B1&t=&z=15&ie=UTF8&iwloc=&output=embed" title="contact map" frameBorder="0"></iframe>
                            </div>
                        </Col>
                    </Row>

                </Container>

                <div className="transparent-bg"></div>
                <div className="header">

                    <div className="header-bg"></div>
                    <div className="header-gradiant"></div>
                    <div className="header-container">



                        <Container fluid={true}>
                            <Row id="desktop-navbar">
                                <Col>
                                    <Navbar collapseOnSelect={true} expand="lg">
                                        <NavbarBrand>
                                            <Media>
                                                <NavLink to="/" className="nav-link"> <img src={logo} alt="Move Logo" /> </NavLink>
                                            </Media>
                                        </NavbarBrand>
                                        <Navbar.Collapse className="justify-content-end">
                                            <NavLink to="/" className="nav-link">Home Page</NavLink>
                                            <NavDropdown title="Company" id="nav-dropdown-company">
                                                <NavLink to="/about" className="dropdown-item">About</NavLink>
                                                <NavLink to="/team" className="dropdown-item">Team</NavLink>
                                            </NavDropdown>
                                            <NavDropdown title="Advertiser" id="nav-dropdown-publisher">
                                                <NavLink to="/gallery" className="dropdown-item">Gallery</NavLink>
                                                <NavLink to="/?adFeatures=true" className="dropdown-item">Ad Features</NavLink>
                                                <NavLink to="/targeting" className="dropdown-item">Targeting</NavLink>
                                            </NavDropdown>
                                            <Nav.Link className="nav-contact"> Contact </Nav.Link>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </Col>
                            </Row>

                            <Row id="mobile-navbar">
                                <Col>
                                    <Navbar collapseOnSelect={true}>
                                        <NavbarBrand>
                                            <Media>
                                                <NavLink to="/" className="mobile-logo nav-link"> <img src={logo} alt="Move Logo" /> </NavLink>
                                            </Media>
                                        </NavbarBrand>
                                        <Navbar.Collapse className="justify-content-end">
                                            <Media>
                                                <img onClick={this.openHamburger} src={require('./../../assets/images/menu-icon.png')} alt="hamburger" />
                                            </Media>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </Col>
                            </Row>




                            <div id="header-home">

                                <Row className="justify-content-md-center">
                                    <Col md="auto" className="header-text-container">
                                        <span className="header-text">The Future of Mobile Advertising</span><br />
                                        <span className="publisher-text-alt" style={{ color: "white" }}>Move provides the most advanced targeting and optimization technology on the market.</span>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center">
                                    <Col md="auto" sm="auto" xs="auto">
                                        <div className="header-menu-box">
                                            <img src={require('./../../assets/images/menu-phone.svg')} alt="programmatic" />
                                            <span>Programmatic</span>
                                        </div>
                                    </Col>
                                    <Col md="auto" sm="auto" xs="auto">
                                        <div className="header-menu-box">
                                            <img src={require('./../../assets/images/menu-project.svg')} alt="project" />
                                            <span>Digital Project</span>
                                        </div>
                                    </Col>
                                    <Col md="auto" sm="auto" xs="auto">
                                        <div className="header-menu-box">
                                            <img src={require('./../../assets/images/menu-data.svg')} alt="data" />
                                            <span>Data</span>
                                        </div>
                                    </Col>

                                    <Col md="auto" sm="auto" xs="auto">
                                        <div className="header-menu-box">
                                            <img src={require('./../../assets/images/menu-richmedia.svg')} alt="richmedia" />
                                            <span>Rich Media</span>
                                        </div>
                                    </Col>
                                    <Col md="auto" sm="auto" xs="auto">
                                        <div className="header-menu-box">
                                            <img src={require('./../../assets/images/menu-dooh.svg')} alt="digital outdoor" />
                                            <span>DOOH</span>
                                        </div>
                                    </Col>
                                    <Col md="auto" sm="auto" xs="auto">
                                        <div className="header-menu-box">
                                            <img src={require('./../../assets/images/menu-targeting.svg')} alt="targeting" />
                                            <span>Targeting</span>
                                        </div>
                                    </Col>


                                </Row>


                                <Row className="mouse-icon justify-content-center">
                                    <Col md="auto" sm="auto" xs="auto">
                                        <img style={{ width: 26 }} src={require('./../../assets/images/header-mouse.svg')} alt="mouse icon" />
                                    </Col>
                                </Row>
                            </div>


                            <div id="header-subpages">
                                <span className="subheader-big">{this.props.headerTitle}</span>
                                <Row className="justify-content-center">
                                    <Col className="subheader-small" md="7">
                                        <span>{this.props.headerTitle}</span>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>


            </div>
        )

    }
}

export default Header;
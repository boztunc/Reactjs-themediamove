import React from 'react';
import { Container, Row, Col, Button, Table, Modal } from 'react-bootstrap';
import Header from './partials/Header';
import Footer from './partials/Footer';


const $ = window.$;
class Gallery extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            col: [],
            show: false,
            richmediaList: [],
            modalTargetTitle: "",
            modalTargetProject: "",
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.modalContent = this.modalContent.bind(this);

    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow(e) {
        this.setState({
            show: true,
            modalTargetTitle: $(e.currentTarget).attr('title'),
            modalTargetProject: $(e.currentTarget).data("projectname")
        });

    }

    hoverEffect() {

        var richmediaPoster = "";
        $('.richmedia-image').mouseover(function () {
            richmediaPoster = $(this).children().eq(1);
            richmediaPoster.css('opacity', '0.30');
            $(this).addClass('scaleIn');
            $(this).children().eq(0).attr('style', 'display:block !important');
            $(this).children().eq(2).attr('style', 'display:block !important');
            $(this).children().eq(0).mouseover(function () {
                richmediaPoster.css('opacity', '0.30');
            });

        }).mouseleave(function () {
            richmediaPoster.css('opacity', '1');
            $(this).children().eq(0).attr('style', 'display:none !important');
            $(this).children().eq(2).attr('style', 'display:none !important');
            $(this).removeClass('scaleIn');
        });
    }

    modalContent() {

        var projectName = this.state.modalTargetProject,
            projectTitle = this.state.modalTargetTitle,
            json = this.state.richmediaList;

        var modalVideo = $('#modal-video'),
            modalTitle = $('#modal-title'),
            modalProjectName = $('#modal-projectName'),
            modalDescription = $('#modal-description'),
            modalQRCode = $('#modal-QRCode');

        modalVideo.attr('src', "https://player.vimeo.com/video/" + json[projectTitle][projectName]["videoLink"] + "?title=0&amp;byline=0&amp;portrait=0&amp;color=FFFFFF&amp;autoplay=0&amp;loop=0&amp;wmode=transparent");
        if (window.screen.width >= 320 && window.screen.width < 350)
            modalVideo.attr('width', "250");
        else if (window.screen.width >= 350 && window.screen.width < 400)
            modalVideo.attr('width', "300");
        modalTitle.text(projectTitle);
        modalProjectName.text(projectName);
        modalDescription.text(json[projectTitle][projectName]["description"]);

        var qrCodeUrl = json[projectTitle][projectName]["QRCode"];
        if (qrCodeUrl.includes('http') || qrCodeUrl.includes('https')) {
            $('.gallery-modal-QR').css('display', 'grid');
            modalQRCode.attr('src', qrCodeUrl);
        }
    }



    getRichmedia(project) {
        $('#richmedia-container').empty();
        const GalleryImagesJson = "https://movecdn.firebaseio.com/gallery/" + project + ".json";


        fetch(GalleryImagesJson).then(res => res.json())
            .then(response => {

                var titles = [];
                var projectNames = [];
                titles = Object.keys(response);
                var cols = this.state.col;

                this.setState({
                    richmediaList: response
                })


                for (var i = 0; i < titles.length; i++) {

                    projectNames = Object.keys(response[titles[i]]);

                    for (var k = 0; k < projectNames.length; k++) {

                        var title = titles[i],
                            projectName = projectNames[k],
                            image = response[titles[i]][projectNames[k]]["image"],
                            randomKeys = parseInt(Date.now() + Math.random());


                        cols.push(
                            <Col md="auto" sm="auto" xs="auto" key={randomKeys}>
                                <div className="gallery-richmedia-box" title={title} data-projectname={projectName} onClick={this.handleShow}>
                                    <div className="richmedia-image">
                                        <img className="inspect-image" src={require('./../assets/images/inspect.svg')} alt="inspect button" />
                                        <img className="richmedia-poster" src={image} alt={title} />
                                        <p className="gallery-richmedia-info">{projectName}</p>
                                    </div>
                                </div>
                            </Col>
                        )

                        this.setState({
                            col: cols
                        });

                    }

                }

                this.hoverEffect();
            });

    }

    componentDidMount() {
        this.hoverEffect();
        this.getRichmedia('interactiveRM');
    }




    render() {

        return (
            <div>
                <Header headerTitle="Gallery" />

                <Container className="gallery" fluid={true}>
                    <Row className="justify-content-center">
                        <Col md="7">
                            <div className="about-title">
                                <span>
                                    Move has not only done classic mobile display and video advertising but also re-imagined industry standards.
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="7">
                            <div className="about-text">
                                <span>
                                    Move advertisers can choose from a variety of ad formats designed to engage with users in an impactful and meaningful way. Move has not only re-imagined industry standards, such as banner and video ads but also introduced entirely new format banners.
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="gallery-show">
                    <Row className="justify-content-center">
                        <Col md="auto">
                            <Table className="gallery-button-table" responsive>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button id="funnelButton" onClick={e => this.getRichmedia("funnel")} type="button">Funnel</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button id="parallaxButton" onClick={e => this.getRichmedia("parallax")} type="button">Parallax</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button">Add to Calender</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button">Weather Forecast</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button" onClick={e => this.getRichmedia('findColor')}>Detect Color</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button id="gameButton" type="button" onClick={e => this.getRichmedia("game")}>Game</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button">Hyperscroll</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button" onClick={e => this.getRichmedia("voiceCommand")}>Voice Command</Button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button" onClick={e => this.getRichmedia('storeLocator')}>Store Locator</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button">Vibrate</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button" onClick={e => this.getRichmedia('interactiveRM')}>Interactive Richmedia</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button">Ambient Light</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button">Battery Status</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button">3D Touch</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button">360 Content</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gallery-richmedia-buttons">
                                                <Button type="button">Gyroscope</Button>
                                            </div>
                                        </td>

                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    <Row className="justify-content-center" id="richmedia-container">

                        {
                            this.state.col
                        }

                    </Row>
                    <Modal onEnter={this.modalContent} show={this.state.show} onHide={this.handleClose} size="xl" centered dialogClassName="gallery-modal-width">
                        <div className="gallery-modal-close" onClick={this.handleClose}>
                            CLOSE
                                </div>
                        <Modal.Body className="gallery-modal-content">
                            <iframe id="modal-video" width="320" height="568" frameBorder="0" title="richmediaVideo"></iframe>
                            <div className="gallery-modal-container">
                                <div className="gallery-modal-header">
                                    <span id="modal-title"></span>
                                    <p id="modal-projectName"></p>
                                </div>
                                <div className="gallery-modal-description">
                                    <span>Description</span>
                                    <p id="modal-description"></p>
                                </div>
                                <div className="gallery-modal-QR">
                                    <span>
                                        QR Code
                                        </span>
                                    <img id="modal-QRCode" width={120} alt="qr" />
                                </div>
                            </div>

                        </Modal.Body>
                    </Modal>
                </Container>

                <Footer />
            </div>
        )
    }
}

export default Gallery;
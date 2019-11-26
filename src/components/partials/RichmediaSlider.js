import React from 'react';
import Slider from 'react-slick';
import { Modal } from 'react-bootstrap';

const $ = window.$;
var modalVideo = "",
    modalTitle = "",
    modalProjectName = "",
    modalDescription = "",
    modalQRCode = "",
    jsonPath = "";

class RichmediaSlider extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false,
        }

        this.showModal = this.showModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    componentDidMount() {

        var richmediaPoster = "";
        $('.richmedia-image').mouseover(function () {
            richmediaPoster = $(this).children().eq(1);
            richmediaPoster.css('opacity', '0.30');
            $(this).addClass('scaleIn');
            $(this).children().eq(0).attr('style', 'display:block !important');
            $(this).children().eq(0).mouseover(function () {
                richmediaPoster.css('opacity', '0.30');
            });
        }).mouseleave(function () {
            richmediaPoster.css('opacity', '1');
            $(this).children().eq(0).attr('style', 'display:none !important');
            $(this).removeClass('scaleIn');
        });

    }

    modalContent() {
        var projectJson = "https://movecdn.firebaseio.com/gallery/" + jsonPath + ".json";
        modalVideo = $('#modal-video');
        modalTitle = $('#modal-title');
        modalProjectName = $('#modal-projectName');
        modalDescription = $('#modal-description');
        modalQRCode = $('#modal-QRCode');
        fetch(projectJson).then(res => res.json())
            .then(json => {

                var projectTitle = jsonPath.split('/')[1],
                    projectName = Object.keys(json),
                    description = json[projectName]['description'],
                    videoLink = json[projectName]['videoLink'],
                    QRCode = json[projectName]['QRCode'];




                modalTitle.text(projectTitle);
                modalProjectName.text(projectName);
                modalDescription.text(description);
                if (QRCode.includes('http') || QRCode.includes('https')) {
                    $('.gallery-modal-QR').css('display', 'grid');
                    modalQRCode.attr('src', QRCode);
                }
                modalVideo.attr('src', "https://player.vimeo.com/video/" + videoLink + "?title=0&amp;byline=0&amp;portrait=0&amp;color=FFFFFF&amp;autoplay=0&amp;loop=0&amp;wmode=transparent");
                if (window.screen.width >= 320 && window.screen.width < 350)
                    modalVideo.attr('width', "250");
                else if (window.screen.width >= 350 && window.screen.width < 400)
                    modalVideo.attr('width', "300");

            });


    }

    showModal(projectPath) {
        jsonPath = projectPath;
        this.handleShow();
    }


    render() {

        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2500,
            slidesToScroll: 1,
            slidesToShow: 4,
            arrows: false,
            adaptiveHeight: true,
            centerMode: true,
            responsive: [
                { breakpoint: 470, settings: { slidesToShow: 1, centerMode: false } },
                { breakpoint: 670, settings: { slidesToShow: 1, centerMode: true } },
                { breakpoint: 700, settings: { slidesToShow: 2 } },
                { breakpoint: 800, settings: { slidesToShow: 2, centerMode: false } },
                { breakpoint: 1000, settings: { slidesToShow: 2, centerMode: true } },
                { breakpoint: 1400, settings: { slidesToShow: 3 } },
            ]

        }

        return (
            <div>
                <Slider {...settings} className="publisher-slider">
                    <div className="richmedia-box" onClick={e => { this.showModal("voiceCommand/Doritos") }}>
                        <div className="richmedia-image">
                            <img className="inspect-image" src={require('./../../assets/images/inspect.svg')} alt="inspect button" />
                            <img className="richmedia-poster" src={require('./../../assets/images/richmedia-images/doritos.png')} alt="doritos" />
                        </div>
                        <div className="richmedia-info">
                            <p>Client: Doritos</p>
                            <p>Model: Richmedia</p>
                        </div>
                    </div>
                    <div className="richmedia-box" onClick={e => this.showModal('storeLocator/Mercedes-Benz')}>
                        <div className="richmedia-image">
                            <img className="inspect-image" src={require('./../../assets/images/inspect.svg')} alt="inspect button" />
                            <img className="richmedia-poster" src={require('./../../assets/images/richmedia-images/mercedespopup.png')} alt="mercedes popup" />
                        </div>
                        <div className="richmedia-info">
                            <p>Client: Mercedes Benz</p>
                            <p>Model: Mikro Site</p>
                        </div>
                    </div>
                    <div className="richmedia-box" onClick={e => this.showModal('funnel/Fiat')}>
                        <div className="richmedia-image">
                            <img className="inspect-image" src={require('./../../assets/images/inspect.svg')} alt="inspect button" />
                            <img className="richmedia-poster" src={require('./../../assets/images/richmedia-images/fiategea.png')} alt="Fiat Egea" />
                        </div>
                        <div className="richmedia-info">
                            <p>Client: Fiat</p>
                            <p>Model: Expandable Funnel</p>
                        </div>

                    </div>
                    <div className="richmedia-box" onClick={e => this.showModal('interactiveRM/Pınar')}>
                        <div className="richmedia-image">
                            <img className="inspect-image" src={require('./../../assets/images/inspect.svg')} alt="inspect button" />
                            <img className="richmedia-poster" src={require('./../../assets/images/richmedia-images/pinarprotein.png')} alt="Pınar Proteinli Süt" />
                        </div>
                        <div className="richmedia-info">
                            <p>Client: Pınar</p>
                            <p>Model: Richmedia</p>
                        </div>
                    </div>
                    <div className="richmedia-box" onClick={e => { this.showModal('interactiveRM/Huawei') }}>
                        <div className="richmedia-image">
                            <img className="inspect-image" src={require('./../../assets/images/inspect.svg')} alt="inspect button" />
                            <img className="richmedia-poster" src={require('./../../assets/images/richmedia-images/huaweip9.png')} alt="Huawei P9" />
                        </div>
                        <div className="richmedia-info">
                            <p>Client: Huawei</p>
                            <p>Model: Interactive Richmedia</p>
                        </div>
                    </div>
                    <div className="richmedia-box" onClick={e => { this.showModal('game/ING Bank') }}>
                        <div className="richmedia-image">
                            <img className="inspect-image" src={require('./../../assets/images/inspect.svg')} alt="inspect button" />
                            <img className="richmedia-poster" src={require('./../../assets/images/richmedia-images/ingbankbasket.png')} alt="Ing Bank Basket" />
                        </div>
                        <div className="richmedia-info">
                            <p>Client: Ing Bank</p>
                            <p>Model: HTML5 Game</p>
                        </div>
                    </div>
                </Slider>


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
                                <img id="modal-QRCode" width={120} alt="QR Code" src="" />
                            </div>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>

        )
    }
}

export default RichmediaSlider;
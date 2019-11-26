import React, { Component } from 'react';
import './assets/style/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Targeting from './components/Targeting';
import loaderGif from './assets/images/loader.gif';

const $ = window.$;
class App extends Component {

  componentDidMount() {
    setTimeout(() => {
      $('.main-loader').fadeOut();
    }, 1300);

    var headerHeight = parseInt($('.header').css('height').replace('px', ''));
    $(window).scroll(function () {
      if ($(this).scrollTop() > headerHeight)
        $('.up-icon').css('display', 'block');
      else
        $('.up-icon').css('display', 'none');

      var scrollPosition = ($(window).height() + $(window).scrollTop()) - 60;
      $('.up-icon').css('top', scrollPosition);
    });

    $('.up-icon').click(function () {

      $('html, body').animate({ scrollTop: 0 }, "slow");
    });
  }

  render() {
    return (
      <div className="App">
        <div className="main-loader">
          <img src={loaderGif} alt="loader" />
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/targeting" component={Targeting} />
          </Switch>
        </BrowserRouter>

        <div className="up-icon">
          <img src={require('./assets/images/upicon.svg')} alt="up icon" />
        </div>

      </div>
    );
  }
}

export default App;

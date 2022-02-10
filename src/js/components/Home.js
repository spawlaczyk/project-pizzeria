/* global Flickity */
import { select, templates } from '../settings.js';
import { app } from '../app.js';

class Home {
  constructor(homeContainer) {
    const thisHome = this;

    thisHome.render(homeContainer);
    thisHome.initWidgets();
    thisHome.initSubpages();
  }

  render(homeContainer) {
    const thisHome = this;

    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper = homeContainer;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.orderOnline = document.querySelector(select.nav.orderOnline);
    thisHome.dom.bookTable = document.querySelector(select.nav.bookTable);
  }

  initWidgets() {
    new Flickity('.carousel', {
      // options
      autoPlay: 3000,
      draggable: true,
      wrapAround: true,
      imagesLoaded: true,
      prevNextButtons: false,
      pageDots: true,
    });
  }

  initSubpages(){
    const thisHome = this;

    thisHome.dom.orderOnline.addEventListener('click', function(event){
      event.preventDefault();
      app.activatePage('order');
    });

    thisHome.dom.bookTable.addEventListener('click', function(event){
      event.preventDefault();
      app.activatePage('booking');
    });
  }
}

export default Home;
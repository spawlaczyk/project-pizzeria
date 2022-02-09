/* global Flickity */
import { templates } from '../settings.js';

class Home {
  constructor(homeContainer) {
    const thisHome = this;

    thisHome.render(homeContainer);
    thisHome.initWidgets();
  }

  render(homeContainer){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper = homeContainer;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initWidgets(){
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
}

export default Home;
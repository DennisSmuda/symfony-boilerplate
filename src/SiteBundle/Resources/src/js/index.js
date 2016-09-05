import Barbawrapper from './modules/Barbawrapper';

import HomeView from './views/Home';
import AboutView from './views/About';

$(document).ready(function() {
  console.log('Document ready');

  HomeView.init();
  AboutView.init();

    let barba = new Barbawrapper();


  // Menu code
  // let $hamburger = $('.hamburger');
  // let $mobileNav = $('nav.mobile');
  // let $mobileOverlay = $('.mobile-menu-overlay');
  // $hamburger.on('click', () => {
  //   console.log('butz');
  //   $mobileNav.toggleClass('hidden');
  //   $mobileOverlay.toggleClass('hidden');
  // });
  //
  // $mobileOverlay.on('click', () => {
  //   $mobileOverlay.toggleClass('hidden');
  //   $mobileNav.toggleClass('hidden');
  // })
});

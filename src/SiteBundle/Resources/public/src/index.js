
$(document).ready(function() {
  console.log('Document ready');


  // Menu code
  let $hamburger = $('.hamburger');
  let $mobileNav = $('nav.mobile');
  let $mobileOverlay = $('.mobile-menu-overlay');
  $hamburger.on('click', () => {
    console.log('butz');
    $mobileNav.toggleClass('hidden');
    $mobileOverlay.toggleClass('hidden');
  });

  $mobileOverlay.on('click', () => {
    $mobileOverlay.toggleClass('hidden');
    $mobileNav.toggleClass('hidden');
  })
});

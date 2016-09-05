
let AboutView = Barba.BaseView.extend({
  namespace: 'About',
  onEnter: function() {
    console.log('Enter About');
    // let about = new AboutComponent();
  },
  onEnterCompleted: function() {
    // The Transition has just finished.
  },
  onLeave: function() {
    // A new Transition toward a new page has just started.
    // About.destroy();
  },
  onLeaveCompleted: function() {
    // The Container has just been removed from the DOM.
  }
});

export default AboutView;

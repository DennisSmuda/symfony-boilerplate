

let HomeView = Barba.BaseView.extend({
  namespace: 'home',
  onEnter: function() {
    console.log('Enter Home View');
  },
  onEnterCompleted: function() {
    // The Transition has just finished.
  },
  onLeave: function() {
    // A new Transition toward a new page has just started.
    // home.destroy();
  },
  onLeaveCompleted: function() {
    // The Container has just been removed from the DOM.
  }
});

export default HomeView;

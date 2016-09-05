
export default class BarbaWrapper {
  constructor() {
    this.setupTransition();
  }

  setupTransition() {

    var FadeTransition = Barba.BaseTransition.extend({

      start: function() {
        // console.log('Animation Start');
        // As soon the loading is finished and the old page is faded out, let's fade the new page
        Promise
          .all([this.newContainerLoading, this.fadeOut()])
          .then(this.fadeIn.bind(this));
      },

      fadeOut: function() {
        return $(this.oldContainer).animate({ opacity: 0 }).promise();
      },

      fadeIn: function() {
        // console.log('New Container Fades In');
        var _this = this;
        var $el = $(this.newContainer);


        $(this.oldContainer).hide();

        $el.css({
          visibility : 'visible',
          opacity : 0
        });

        // Tween Max instead of jquery animate
        TweenMax.to($el, 0.4, {
          opacity: 1,
          onComplete: animationCallback
        });


        function animationCallback() {
          _this.done();
        }
      }
    });

    // Make function return our own Transition
    Barba.Pjax.getTransition = function() {
      return FadeTransition;
    };


    /**
     * Start BarbaPjax Wrapper
     */
    Barba.Pjax.start();
  }
}

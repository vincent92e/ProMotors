(function ($, window, Drupal) {
  Drupal.behaviors.mobileMenuSlider = {
    attach: function (context, settings) {
      const mobileMenuAnimation = () => {
        $('#superfish-main-toggle', context).on('click', function () {
          $('#superfish-main-accordion', context).addClass('come-in');
          $('#superfish-main-accordion', context).hasClass('remove-animation') ?
            $('#superfish-main-accordion', context).removeClass('remove-animation') : '';
        });

        $('#superfish-main-accordion .close-menu', context).on('click', function () {
          $('#superfish-main-accordion', context).removeClass('come-in sf-expanded');
          $('#superfish-main-accordion', context).addClass('remove-animation');

          setTimeout(function () {
            $('#superfish-main-accordion', context).addClass('sf-hidden');
          },500);
        });
      };

      mobileMenuAnimation();

      $(window).on('resize', function () {
        mobileMenuAnimation();
      });
    }
  };
})(jQuery, window, Drupal);

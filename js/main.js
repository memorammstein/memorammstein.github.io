(function() {
  'use strict';
  //code
  $('.coding-card').toggle(100);
  $('[href="#coding"]').click(function () {
    $('.coding-card').slideToggle(250);
  });
}());

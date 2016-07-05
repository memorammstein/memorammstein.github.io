(function() {
  'use strict';
  //code

  //front-page
  $('.coding-card').toggle(100);
  $('#coding').click(function (event) {
    event.preventDefault();
    $('.coding-card').slideToggle(250);
  });
  $('.writing-card').toggle(100);
  $('#writing').click(function (event) {
    event.preventDefault();
    $('.writing-card').slideToggle(250);
  });

  //editor
  tinymce.init({
    selector: '#content'
  });
}());

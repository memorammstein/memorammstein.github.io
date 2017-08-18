($(function() {
  'use strict';

  if (typeof tinymce !== 'undefined') {
    $.ajax('http://0.0.0.0:3000/images')
      .done(function (images) {
        for (var i = 0; i < images.length; i++) {
          $('#image').append(
            '<option value="'+images[i]+'">'+
              images[i] +
            '</option>'
          );
        }
      });
    tinymce.init({
      selector: '#content'
    });
  }
}));

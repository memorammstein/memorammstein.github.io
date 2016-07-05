($(function() {
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

  //Dogs
  if (typeof moment !== 'undefined') {
    $.ajax('/blog-posts.json')
      .done(function (data) {
        for (var i = data.length-1; i >= 0; i--) {
          var date_real = moment(data[i].date).format('MMM Do, YYYY');
          var date_display = moment(data[i].date).fromNow();
          $('.blog-container').append(
            '<article>'+
              '<div class="row">'+
                '<div class="col-xs-12">'+
                  '<div class="post-title">'+
                    '<h1>'+data[i].title+'</h1>'+
                  '</div>'+
                  '<div class="post-data">'+
                    '<author>Guillermo Jiménez</author>'+' &#183; '+
                    '<date title="'+date_real+'">'+date_display+'</date>'+
                  '</div>'+
                  '<div class="post-image">'+
                    '<img class="img-responsive center-block" src="/img/blog/'+data[i].image+'"></img>'+
                  '</div>'+
                  '<div class="post-content">'+
                    data[i].content+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</article>'+
            '<hr>'
          );
        }
      });
  }

  //editor
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

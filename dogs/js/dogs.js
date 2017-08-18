($(function() {
  'use strict';

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
                    '<author>Guillermo Jimenez</author>'+' &#183; '+
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
}));

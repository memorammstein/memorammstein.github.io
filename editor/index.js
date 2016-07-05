(function() {
  'use strict';
  let express = require('express');
  let morgan = require('morgan');
  let bodyParser = require('body-parser');
  let fs = require('fs');

  let app = express();

  let blog_posts = [];

  (function() {
    //read blog posts file
    const filepath = '../blog-posts.json';
    try {
      blog_posts = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    } catch (e) {
      fs.closeSync(fs.openSync(filepath, 'w'));
    }
  }());

  app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.get('/api', function (req, res) {
    res.send('Blog Poster API');
  });
  app.post('/posts', function (req, res) {
    blog_posts.push(
      {
        title: req.body.title,
        date: new Date(),
        content: req.body.content
      });
    res.send('Blog post added');
  });

  app.listen(3000, () => {console.log('Listening on port 3000')});
}());

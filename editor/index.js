(function() {
  'use strict';
  let express = require('express');
  let morgan = require('morgan');
  let bodyParser = require('body-parser');
  let fs = require('fs');

  let app = express();

  let blog_posts = [];
  const filepath = '../blog-posts.json';

  (function() {
    try {
      blog_posts = JSON.parse(fs.readFileSync(filepath));
    } catch (e) {
      fs.closeSync(fs.openSync(filepath, 'w'));
    }
  }());

  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
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
        image: req.body.image,
        content: req.body.content
      });
    fs.writeFileSync(filepath, JSON.stringify(blog_posts));
    res.send('Blog post added');
  });
  app.get('/images', function (req, res) {
    fs.readdir('../img/blog/', function(err, items) {
      if (err) {
        console.log(err);
        res.status(404).send('Couldn\'t perform query');
      }
      res.send(items);
    });
  })

  app.listen(3000, () => {console.log('Listening on port 3000')});
}());

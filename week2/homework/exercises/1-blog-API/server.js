const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

//Body parser middleware
app.use(express.json());

//Create blog
app.post('/blogs', (req, res) => {

  fs.writeFileSync(path.join(__dirname, '/blogs', req.body.title), req.body.content);
  res.end('ok');

});

//Update blog
app.put('/posts/:title', (req, res) => {

  if (fs.existsSync(path.join(__dirname, '/blogs', req.params.title))) {
    fs.writeFileSync(path.join(__dirname, '/blogs', req.body.title), req.body.content);
    res.end('ok');
  }
  else {
    res.end('This post does not exist!');
  }

});

//Delete blog
app.delete('/blogs/:title', (req, res) => {

  if (fs.existsSync(path.join(__dirname, '/blogs', req.params.title))) {
    fs.unlinkSync(path.join(__dirname, '/blogs', req.params.title));
    res.end('ok');
  } else {
    res.end('This post does not exist!');
  }

});

//Read single blog content
app.get('/blogs/:title', (req, res) => {

  if (fs.existsSync(path.join(__dirname, '/blogs', req.params.title))) {
    const post = fs.readFileSync(path.join(__dirname, '/blogs', req.params.title));
    res.end(post);
  }
  else{
    res.end('This post does not exist!');
  }

});

//Read all blogs titles
app.get('/blogs', (req, res) => {

  fs.readdir((path.join(__dirname, '/blogs')), (err, blogs)  => {
    if (err) {
      res.end(err);
    }

    if (!blogs.length){
      res.end("no file found!");
    }

    const blogArray = [];
    blogs.forEach(blog => {
      blogArray.push({title: blog});
    });
  
    res.json(blogArray);
  
  });

});

app.listen(3000);
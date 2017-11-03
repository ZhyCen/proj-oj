const express = require('express')
const app = express()
var restRouter = require('./routes/rest');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var path = require ('path');

mongoose.connect("mongodb://user:user@ds241895.mlab.com:41895/coj_zc");
app.use(express.static(path.join(__dirname, '../public')));

app.use("/api/v1", restRouter);
app.use("/", indexRouter);

app.use(function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
});


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

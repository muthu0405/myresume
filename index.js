const express = require('express');

const app = express();
app.use(express.static("public"));


app.get('/', function(req,res){
  res.sendfile('./index.html');
})

app.listen(8000, function(req,res) {
  console.log("starting port...8000");
})

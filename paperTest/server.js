var app = require('express')();
var http = require('http').Server(app);


app.get('/',function(req,res){

  res.send('hello');

});

http.listen(1017, function(){
  console.log('listening on paper sever 1017 port');
});

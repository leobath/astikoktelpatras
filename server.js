
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , contact = require('./routes/contact')
  , about = require('./routes/about')
  , http = require('http')
  , map_complete = require('./routes/map_complete')
  , bus_routes = require('./routes/bus_routes')
  , romatza_eglikada = require('./routes/romatza_eglikada')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/map_complete', map_complete.index);
app.get('/contact', contact.index);
app.get('/about', about.index);
app.get('/bus_routes', bus_routes.index); 
app.get('/romatza_eglikada', romatza_eglikada.index);


//leave last app.get

app.get("*", (req, res) => {
  res.send("Try another path...");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', __dirname + '/dist');
//app.set('view engine', 'jade');


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// If you want to use node and express, here are some examples
// app.get('/', routes.index);
// app.get('/users', user.list);
// Add a route/view/etc... however, don't override the default route '/', as that goes to angular!
// In fact, if you want to use node, we should talk. As we need to figure out css/js/etc...

// This is the main route to the angular spa. Note that index is actually in /dist
// we could configure this to run in dev vs production. But make sure the default is for
// production, as that is what azure will use to run the app
app.get('/', function(request, response) {
    response.render('index.html')
});

var port = process.env.PORT || 5000;
// var port = app.get('port')

http.createServer(app).listen(port, function(){
  console.log('Express server listening on port ' + port);
});

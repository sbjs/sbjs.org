
'use strict';
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    rest = require('restler'),
    githubCfg = require('../github.conf.json');

var app = express();

// all environments

app.set('views', __dirname + '/views');
// We don't want or need jade
// app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: 'sbjsSecretHash'}));
app.use(app.router);


// development only
if ('development' === app.get('env')) {
  console.log('\n**** RUNNING IN DEVELOPMENT ENV ****\n');
  app.use(express.errorHandler());
  app.set('views', __dirname + '/app');
  app.use(express.static(path.join(__dirname, 'app')));
}else{
  console.log('ENV: ', app.get('env'));
  console.log('\n**** RUNNING IN PRODUCTION ENV ****\n');
  console.log('\n**** WHICH MEANS OUT OF DIST DIRECTORY! ****\n');
  app.use(express.errorHandler());
  app.set('views', __dirname + '/dist');
  app.use(express.static(path.join(__dirname, 'dist')));
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

  var code = request.query.code;
  //TODO: refactor?
  if(code){
    var options = {
      'data':{
        'client_id': githubCfg.client_id,
        'client_secret': githubCfg.client_secret,
        'code': code
      },
      'headers':{
        'Accept': 'application/json'
      }
    };

    rest.post('https://github.com/login/oauth/access_token', options)
    .on('complete', function(data, resp){
      if (resp.statusCode == 200){
        request.session.access_token = data.access_token;
        response.redirect('/#/profile?access_token='+data.access_token);
      }
    });
  }else{
    response.render('index.html');
  }
});

var port = process.env.PORT || 9000;
// var port = app.get('port')

http.createServer(app).listen(port, function(){
  console.log('Express server listening on port ' + port);
});

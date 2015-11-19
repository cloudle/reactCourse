var express = require('express'), app = express(),
  apiRouter = express.Router(), classicRouter = express.Router(),
  webpack = require('webpack'),
  webpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config'),
  falcor = require('falcor'),
  falcorEpxress = require('falcor-express'),
  falcorRouter = require('falcor-router'),
  _ = require('lodash');;

var $ref = falcor.Model.ref, eventsData = {
  locationsById: {
    1: {
      city: "Salt Lake City",
      state: "Utah"
    },
    2: {
      city: "Las Vegas",
      state: "Nevada"
    },
    3: {
      city: "Minneapolis",
      state: "Minnesota"
    },
    4: {
      city: "Walker Creek Ranch",
      state: "California"
    }
  },
  events: [
    {
      name: "ng-conf",
      description: "The worlds best Angular Conference",
      location: $ref('locationsById[1]')
    },
    {
      name: "React Rally",
      description: "Conference focusing on Facebook's React",
      location: $ref('locationsById[1]')
    },
    {
      name: "ng-Vegas",
      description: "Two days jam-packed with Angular goodness with a focus on Angular 2",
      location: $ref('locationsById[2]')
    },
    {
      name: "Midwest JS",
      description: "Midwest JS is a premier technology conference focused on the JavaScript ecosystem.",
      location: $ref('locationsById[3]')
    },
    {
      name: "NodeConf",
      description: "NodeConf is the longest running community driven conference for the Node community.",
      location: $ref('locationsById[4]')
    }
  ]
};

app.set('views', './build');
app.set('view engine', 'jade');
app.use(express.static('./assets'));

app.use('/model.json', falcorEpxress.dataSourceRoute(function(req, res){
  return new falcorRouter([{
    route: "events[{integers:eventIds}]['name', 'description']",
    get: function (pathSet) {
      var results = [];
      pathSet.eventIds.forEach(function(eventId){
        pathSet[2].map(function(key){
          var eventRecord = eventsData.events[eventId];

          results.push({
            path: ['events', eventId, key],
            value: eventRecord[key]
          })
        })
      });

      return results;
    }
  },{
    route: "events.byName[{keys}]['description']",
    get: function(pathSet) {

      var results = [];

      // We want to loop over each of the conference names provided
      pathSet[2].forEach(function(name) {

        // We also want to loop over all the events on the data object
        // and check if conference name is there
        eventsData.events.forEach(function(event) {
          if(_.contains(event, name)) {
            results.push({
              path: ['events','byName', name, 'description'],
              value: event.description
            });
          }
        });
      });

      return results;
    }
  },{
    route: "locationById[{integers:locationId}]['city', 'state']",
    get: function(pathSet) {
      var results = [];

      // Above we specified an locationId identifier that is an
      // array of ids which we can loop over
      pathSet.locationId.forEach(function(locationId) {

        // Next, an array of key names that map is held at pathSet[2]
        pathSet[2].map(function(key) {

          // We find the event the cooresponds to the current locationId
          var location = eventsData.locationsById[locationId];

          // Finally we push a path/value object onto
          // the results array
          results.push({
            path: ['locationsById', locationId, key],
            value: location[key]
          });
        });
      });

      return results;
    }
  }]);
}));

classicRouter.get('*', function (req, res) {
  res.render('index', {});
});

apiRouter.get('/', function(req, res) {
  res.json({message: 'yay!'});
});

app.use('/api', apiRouter); app.use('/', classicRouter);

app.listen(3000);

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3005, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Webpack is serving on localhost:3005');
});
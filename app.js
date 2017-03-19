const request = require('request');
const yargs = require('yargs');
const app = require('express')

const api = require('./api-helper.js')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv);

var location = {
  lat: 0,
  lon: 0
};

api.getLocation(argv.a, (location) => {
  debugger;
  var options = {
    url: `api.openweathermap.org/data/2.5/weather?zip=${encodeURIComponent(location)},us&APPID=48cdfea3267c393776851642f0cf5066`,
    json: true
  }
console.log(options.url)
  request(options, (err, res, body) => {
    console.log(body)
  })
});

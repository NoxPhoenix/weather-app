const request = require('request')


var getLocation = (a, cb) => {
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(a)}`,
  json: true
}, (err, res, body) => {
  // console.log(body)
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    // var location = {
    //   lat: Math.round(body.results[0].geometry.location.lat),
    //   lon: Math.round(body.results[0].geometry.location.lng)
    // }
    var location = body.results[0].address_components[7].long_name
    debugger;
    return cb(location)
  });
};


module.exports = {
getLocation,
};

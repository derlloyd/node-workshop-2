var request = require('request');
var prompt = require('prompt');
var colors = require('colors');

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    //var hour = a.getHours();
    //var min = a.getMinutes();
    //var sec = a.getSeconds();
    var date = date + ' ' + month;
    return date;
}

prompt.start();

prompt.get(['What city do you live in?'], function(err, result) {
    var myCity = result["What city do you live in?"];

    var myAddress = "https://maps.googleapis.com/maps/api/geocode/json?address=" + myCity;

    request(myAddress, function(err, result) {
        var myResultObject = JSON.parse(result.body);
        var cityName = myResultObject.results[0].formatted_address;

        var lat = myResultObject.results[0].geometry.location.lat;
        var lon = myResultObject.results[0].geometry.location.lng;

        var myAddressLink = "https://api.forecast.io/forecast/8fe006f11edc2a80d60642723d290759/" + lat + "," + lon;

        request(myAddressLink, function(err, result) {
            var myWeatherObject = JSON.parse(result.body);
            console.log(("It's " + myWeatherObject.currently.temperature +
                "F and " + myWeatherObject.currently.summary + " in " + cityName).red.bold);

            for (var i = 1; i < 6; i++) {
                console.log(("Forecast for " +
                    timeConverter(myWeatherObject.daily.data[i].time) +
                    " - " +
                    myWeatherObject.daily.data[i].summary).rainbow);
            }

        })

    });
    
})
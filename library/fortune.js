var request = require("request")

function getFortune(callback) {
    var address = "http://quotesondesign.com/api/3.0/api-3.0.json"
    request(address, function(err, result) {
        var quoteObj = JSON.parse(result.body);
        var myQuote = quoteObj.quote;
        callback(myQuote);
    })
}

// getFortune(console.log);

module.exports = {
    getFortune: getFortune(console.log)
}
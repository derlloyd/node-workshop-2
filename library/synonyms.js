// http://words.bighugelabs.com/api/2/6961e6fd299af2eef1b187a18ed6b7ac/word/json

var request = require('request');
var prompt = require('prompt');

function SynonymAPI(apiKey) {
    this.apiKey = apiKey,
    this.getSynonyms = function(word, callback) {
        var url = "http://words.bighugelabs.com/api/2/" +
        apiKey + "/" + word + "/json";
        request(url, function(err, result) {
            var synObj = JSON.parse(result.body);
            var syn = synObj;
            callback(syn);
            // console.log(syn);
        })
    }
} 

// var me = new SynonymAPI("6961e6fd299af2eef1b187a18ed6b7ac");

// me.getSynonyms("happy", console.log);
// console.log(me);

module.exports = {
     SynonymAPI: SynonymAPI
}
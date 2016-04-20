var synonyms = require('./library/synonyms.js');
var prompt = require('prompt');
var myWord = new synonyms.SynonymAPI("6961e6fd299af2eef1b187a18ed6b7ac");

prompt.start();

prompt.get(["please enter a word"], function(err, result) {

    var synWord = result;
    myWord.getSynonyms("result", console.log);

})

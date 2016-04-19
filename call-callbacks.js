// function called firstChar that takes a string and a callback, 
// and "returns" the first character of the string after one second.

function firstChar(str, callback) {
    var first = str[0];
    callback(first);
}

firstChar("Hello", function(x) {
    setTimeout(function() {
        console.log(x);
    }, 1000);
});





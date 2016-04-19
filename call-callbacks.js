// function called firstChar that takes a string and a callback, 
// and "returns" the first character of the string after one second.

function firstChar(str, callback) {
    var first = str[0];
    setTimeout(function() {
        callback(first);
    }, 1000);
}

// firstChar("Hello", console.log); 


//  function called lastChar that takes a string 
//  and "returns" the last character of the string after one second

function lastChar(str, callback) {
    var last = str[str.length - 1];
    setTimeout(function() {
        callback(last);
    }, 1000);
}

// lastChar("long string", console.log);



function getFirstAndLast(str, callback) {
    firstChar(str, callback) + lastChar(str, callback);
};

getFirstAndLast("hello", function(firstLast) {
    console.log(firstLast); // should output "ho"
});



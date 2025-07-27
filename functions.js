//named functions
function biggestNumber(a , b){
    a > b ? console.log(a) : console.log(b);    
}

//anonymous functions
var biggestNumber = function(a , b){
    console.log("hello world");
}

//invoked functions
var biggest = (function(a,b){
    console.log(a , b);
})(5 , 10)


var a = 5;
var b = 6;

var isExist = false;

if(b > a){
    console.log( b + "is bigger" );
}else {
    console.log(a + "is bigger");
}

//compare conditions
// == != & |  =>  <=


a==b ? isExist = true : isExist = false;


const today = new Date().getMonth();
console.log(today);

let day;

console.log("-------");
console.log(today);

switch(today){
    case 0:
        day="Sunday";
        break;
    case 1 :
        day = "Monday";
        break;
    case 2 :
        day= "Tuesday"
        break
    case 3 :
        day = "Wednesday"
        break
    case 4 :
        day = "Thursday"
        break
    case 5 :
        day = "Friday"
        break
    case 6 : 
        day = "Saturday"
        break
        
        default:
        day = "Not valid"
}

console.log(day);

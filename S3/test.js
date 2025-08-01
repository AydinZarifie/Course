var person = {
    firstname : "ali",
    lastname : "zarifie",
    phoneNumber : "1656665"
}

console.log(person);


var person1 = new Object()

person1.firstName = "ali"
person1.lastname = "hassani"
person1.phoneNumber= "095656589"
person1.address = "tabriz"


var person2 = new Object()
person2.firstName = "pouya"
console.log(person1);


function Course(title , teacher , language){
    this.title = title;
    this.teacher = teacher;
    this.language = language
}

var course1 = new Course("Backend" ,"Aydin" , "Javasctipt");
var course2 = new Course("Frontend" , "selma" , "javascript")

console.log(course2);

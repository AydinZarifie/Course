var person1 = {
    firstName : "ali",
    lastName : "salami",
    phoneNumber : "0914444444"
}

console.log(person1.firstName);

var person2 = new Object();

person2.firstName = "ali";
person2.lastName = "alipour"

function Course (title , teacher , lang){
    this.title = title;
    this.teacher = teacher;
    this.lang = lang;
}


const course1 = new Course("javascript" , "reza" , "oop");
 const cars = ["BENZ" , "BMW" , "PORCHE" , "TESLE"];

for(let i = 0 ; i < cars.length ; i++){
    if(i == 2){
        continue;
        //break
    }
    console.log(i);
}


function findMin(array){
    console.log(array);
    
    let min;

    for (let index = 0; index < array.length; index++) {
            if(index == 0){
                min = array[index]
            }
           if(min > array[index]){
            min = array[index]
           }     
    }

    return min;
}

console.log(findMin([6,2,3,5]));


for(const carss in cars){
    console.log("------------");
    console.log(carss);
}

var i = 0;

while(i < 10){
    console.log(i);
    i = i + 1;
}

do {
    i = i + 1;
    console.log(i);
    
}while(i == 10)
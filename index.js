const express = require('express');
const app = express();

//تعریف میدلویر
app.use(express.json());

app.get("/test" , (request , response) => {
    response.status(200).send("Hello World");
});

app.post("/login" , (request , response) => {    

    console.log(request.body);
    
    const username = request.body.username;
    const password = request.body.password;

    console.log(username);
    console.log(password);
     

    response.status(200).send("Data is receive")
})

app.listen(3000 , () => {
    console.log("Server is runing on port 3000!");
});
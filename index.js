
const express = require('express')

const app = express()

app.get('/', function(request,response){
    response.send("helllo All")
})
app.get('/blog', function(request,response){
    response.send("helllo, we are in our blog now")
})
app.get('/contact', function(request,response){
    response.send("helllo, do you wanna contact this developer")
})
app.get('/my-project', function(request,response){
    response.send("helllo, okay here's my project")
})


app.listen(8000, function(){
    console.log("server running");
} 
)
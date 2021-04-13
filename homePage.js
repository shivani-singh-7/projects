var fs=require("fs")
const  request  = require("request");
request("https://www.google.com",function(error,respose,body){
    if(error){
        console.log(error);
        console.log(respose.statusCode);
    }
    console.log(body);
    fs.writeFile("google.txt",body,()=>{
        console.log("copied!");
    })
})
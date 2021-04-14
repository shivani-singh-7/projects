import { rejects } from "node:assert";
import { resolve } from "node:path";
const { v4: uuidv4}=require('uuid');
// uuid package of version 4
//let books=require('./books.json');
/* let fs=require("fs")
let books=[]
let myReadStream=fs.createReadStream(__dirname+"/books.json","utf8")
myReadStream.on("data",(chunk)=>{
    let bookss=JSON.parse(chunk)
    books=bookss.books
    console.log(typeof books);
    console.log(Array.isArray(books));
    
    

}) */
const fs=require('fs')
let books
fs.readFile('./books.json',"utf8",(err,data)=>{
    if(err){
        console.log(err);}
        else{
            books=JSON.parse(data) 
            console.log(books);
            
        }
    }
)
const {writeDataToFile} = require('./utils');
function findAll(){
    
    return new Promise((resolve,reject)=>{
        resolve(books);
    })
}
function findById(id: any){
    
    return new Promise((resolve,reject)=>{
        const book=books.find((p: { id: any; })=>p.id===id)
        resolve(book);
    })
}
function findByAuthor(author: any){
    
    return new Promise((resolve,reject)=>{
        const book=books.find((p: { author: any; })=>p.author.toLowerCase()===author.toLowerCase())
        resolve(book);
    })
}
function create(book: any){
    return new Promise((resolve,reject)=>{
        
        const newBook={id:uuidv4(),...book};
        books.push(newBook);
        
        writeDataToFile("./books.json",books);
        resolve(newBook);
    })
}
function update(id: any,book: any){
    return new Promise((resolve,reject)=>{
        
        const index=books.findIndex((p: any)=>p.id===id);
        books[index]={id,...book};
        writeDataToFile("./books.json",books);
        resolve(books[index]);
    })
}
function deleted(id: any){
    return new Promise<void>((resolve,reject)=>{
        books=books.filter((b: { id: any; })=>b.id!==id)
        writeDataToFile("./books.json",books);
        resolve();
    })
}

module.exports={
    findAll,
    findById,
    create,
    update,
   deleted,
    findByAuthor
}
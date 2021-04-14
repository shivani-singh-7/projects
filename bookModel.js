"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var uuidv4 = require('uuid').v4;
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
var fs = require('fs');
var books;
fs.readFile('./books.json', "utf8", function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        books = JSON.parse(data);
        console.log(books);
    }
});
var writeDataToFile = require('./utils').writeDataToFile;
function findAll() {
    return new Promise(function (resolve, reject) {
        resolve(books);
    });
}
function findById(id) {
    return new Promise(function (resolve, reject) {
        var book = books.find(function (p) { return p.id === id; });
        resolve(book);
    });
}
function findByAuthor(author) {
    return new Promise(function (resolve, reject) {
        var book = books.find(function (p) { return p.author.toLowerCase() === author.toLowerCase(); });
        resolve(book);
    });
}
function create(book) {
    return new Promise(function (resolve, reject) {
        var newBook = __assign({ id: uuidv4() }, book);
        books.push(newBook);
        writeDataToFile("./books.json", books);
        resolve(newBook);
    });
}
function update(id, book) {
    return new Promise(function (resolve, reject) {
        var index = books.findIndex(function (p) { return p.id === id; });
        books[index] = __assign({ id: id }, book);
        writeDataToFile("./books.json", books);
        resolve(books[index]);
    });
}
function deleted(id) {
    return new Promise(function (resolve, reject) {
        books = books.filter(function (b) { return b.id !== id; });
        writeDataToFile("./books.json", books);
        resolve();
    });
}
module.exports = {
    findAll: findAll,
    findById: findById,
    create: create,
    update: update,
    deleted: deleted,
    findByAuthor: findByAuthor
};

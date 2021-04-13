import { BookManager } from "./bookManager.js";
let manager:BookManager=new BookManager();
manager.display();
function fun1(){
    var x=document.getElementById("detailsSection")! as HTMLElement;
    var y=document.getElementById("addBookPage")! as HTMLElement;
    if(x.style.display==="none"){
        x.style.display="block";
        y.style.display="none";
    }manager.display();
}
function fun2(){
    var x=document.getElementById("detailsSection")! as HTMLElement;
    var y=document.getElementById("addBookPage")! as HTMLElement;
    if(y.style.display==="none"){
        x.style.display="none";
        y.style.display="block";
    }manager.display();
}
document.getElementById("bookList")?.addEventListener("click",fun1);
document.getElementById("addBooks")?.addEventListener("click",fun2);
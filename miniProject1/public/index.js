var _a, _b;
import { BookManager } from "./bookManager.js";
let manager = new BookManager();
manager.display();
function fun1() {
    var x = document.getElementById("detailsSection");
    var y = document.getElementById("addBookPage");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    }
    manager.display();
}
function fun2() {
    var x = document.getElementById("detailsSection");
    var y = document.getElementById("addBookPage");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
    }
    manager.display();
}
(_a = document.getElementById("bookList")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", fun1);
(_b = document.getElementById("addBooks")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", fun2);

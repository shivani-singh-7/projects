let table = document.getElementById("myTable");
import { BookManager } from "./bookManager.js";
let manager = new BookManager();
table.addEventListener("click", (event) => {
    let clicked = event.target;
    if (clicked.id === "span")
        clicked = event.target.parentElement.parentElement.parentElement;
    else if (clicked.id === "deleteId")
        clicked = event.target.parentElement.parentElement;
    else {
        return;
    }
    manager.delete(clicked);
});

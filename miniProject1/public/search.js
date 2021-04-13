import { BookManager } from "./bookManager.js";
let manager = new BookManager();
const optionSelected = document.getElementById("drop");
const textSearch = document.getElementById("textSearch");
const searchbtn = document.getElementById("Searchbtn");
const button = document.querySelector("#Searchbtn");
button.addEventListener("click", function () {
    manager.searchResult();
});
function search() {
    let placeholder, buttonText;
    if (optionSelected.value === "bookId") {
        placeholder = "Search by Id";
        buttonText = "Enter ID";
    }
    else if (optionSelected.value === "title") {
        placeholder = "Search by title";
        buttonText = "Enter title";
    }
    else if (optionSelected.value === "author") {
        placeholder = "Search by author";
        buttonText = "Enter Author";
    }
    else {
        return;
    }
    textSearch.placeholder = placeholder;
    searchbtn.innerHTML = buttonText;
}
optionSelected.addEventListener("change", search);
export default optionSelected;

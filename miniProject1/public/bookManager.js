let books = localStorage.getItem("books");
if (!books) {
    books = [];
}
else {
    books = JSON.parse(books);
}
export class BookManager {
    constructor() {
        this.table = document.getElementById("myTable");
    }
    searchBooks(searchparam, books, paramType) {
        if (paramType === "bookId") {
            return books[paramType].indexOf(searchparam) >= 0;
        }
        return books[paramType].toLowerCase().indexOf(searchparam) >= 0;
    }
    display(searchparam = "", paramType = "") {
        this.table.innerHTML = `<tr>
            <th> Book ID</th><th> Title</th><th>Author</th><th>Rating</th><th>Action</th></tr>`;
        for (let i = 0; i < books.length; i++) {
            let row;
            let disFlag = true;
            if (searchparam.length > 0 && paramType.length > 0 && paramType !== "selected") {
                if (!this.searchBooks(searchparam, books[i], paramType)) {
                    disFlag = false;
                }
            }
            if (disFlag) {
                row = `<tr>
                        <td>${books[i].bookId}</td>
                        <td>${books[i].title}</td>
                        <td>${books[i].author}</td>
                        <td>${books[i].rating}</td>
                        <td>
                        <button class="delete" id="deleteId">
                        <i class="fa fa-trash"></i></button>
                        <button><span id="span"></span></button>
                        
                        </td>

                        </tr>`;
                this.table.innerHTML += row;
            }
        }
    }
    searchResult() {
        let optionSelected = document.getElementById("drop");
        let paramType = optionSelected.value;
        let searchText = document.getElementById("textSearch");
        this.display(searchText.value, paramType);
    }
    delete(item) {
        books.splice(item.rowIndex - 1, 1);
        localStorage.setItem("books", JSON.stringify(books));
        this.display();
    }
    addBook() {
        let temp = books.length + 1;
        /* let id:string=temp.toString(); */
        let id = document.getElementById("bookId");
        let name = document.getElementById("bookName");
        let author = document.getElementById("bookAuthor");
        let rating = document.getElementById("rating");
        if (id.value !== "" && name.value !== "" && author.value !== "" && rating.value !== "") {
            const item = { bookId: id.value, title: name.value.toUpperCase(), author: author.value.toUpperCase(), rating: rating.value };
            books.push(item);
            localStorage.setItem("books", JSON.stringify(books));
        }
        else {
            return;
        }
    }
}



const displayBooks=async()=>{
    let uri="http://localhost:3000/books";
    const res= await fetch(uri);
    const books=await res.json();
    console.log(books);
    table=document.getElementById("myTable");
            this.table.innerHTML=`<tr>
            <th> Book ID</th><th> Title</th><th>Author</th><th>Rating</th><th>Action</th></tr>`;
            for(let i=0;i<books.length;i++)
            {
                let row;
              let disFlag=true;
                
                    if(disFlag)
                    {
                        row= `<tr>
                        <td>${books[i].id}</td>
                        <td>${books[i].title}</td>
                        <td>${books[i].author}</td>
                        <td>${books[i].rating}</td>
                        <td>
                        <a href="/details.html?id=${books[i].id}">Read more</a>
                                                
                        
                        </td>

                        </tr>`;
                        this.table.innerHTML +=row;
                    
                }

            }
    }
    
   
/* const searchResult=()=>
{
    let optionSelected=document.getElementById("drop");
    let paramType=optionSelected.value;
    let searchText=document.getElementById("textSearch");
     ()=>displayBooks(searchText.value,paramType);
}
const optionSelected=document.getElementById("drop");
const textSearch=document.getElementById("textSearch");
 const searchbtn=document.getElementById("Searchbtn"); 
const button=document.querySelector("#Searchbtn");
button.addEventListener("click",()=>searchResult()); */
const search=()=>{
let placeholder,buttonText;
if(optionSelected.value==="id"){
    placeholder="Search by Id";
    buttonText="Enter ID";
}
else if(optionSelected.value==="title"){
    placeholder="Search by title";
    buttonText="Enter title";
}
else if(optionSelected.value==="author"){
    placeholder="Search by author";
    buttonText="Enter Author";
}
else{
    return;
}
textSearch.placeholder=placeholder;
searchbtn.innerHTML=buttonText;
}
optionSelected.addEventListener("change",()=>search());
window.addEventListener("DOMContentLoaded",()=>displayBooks())

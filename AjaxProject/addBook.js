const addBook=async()=>{
    
    let id=document.getElementById("id");
    let isbn=document.getElementById("isbn");
    let title=document.getElementById("title");
    let author=document.getElementById("author");
    let pages=document.getElementById("pages");
    let price=document.getElementById("price");
    let rating=document.getElementById("rating");
    let votes=document.getElementById("votes")
    let description=document.getElementById("description");
    let tags=document.getElementById("tags");
    let series=document.getElementById("series");
    let seriesIndex=document.getElementById("seriesIndex");
    let releaseDate=document.getElementById("releaseDate");
    let cover=document.getElementById("cover");
    if(id.value!==""&&isbn.value!=="" && title.value!==""&&author.value!=="" && id.pages!==""&&rating.value!=="" && votes.value!==""&&description.value!=="" && tags.value!==""&&series.value!=="" && seriesIndex.value!==""&&releaseDate.value!=="" &&cover.value!=="")
        {
        const newBook={id:id.value,isbn:isbn.value,title:title.value,author:author.value,pages:pages.value,price:price.value,rating:rating.value,votes:votes.value,description:description.value,tags:tags.value,series:series.value,seriesIndex:seriesIndex.value,releaseDate:releaseDate.value,cover:cover.value};
        await fetch("http://localhost:3000/books",{
        method:"POST",
        body:JSON.stringify(newBook),
        headers:{'Content-Type':'application/json'}
    });  }
    window.location.replace('/index.html')
    console.log("newBook");
            
}
const addButton=document.getElementById("submit");
    addButton.addEventListener("click",()=>addBook());

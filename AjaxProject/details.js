const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/books/' + id);
  if (!res.ok) {
    window.location.replace("/");
  }
  const book = await res.json();

  const template = `
    <h1>${book.title}</h1>
    <p>${book.description}</p>
  `

  container.innerHTML = template;
}

deleteBtn.addEventListener('click', async () => {
  const res = await fetch('http://localhost:3000/books/' + id, {
    method: 'DELETE'
  });
  window.location.replace("/");
})

window.addEventListener('DOMContentLoaded', renderDetails);
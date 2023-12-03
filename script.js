const librArray = [];
let bookAuthor = '';
let bookTitle = '';
let bookYear = '';
let bookRead = false;
//click button to open up form
const modal = document.querySelector('.modal');
const openBook = document.querySelector('.add-book');
const closeModal = document.querySelector('.close-modal');
const submit = document.querySelector('.submit');

openBook.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})
//form asks for book info;
function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}
//what the user puts in the input becomes the arguments for object constructor
function createBook() {
    bookTitle = document.querySelector('#title').value;
    bookAuthor = document.querySelector('#author').value;
    bookYear = document.querySelector('#year').value;
    bookRead = document.querySelector('#read').value;

    let newBook = new Book(bookTitle, bookAuthor, bookYear, bookRead); 
    librArray.push(newBook);
}

submit.addEventListener('click', createBook);
//push the object into the array
//loop through the array to display info for each book

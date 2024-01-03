const librArray = [];
let bookAuthor = '';
let bookTitle = '';
let bookYear = '';
//click button to open up form
const modal = document.querySelector('.modal');
const openBook = document.querySelector('.add-book');
const closeModal = document.querySelector('.close-modal');
const submit = document.querySelector('.submit');
const isBookRead = document.querySelector('#read');
const form = document.querySelector('.form');

openBook.addEventListener('click', () => {
    form.reset();
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})
//form asks for book info;
class Book {
    constructor(title, author, year, read) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.read = read;
        }
}


//what the user puts in the input becomes the arguments for object constructor
function createBook() {
    bookTitle = document.querySelector('#title').value;
    bookAuthor = document.querySelector('#author').value;
    bookYear = document.querySelector('#year').value;
    let bookRead = document.querySelector('#read').checked;
    if (isBookRead.checked) {
        bookRead = true;
    } else {
        bookRead = false;
    }

    let newBook = new Book(bookTitle, bookAuthor, bookYear, bookRead); 
    librArray.push(newBook);
}

submit.addEventListener('click', createBook);

function toggleRead(e) {
    const librArrayIndex = e.target.parentElement.parentElement.dataset.index;

    if (librArray[librArrayIndex].read === true) {
        librArray[librArrayIndex].read = false;
    } else librArray[librArrayIndex].read = true;

    createCard();
}

function deleteCard(e) {
    const librArrayIndex = e.target.parentElement.parentElement.dataset.index;

    librArray.splice(librArrayIndex, 1);

    createCard();
}

function createCard() {
    const booksContainer = document.querySelector('.books-container');
    booksContainer.textContent = '';
   //for(let i = 0; i < librArray.length; i+= 1) {
    librArray.forEach((book, index) => {
        //card
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.dataset.index = index;
        booksContainer.appendChild(newCard);
        //header
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        newCard.appendChild(cardHeader);
        //title
        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = book.title;
        cardHeader.appendChild(cardTitle);
        //author
        const cardAuthor = document.createElement('p');
        cardAuthor.classList.add('para');
        cardAuthor.textContent = book.author;
        newCard.appendChild(cardAuthor);
        //year published
        const cardYear = document.createElement('p');
        cardYear.classList.add('para');
        cardYear.textContent = book.year;
        newCard.appendChild(cardYear);
        //read or nah
        const isRead = document.createElement('p');
        isRead.classList.add('para')
        if (book.read === true) {
            isRead.textContent = 'Read';
        } else {
            isRead.textContent = 'Not read';
        }
        newCard.appendChild(isRead);
        //button container
        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card-buttons');
        newCard.appendChild(cardButtons);
        //read button
        const readButton = document.createElement('button');
        readButton.textContent = 'Read';
        readButton.classList.add('read-button');
        cardButtons.appendChild(readButton);

        readButton.addEventListener('click', toggleRead);
        //delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        cardButtons.appendChild(deleteButton); 

        deleteButton.addEventListener('click', deleteCard);
   })
}

submit.addEventListener('click', createCard);
//loop through the array to display info for each book

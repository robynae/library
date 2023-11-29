//click button to open up form
const modal = document.querySelector('.modal');
const openBook = document.querySelector('.add-book');
const closeModal = document.querySelector('.close-modal')

openBook.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})
//form asks for book info;
//what the user puts in the input becomes the arguments for object constructor
//push the object into the array
//loop through the array to display info for each book

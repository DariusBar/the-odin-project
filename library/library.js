// Holds all of the books in the library 
const myLibrary = [];

// Dialog that allows user to input information about book
const bookDialog = document.getElementById("bookDialog");
// Button that adds a book to the library
const addBookBtn = bookDialog.querySelector("#addBook");
// Button that closes the modal
const closeDialog = bookDialog.querySelector("#cancel");
// Book shelf element
var bookShelf = document.getElementById("bookshelf");
// Bookcase element 
const bookCase = document.getElementById("bookcase");

/**
 * Constructor for book object 
 */
function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

/**
 * Creates a book and adds it to the library array
 * 
 * Will grab information from information put in the webpage
 */
function addBookToLibrary(title, author, pages, read, id) {
    var newBook = new Book(title, author, pages, read, id);

    myLibrary.push(newBook);
    displayBook(newBook);
}

/**
 * Searches through the library array and removes a book of a
 * specified id from the library array
 */
function removeBookFromLibrary(id) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id == id) {
            myLibrary.splice(i, 1)
            break;
        }
    }
    console.log(myLibrary);
}


/**
 * Displays book on webpages, bookshelf
 * 
 * Connects to the add book button
 */
function displayBook(Book) {
    var newBook = document.createElement("div");
    var colors = ["rgb(255 89 94)", "rgb(25 130 196)", "rgb(138, 201, 38)"];
    var flexDir = ["row", "row-reverse"];
    // Set class to book
    newBook.classList.add("book");

    // insert div of class title
    // Add p of Book Name and Author name into div of class title
    var title = document.createElement("div");
    title.classList.add("title");

    var bookName = document.createElement("p");
    bookName.textContent = Book.title;

    var author = document.createElement("p");
    author.textContent = Book.author;

    title.appendChild(bookName);
    title.appendChild(author);

    // insert div of class pages
    // add p of page amount into div of class pages
    var pages = document.createElement("div");
    pages.classList.add("pages");

    var pageAmount = document.createElement("p");
    pageAmount.textContent = Book.pages;

    pages.appendChild(pageAmount);

    // insert div of class bookBtns
    var bookBtns = document.createElement("div");
    bookBtns.classList.add("bookBtns");

    var deleteBook =  document.createElement("button");
    deleteBook.classList.add("deleteBook");
    deleteBook.textContent = "Delete Book";

    var readBtn = document.createElement("button");
    readBtn.classList.add("readBtn");
    // toggle if the book has been read or not
    readBtn.classList.add(Book.read);
    readBtn.textContent = Book.read;
    // add action listener for read button;

    bookBtns.appendChild(deleteBook);
    bookBtns.appendChild(readBtn);

    // Add element to the dom.
    newBook.appendChild(title);
    newBook.appendChild(pages);
    newBook.appendChild(bookBtns);
    newBook.setAttribute("data-id", Book.id);
    // randomizing the color of the book
    var backgroundColor = colors[Math.floor(Math.random() * 3)];
    console.log(backgroundColor);
    newBook.style.backgroundColor = backgroundColor;

    console.log(newBook);

    // Add an extra bookshelf if the bookshelf has 15 books in it;
    if (myLibrary.length % 6 == 0) {
        // create a new div with a class of bookshelf
        bookShelf = document.createElement("div");
        bookShelf.classList.add("bookshelf");
        bookShelf.style.flexDirection = flexDir[Math.floor(Math.random() * 2)];
        bookCase.appendChild(bookShelf);
    }
    bookShelf.appendChild(newBook);  

    // add action listener for delete button
    deleteBook.addEventListener("click", (event) =>{
        // Retrieves the book
        var toRemove = deleteBook.parentElement.parentElement;

        // Remove book from the library array
        removeBookFromLibrary(toRemove.getAttribute("data-id"))
        // Should delete the book from the dom
        toRemove.remove();
    });
    
    // add action listener for read button
    readBtn.addEventListener("click", (event) =>{
        // Should toggle between in the inner text content being Read/Unead
        // Should toggle between style classes read/Unread

        // Check what the current class of the button is then toggle betwee
        readBtn.classList.toggle("Read");
        readBtn.classList.toggle("Unread")
        if (readBtn.classList.contains("Read")) {
            readBtn.textContent = "Read";
        } else {
            readBtn.textContent = "Unread";
        }
    });


    console.log(myLibrary);
}


/**
 * Action listener added to addbook button, should read information from
 * DOM elements and then use that information to add a book to the 
 * library array.
 */
addBookBtn.addEventListener("click", (event) => {
    // Prevents button from submitting to forum
    event.preventDefault();

    // Instead gather the information from the forum to use
    // in order to add the book to the DOM
    const bookName = bookDialog.querySelector("#bookName").value;
    const author = bookDialog.querySelector("#author").value;
    const pages = bookDialog.querySelector("#pages").value;
    const read = bookDialog.querySelector('input[name="Read"]:checked').value;
    const id = crypto.randomUUID();;

    addBookToLibrary(bookName, author, pages, read, id);
    console.log(myLibrary);
}); 

/**
 * Action listener used to close the modal
 */
closeDialog.addEventListener("click", (event) => {
    // toggles modal class to be hidden.
    bookDialog.close();
});

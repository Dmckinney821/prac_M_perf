

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}


class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');

        //create tr element
        const row = document.createElement('tr');

        //insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='delete'>X</a></td>
        `
        list.appendChild(row)
        // console.log(row)
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        //class
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message));
        //get parent
        const containter = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        containter.insertBefore(div, form);
        //timeout 
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000)
    }

    deleteBook(target) {
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove()
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//local storage class
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books =[]
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);
        localStorage.setItem('books', JSON.stringify(books))
    }

    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book) {
            const ui = new UI;
            //add book to ui
            ui.addBookToList(book)
        })
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        
        books.forEach(function(book, i) {
            if(book.isbn === isbn){
                books.splice(i, 1)
            }
        });
        localStorage.setItem('books', JSON.stringify(books))
    }
}

//dom load event
document.addEventListener('DOMContentLoaded', Store.displayBooks())

document.getElementById('book-form').addEventListener('submit', function(e){
    
    //get form values

    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
   
    //instantiate book
    const book = new Book(title, author, isbn);

    //instantiate ui
    const ui = new UI();

    //validation
    if(title === '' || author === '' || isbn === ''){
        //error handling 
        ui.showAlert('Please enter values in all fields', 'error')
    } else {

        ui.addBookToList(book);

        Store.addBook(book)

        //show success allert
        ui.showAlert('Book Added', 'success');
        

        ui.clearFields()
    }
    
    
    // console.log(ui)

   
    // console.log(book)
    // console.log(title, author, isbn)
    e.preventDefault();
})

//event listerner for delete

document.getElementById('book-list').addEventListener('click', function(e) {
    
    const ui = new UI()

    ui.deleteBook(e.target)

    //delete from ls
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    //show message

    ui.showAlert('Book Removed', 'success')
    e.preventDefault()
})
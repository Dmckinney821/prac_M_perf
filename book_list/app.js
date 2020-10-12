
//book constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}   

//ui constructor

function UI() {}
UI.prototype.addBookToList = function(book){
    list = document.getElementById('book-list');

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

UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove()
    }
}

//show alert method

UI.prototype.showAlert = function(message, className){
    //create div
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

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//event listeners

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

    //show message

    ui.showAlert('Book Removed', 'success')
    e.preventDefault()
})
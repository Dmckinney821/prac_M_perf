
//define ui vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks')
const filter= document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask)
    taskList.addEventListener('click', removeTask)
    clearBtn.addEventListener('click', clearTasks)
    filter.addEventListener('keyup', filterTasks)
    //dom load event
    document.addEventListener('DOMContentLoaded', getTasks)
}


function addTask(e) {
    if(taskInput.value === ''){
        alert('Add something')
    } 
    const li = document.createElement('li');

    li.className = 'collection-item';

    //create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value))
    const link = document.createElement('a');
    //adding class
    link.className = 'delete-item secondary-content';
    //add icn html
    link.innerHTML = "<i class='fa fa-remove'></i>"
    //append link to li
    li.appendChild(link)

    taskList.appendChild(li)
    //append li to ul

    storeTaskInLocalStorage(taskInput.value);
    
    taskInput.value = '';
    e.preventDefault();
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task) => {
        const li = document.createElement('li')
        li.className = 'collection-item'
        li.appendChild(document.createTextNode(task))
        const link = document.createElement('a')
        link.className = 'delete-item secondary-content';
        link.innerHTML = "<i class='fa fa-remove'></i>"
        li.appendChild(link)
        taskList.appendChild(li)
    })
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('ya sure')){
            e.target.parentElement.parentElement.remove()
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach((task, i) => {
        if(taskItem.textContent === task) {
            tasks.splice(i, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearTasks(e){
    // taskList.innerHTML = '' slow boring way

    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }

    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
    localStorage.clear()
}   

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block'
            } else {
                task.style.display = 'none'
            }
        }
    );

}
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('todo-add');
const todoList = document.getElementById('todolist');
const inputCount=document.getElementById('input-count');
const inputTotal=document.getElementById('total');
const inputTotalDone=document.getElementById("total-done");




addButton.addEventListener('click', addItemToList);
todoList.addEventListener('click', handleItemClick);
todoInput.addEventListener('keydown',handInputCount);
todoInput.addEventListener('click',handInputCount);





function handleItemClick(event){
   

    if(event.target.dataset.action==='remove'){
        event.target.closest('li').remove();
    }
    
    if(event.target.dataset.action==="status"){
        event.target.closest('li').classList.toggle('complete');
    
}


}

function handInputCount(event){
const count=  event.target.value.length;
 
    if( count===0){
        inputCount.innerText='';
        return;  }
    
    inputCount.innerText='Count:'+count;
    inputTotalDone.innerText="total-done:"+''; 
   
   
}




//function handleItemClick(event) {
    //console.log(event.target.dataset) 
    //console.log(event.target.closest('li'));
//}

function addItemToList( ) {
    if(!todoInput.value) return;

    
    const listItem = document.createElement('li');
    const listItemRemoveBtn = document.createElement('button');
    const listCheckboxStatus = document.createElement('input');
    const listTextSpan = document.createElement('span');
    const inputCount=document.createElement('input')

    listItem.classList.add('todolist__item');

    listItemRemoveBtn.innerText = 'x';
    listItemRemoveBtn.setAttribute('data-action', 'remove')
    listTextSpan.innerText = todoInput.value;
    listCheckboxStatus.type = 'checkbox';
    listCheckboxStatus.setAttribute('data-action','status');
    

    listItem.append(listCheckboxStatus)
    listItem.append(listTextSpan)
    listItem.append(listItemRemoveBtn)

const todos= [];
 localStorage.getItem('todos');
 //JSON.parse(localStorage.getItem('todos'));
 todos.push({ text: 'some   text', status: 'NOT' })
  JSON.stringify (todos)
  localStorage.setItem('todos', todos);

 

    todoInput.value = '';
    inputCount.innerText='';
    todoList.append(listItem);
    todoList.prepend (inputTotal);

 
    for (let i = 0; i < todos.lenght; i++) {
        addTodoItem(text, status)   
        };   
    
   
    const total=event.target.value++;
    
    inputTotal.innerText='total:'+total;
   
    
   }

   

   const todos = [{
        text: 'Hello',
        status: 'DONE'
     },
     {
         text: 'Buy Milk',
         status: 'DONE'
     }]
     localStorage.setItem('todos', JSON.stringify(todos))
     console.log(JSON.parse(localStorage.getItem('todos')))
   
 

    

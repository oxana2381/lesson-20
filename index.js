
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
    let todosStorage= JSON.parse(localStorage.getItem('todos'));
    todosStorage === null ? todosStorage = [] : todosStorage;
    
    

    if(event.target.dataset.action==='remove'){
        event.target.closest('li').remove();
        localStorage.removeItem('todos');
        
    }
    
    if(event.target.dataset.action==="status"){
        event.target.closest('li').classList.toggle('complete');
       

    }
}


function handInputCount(event){
let count=  event.target.value.length;
 
    if( count===0){
        inputCount.innerText='';
        return;  }
    
    inputCount.innerText='Count:'+count;}
   
    let todosStorage= JSON.parse(localStorage.getItem('todos'));
    todosStorage === null ? todosStorage = [] : todosStorage;

    for (let i = 0; i < todosStorage.lenght; i++) {
        addItemToList (todosStorage [i].text , todosStorage [i].status )

        
     
   
}; 




//function handleItemClick(event) {
    //console.log(event.target.dataset) 
    //console.log(event.target.closest('li'));
//}

function addItemToList( id,text,status = false) {
    if(!todoInput.value && !text) return;

    
    const listItem = document.createElement('li');
    const listItemRemoveBtn = document.createElement('button');
    const listCheckboxStatus = document.createElement('input');
    const listTextSpan = document.createElement('span');
    const inputCount=document.createElement('input')

    listItem.classList.add('todolist__item');

    listItemRemoveBtn.innerText = 'x';
    listItemRemoveBtn.setAttribute('data-action', 'remove')

    if (todoInput.value) {
        listTextSpan.innerText = todoInput.value;
    } else  {
        listTextSpan.innerText = text;
    };

   
    listTextSpan.innerText = todoInput.value;
    listCheckboxStatus.type = 'checkbox';
    listCheckboxStatus.checked = status;
    listCheckboxStatus.setAttribute('data-action','status');
    

    listItem.append(listCheckboxStatus)
    listItem.append(listTextSpan)
    listItem.append(listItemRemoveBtn)



 let todosStorage= JSON.parse(localStorage.getItem('todos'));
 todosStorage === null ? todosStorage = [] : todosStorage;    
 

 todosStorage.push({
      id: todosStorage.length,
      text:   todoInput.value,
      status: false,
      
     });

localStorage.setItem('todos', JSON.stringify (todosStorage));
 
 

    todoInput.value = '';
    inputCount.innerText='';
    todoList.append(listItem);
    todoList.prepend (inputTotal);

 
    
   
    let total=event.target.value++;
    inputTotal.innerText='total:'+total;
    

    let count=  event.target.value.length;
    inputTotalDone.innerText="total-done:"+ (total===count); 

    

    }







 

    

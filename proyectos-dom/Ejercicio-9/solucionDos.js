const todoItems = document.querySelectorAll('.todoItem');
    const todoWrapper = document.querySelector('.completedTodoWrapper');
    const completed = document.querySelector('.completed');
   
     todoItems.forEach(item =>{
        item.addEventListener('click', ()=>{
            todoWrapper.insertBefore(item, completed);
        })
        
     })
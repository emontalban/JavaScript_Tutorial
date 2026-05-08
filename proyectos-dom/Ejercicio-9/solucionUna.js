  const todoItems = document.querySelectorAll('.todoItem');
  const completed = document.querySelector('.completed');
  const todoWrapper = document.querySelector('.completedTodoWrapper');

  todoItems.forEach(item => item.addEventListener('click', (event) => {
    let crearLista = document.createElement('li');
    let todoContent = document.createTextNode(item.textContent);
    crearLista.appendChild(todoContent);
    todoWrapper.insertBefore(crearLista, completed);
    item.remove();
  }))
const todoInput = document.querySelector('#todoInput');

const createTodo = () => {
  const todoList = document.querySelector('#todoList');
  const addLi = document.createElement('li');
  const addSpan = document.createElement('span');

  addSpan.textContent = todoInput.value;
  addLi.appendChild(addSpan);
  todoList.appendChild(addLi);
  todoInput.value = '';
}

const keyCodeChk = () => {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== '') {
    createTodo();
  }
}
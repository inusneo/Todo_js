const todoInput = document.querySelector('#todoInput');

const keyCode = () => {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== '') {
    const todoList = document.querySelector('#todoList');
    const addLi = document.createElement('li');
    const addSpan = document.createElement('span');

    addSpan.textContent = todoInput.value;
    addLi.appendChild(addSpan);
    todoList.appendChild(addLi);
    todoInput.value = '';
  }
}
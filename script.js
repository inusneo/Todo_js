const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

const createTodo = () => {
  const addLi = document.createElement('li');
  const addSpan = document.createElement('span');
  const addChk = document.createElement('input');
  addChk.setAttribute('type', 'checkbox');

  addChk.addEventListener('click', () => {
    addLi.classList.toggle('complete');
  });
  addLi.addEventListener('dblclick', () => {
    addLi.remove();
  });

  addSpan.textContent = todoInput.value;
  addLi.appendChild(addChk);
  addLi.appendChild(addSpan);
  todoList.appendChild(addLi);
  todoInput.value = '';
  saveList();
}

const keyCodeChk = () => {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== '') {
    createTodo();
  }
}

const delAll = () => {
  const liList = document.querySelectorAll('li');
  for (let idx of liList) {
    idx.remove();
  }
}

const saveList = () => {
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todo = todoList.children[i].querySelector('span').textContent;
    saveItems.push(todo);
  }
  console.log(saveItems);
}
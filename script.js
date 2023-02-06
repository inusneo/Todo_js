const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

const savedTodoList = JSON.parse(localStorage.getItem('saved-items'));

const createTodo = (storageData) => {
  let todoCont = todoInput.value;
  if (storageData) {
    todoCont = storageData.contents;
  }

  const addLi = document.createElement('li');
  const addSpan = document.createElement('span');
  const addChk = document.createElement('input');
  addChk.setAttribute('type', 'checkbox');

  addChk.addEventListener('click', () => {
    addLi.classList.toggle('complete');
    saveList();
  });
  addLi.addEventListener('dblclick', () => {
    addLi.remove();
    saveList();
  });

  if (storageData?.complete) {
    addLi.classList.add('complete');
  }

  addSpan.textContent = todoCont;
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
    const todoObj = {
      contents : todoList.children[i].querySelector('span').textContent,
      complete : todoList.children[i].classList.contains('complete'),
    }
    saveItems.push(todoObj);
  }
  localStorage.setItem('saved-items', JSON.stringify(saveItems));
  console.log(saveItems);
}

if (savedTodoList) {
  for (let i = 0 ; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}
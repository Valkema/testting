const createTaskBtn = document.getElementById('createTaskBtn');
const deleteTaskBtn = document.getElementById('deleteTaskBtn');
const taskList = document.getElementById('taskList');
const newTask = document.querySelector('input[name="task"]');


createTaskBtn.addEventListener('click', createNewTask;

function createNewTask(e) {
  const newListItem = document.createElement('li');
  newListItem.textContent = newTask.value;
  taskList.appendChild(newListItem);
}


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(filter = "all") {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  let filteredTasks = tasks;
  if (filter === "completed") filteredTasks = tasks.filter(t => t.completed);
  if (filter === "pending") filteredTasks = tasks.filter(t => !t.completed);

  filteredTasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task" + (task.completed ? " completed" : "");
    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    const actions = document.createElement("div");
    actions.className = "actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = () => toggleComplete(index);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTask(index);

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(actions);
    taskList.appendChild(taskDiv);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    input.value = "";
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function filterTasks(type) {
  renderTasks(type);
}

renderTasks();

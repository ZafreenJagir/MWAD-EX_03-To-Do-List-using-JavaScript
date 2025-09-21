# MWAD-EX_03-To-Do-List-using-JavaScript
## Date: 21-09-2025
###### Name : Zafreen J
###### Register Number : 212223040252

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM

.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Todo App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Todo Application</h2>
    <input type="text" id="taskInput" placeholder="Enter a task"/>
    <button class="add-btn" onclick="addTask()">Add Task</button>
    <div id="taskList"></div>
    <div class="filters">
      <button onclick="filterTasks('all')">All</button>
      <button onclick="filterTasks('completed')">Completed</button>
      <button onclick="filterTasks('pending')">Pending</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>


```

.css
```
body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
h2 {
  text-align: center;
}
#taskInput {
  width: 70%;
  padding: 8px;
  margin-right: 10px;
}
button {
  padding: 8px 12px;
  margin: 5px 0;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
.add-btn {
  background: #28a745;
  color: white;
}
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 5px 0;
  background: #f9f9f9;
  border-radius: 4px;
}
.task.completed span {
  text-decoration: line-through;
  color: gray;
}
.actions button {
  margin-left: 5px;
}
.delete-btn {
  background: #dc3545;
  color: white;
}
.edit-btn {
  background: #ffc107;
}
.complete-btn {
  background: #007bff;
  color: white;
}
.filters {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.filters button {
  flex: 1;
  margin: 0 5px;
  background: #6c757d;
  color: white;
}

```



.js

```
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



```

## OUTPUT

<img width="793" height="700" alt="Screenshot 2025-09-21 173502" src="https://github.com/user-attachments/assets/5ec0fd35-90a3-4e82-a8f5-943c48e191ec" />


<img width="819" height="545" alt="Screenshot 2025-09-21 173517" src="https://github.com/user-attachments/assets/a34d9569-2d5a-4e5a-a1e3-9c4682642df3" />


<img width="786" height="420" alt="image" src="https://github.com/user-attachments/assets/4c9caded-a324-4a5c-a794-30d5dbc12fbb" />


## RESULT
The program for creating To-do list using JavaScript is executed successfully.

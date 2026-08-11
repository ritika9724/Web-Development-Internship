let validWords = [
    "study",
    "homework",
    "assignment",
    "project",
    "coding",
    "meeting",
    "shopping",
    "exercise",
    "reading",
    "practice",
    "sleeping",
    "walking"
];

function updateCounter() {
    let totalTasks = document.querySelectorAll("#taskList li").length;
    document.getElementById("taskCount").innerText =
        "Total Tasks: " + totalTasks;
}

function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim().toLowerCase();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    if (!validWords.includes(taskText)) {
        alert("Please enter a meaningful task.\nExamples: study, homework, coding, project");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    updateCounter();
    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    updateCounter();
    saveTasks();
}

function toggleTask(task) {
    task.parentElement.classList.toggle("completed");
    saveTasks();
}

// Save Tasks
function saveTasks() {
    localStorage.setItem(
        "tasks",
        document.getElementById("taskList").innerHTML
    );
}

// Load Tasks
function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        document.getElementById("taskList").innerHTML = savedTasks;
    }

    updateCounter();
}

// Load tasks when page opens
window.onload = loadTasks;

// Enter key support
document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
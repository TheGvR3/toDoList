function addTask() {
    const taskInput = document.querySelector("#taskInput");
    const taskList = document.querySelector("#taskList");

    if (taskInput.value === '') {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check-button");
    checkBox.onclick = function () {
        taskText.style.textDecoration = checkBox.checked ? "line-through" : "none";
    };

    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(checkBox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

function enterF(key){
    if(key === "Enter"){
        addTask()
    }
}

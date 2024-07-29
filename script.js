document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;

    if (taskText.trim() !== "") {
        let taskList = document.getElementById('taskList');

        let listItem = document.createElement('li');
        listItem.textContent = taskText;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = "";
        taskInput.focus();
    }
});

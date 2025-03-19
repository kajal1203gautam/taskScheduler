const taskInput = document.getElementById('task');
const priorityInput = document.getElementById('priority');
const deadlineInput = document.getElementById('deadline');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const task = taskInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    if (priority === "" || deadline === "") {
        alert('Please select an upcoming date for dealine')
        return;
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
        alert('Please select an upcoming date for deadline')
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('task')
    taskItem.innerHTML =
        `         <div class="card mb-2"> 
                  <div class="item">
                    <p>${task}</p>
                    <p>Priority : ${priority}</p>
                    <p>Deadline : ${deadline}</p>
                    <p class="badge rounded-pill bg-success">Mark Done</p>
                    </div>
                    </div>
                    
    
    `
    taskList.appendChild(taskItem);
    localStorage.setItem(taskList);

    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";

})


const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const maxText = taskText.substring(0, 35);
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${maxText}</span>
            <button class="editbutton" onclick="editTask(this)">Editar</button>
            <button class="deletebutton" onclick="deleteTask(this)">Remover</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newText = prompt('Editar tarefa:', span.textContent);
    if (newText !== null && newText.trim() !== '') {
        span.textContent = newText.substring(0, 35);
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    if (confirm('Tem certeza que deseja remover esta tarefa?')) {
        li.remove();
    }
}

addTaskBtn.addEventListener('click', addTask);

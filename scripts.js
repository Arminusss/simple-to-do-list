// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const taskTableBody = document.querySelector('#taskTable tbody');

    todoForm.addEventListener('submit', addTask);
    taskTableBody.addEventListener('click', handleTaskClick);

    function addTask(event) {
        event.preventDefault(); // Prevent form from submitting

        const taskInput = document.getElementById('newTask');
        const taskDate = document.getElementById('taskDate');
        const taskTime = document.getElementById('taskTime');
        const taskDescription = document.getElementById('taskDescription');

        const taskText = taskInput.value.trim();
        const dateText = taskDate.value;
        const timeText = taskTime.value;
        const descriptionText = taskDescription.value.trim();

        if (taskText === '' || dateText === '' || timeText === '' || descriptionText === '') return;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${taskText}</td>
            <td>${dateText}</td>
            <td>${timeText}</td>
            <td>${descriptionText}</td>
            <td class="status">Incomplete</td>
            <td>
                <button class="finishButton">Toggle Status</button>
                <button class="deleteButton">Delete</button>
            </td>
        `;
        taskTableBody.appendChild(row);

        taskInput.value = ''; // Clear input fields
        taskDate.value = '';
        taskTime.value = '';
        taskDescription.value = '';
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('deleteButton')) {
            const row = event.target.closest('tr');
            taskTableBody.removeChild(row);
        } else if (event.target.classList.contains('finishButton')) {
            const row = event.target.closest('tr');
            const statusCell = row.querySelector('.status');
            if (statusCell.textContent === 'Incomplete') {
                statusCell.textContent = 'Completed';
            } else {
                statusCell.textContent = 'Incomplete';
            }
        }
    }
});

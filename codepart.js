document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            return; // Ignore empty input
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button class="delete">Delete</button>
        `;

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';

        // Add event listener for delete button
        const deleteButton = listItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    });

    // Optional: Allow pressing Enter to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});

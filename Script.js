document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    const addTask = (task) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    };

    // Event listener for form submission
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = todoInput.value.trim();
        if (task) {
            addTask(task);
            todoInput.value = '';
        }
    });
});

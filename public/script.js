async function loadTasks() {
    const res = await fetch('/tasks');
    const tasks = await res.json();

    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.name;
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById('taskInput');
    const name = input.value.trim();

    if (!name) {
        alert("Enter a task");
        return;
    }

    await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });

    input.value = '';
    loadTasks();
}

loadTasks();
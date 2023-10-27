document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.entered-list');
    const addBtn = document.querySelector('.add-list');
    const tasks = document.querySelector('.task');

    input.addEventListener('keyup', () => {
        if (input.value.trim() !== '') {
            addBtn.classList.add('active');
        } else {
            addBtn.classList.remove('active');
        }
    });

    addBtn.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
                <p class="task-text">${input.value}</p>
                <input type="text" class="edit-input" style="display: none;">
                <div class="item-btn">
                    <i class="fa-solid fa-pen-to-square edit-btn"></i>
                    <i class="fa-solid fa-xmark delete-btn"></i>
                </div>
            `;
            tasks.appendChild(newItem);
            input.value = '';
        } else {
            alert('Please enter a task');
        }
    });

    tasks.addEventListener('click', (e) => {
        const item = e.target.closest('.item');
        if (e.target.classList.contains('delete-btn')) {
            item.remove();
        }
    });

    tasks.addEventListener('click', (e) => {
        const item = e.target.closest('.item');
        if (e.target.classList.contains('edit-btn')) {
            const taskText = item.querySelector('.task-text');
            const editInput = item.querySelector('.edit-input');

            taskText.style.display = 'none';
            editInput.style.display = 'block';
            editInput.value = taskText.textContent;

            // Focus on the edit input for immediate editing
            editInput.focus();
        }
    });

    tasks.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const item = e.target.closest('.item');
            const taskText = item.querySelector('.task-text');
            const editInput = item.querySelector('.edit-input');

            taskText.textContent = editInput.value;
            taskText.style.display = 'block';
            editInput.style.display = 'none';
        }
    });
});

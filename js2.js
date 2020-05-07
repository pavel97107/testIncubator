const btn = document.querySelector('button');
const deleteBtn = document.getElementById('delete');
const text = document.getElementById('text');



btn.addEventListener('click', () => {
    createTasks(text.value.toString());
    getTasks()
        .then(data)
});


deleteBtn.addEventListener('click', () => {
    updateTasks('learn JS', 'c0993095-3225-40d3-8747-ec7ff5d07666');
});



const data = (tasks) => {
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        li.textContent = task.title;
        document.querySelector('body').appendChild(li);
    })
};

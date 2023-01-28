export const DOM_CONTENT = () =>{
    const element = document.getElementById('content');
    
    //Header
    const createHeader = (() => {
        const header = document.createElement('header');
        header.className = 'header';
        header.innerHTML = `
        <div class="logo">TuDu</div>
        <h4 id='projectTitle'>Inbox</h4>
        `;
        element.appendChild(header)
    })();

    //Menu
    const createMenu = (() => {
        const main = document.createElement('main');
        main.innerHTML = `
        <section class="menu">
            <button class="btn active" id="inbox">Inbox</button>
            <h3 class="project-section-title">Projects</h3>           
            <button class="btn active" id="create-new-project">Create new project</button>
            <form id='new-project-form' class='hidden'>
                <input type='text' id='new-project-form-input' placeholder="Write the new name of the project">
                <input type='submit' value='Submit' id='new-project-form-submit'>
            </form> 
            <div id="projects-list"></div>
        </section>
        <section class="task-container" id="task-container">
            <button class="btn createTask" id="add-task">Add task</button>
            <form id="todo-form" class='hidden'>
                <label for="task-name">Task Name:</label>
                <input type="text" id="task-name" name="task-name">
                <label for="due-date">Due Date:</label>
                <input type="date" id="due-date" name="due-date">
                <label for="task-description">Task Description:</label>
                <input type="text" id="task-description" name="task-description">
                <input type="submit" value="Submit" id='submit'>
            </form>
            <div class="cards" id="cards"></div>
        </section>
        `;
        element.appendChild(main)
    })();

    const showForm = (() =>{
        let addBtn = document.getElementById('add-task');
        let form = document.getElementById('todo-form');
        addBtn.addEventListener('click',function(){
            if (form.classList.contains('formShown')) {
                form.classList.remove('formShown');
                form.classList.add('hidden');
            } else {
                form.classList.remove('hidden');
                form.classList.add('formShown');
            }
        });
    })()
    
    const formNewProject = (() => {
        let newProject = document.getElementById('create-new-project');
        let formProject = document.getElementById('new-project-form');
        newProject.addEventListener('click', () => {
            if (newProject.classList.contains('active')) {
                newProject.classList.remove('active');
                newProject.classList.add('hidden');
                formProject.classList.remove('hidden')
                formProject.classList.add('active')
            } else {
                newProject.classList.remove('hidden');
                newProject.classList.add('active');
                formProject.classList.remove('active')
                formProject.classList.add('active')
            }
        })
    })();
}



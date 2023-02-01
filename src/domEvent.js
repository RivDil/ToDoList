import { project } from "./project";



export const DOM_EVENTS = () => {
        

    const renderProjects = (projects) => {
        let projectsContainer = document.getElementById("projects-list");
        projectsContainer.innerHTML = ""; // clearing the container
        for (let i = 0; i<projects.length; i++){
            let projectI  = projects[i];
            let projectElement = document.createElement("div");
            projectElement.innerHTML = `
            <div class='title-project--container'>
                <button class='projectBtn'>${projectI.getName()}</button><button class='eraseProjectBtn'>X</button>
            </div>
            `;
            let projectBtn = projectElement.querySelector('.projectBtn'); // select the button element
            projectBtn.addEventListener("click", function(){
                showTodos(projectI);
                project.setCurrentProject(projectI); 
                projectTitle(projectI.getName())         
            });
            let eraseProjectBtn = projectElement.querySelector('.eraseProjectBtn');
            eraseProjectBtn.addEventListener('click',function(){
                eliminateProject()
            })
            projectsContainer.appendChild(projectElement);
        }
    }
    

    
    const showTodos = (project) => {
        let todos = project.getTodos();
        let todosContainer = document.getElementById('cards');
        todosContainer.innerHTML = "";
        for (let i = 0; i< todos.length; i++){
            let todo = todos[i];
            let todoElement = document.createElement("div");
            todoElement.setAttribute('id','card-container')
            todoElement.innerHTML = `
                <button id='checkbtn'></button>
                <div id='card-information'>
                <h3>${todo.name}</h3>
                <h3>${todo.dueDate}</h3>
                <p>${todo.description}<p>
                </div>
            `;
            todoElement.classList.add('todo-element');
            todosContainer.appendChild(todoElement);
        }
    }
    const addTodos = (() => {
        let form = document.getElementById('todo-form')
        form.addEventListener('submit', (event)=>{
            event.preventDefault();
            let currentProject = project.getCurrentProject();
            let name = form.querySelector('input[name="task-name"]').value;
            let description = form.querySelector('input[name="task-description"]').value;
            let dueDate = form.querySelector('input[name="due-date"]').value;
            currentProject.addTodos({name: name,description: description,dueDate: dueDate});
            form.querySelector('input[name="task-name"]').value = '';
            form.querySelector('input[name="task-description"]').value = '';
            form.querySelector('input[name="due-date"]').value = '';
            showTodos(currentProject)

        });
    })();

    const createProject = (() => {
        let formProject = document.getElementById('new-project-form');
        let nameProject = document.getElementById('new-project-form-input');
        let newProject = document.getElementById('create-new-project');
        let error = document.createElement('p')
        error.classList.add('project-submit-btn')
        formProject.addEventListener('submit', (event)=>{
            event.preventDefault();
            if (nameProject.value == ''){
                error.innerHTML = 'The project name cannot be blank';
                formProject.appendChild(error)
            }else{
                error.innerHTML = '';
                new project(nameProject.value)
                renderProjects(project.allProjects) // call the function to render the new project
                nameProject.value = '';
                formProject.classList.add('hidden')
                newProject.classList.remove('hidden')
                newProject.classList.add('active')
            }
        });
    })();

    const eliminateProject = () => {
        let eraseProjectBtns = document.querySelectorAll('.eraseProjectBtn');
        eraseProjectBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                let projectElement = event.target.parentElement.querySelectorAll('.projectBtn');
                let projectName = projectElement.textContent;
                console.log(projectElement)
                let projectIndex = project.allProjects.map(e => e.name).indexOf(projectName);
                console.log(project.allProjects)
                project.allProjects.splice(projectIndex, 1); // we eliminate it. we have to reference project because it's a static property
                console.log('eliminated')
                renderProjects(project.allProjects)
            });
        });
    };

    const projectTitle = (project) =>{
        let title = document.getElementById('projectTitle')
        title.innerHTML = project
    }

    const showProjects = (() => {
        renderProjects(project.allProjects);
    })();
    
}

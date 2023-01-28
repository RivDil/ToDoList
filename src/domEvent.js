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
            projectElement.addEventListener("click", function(){
                showTodos(projectI);
                project.setCurrentProject(projectI);          
            });
            projectsContainer.appendChild(projectElement);
        }
    }
    
    const showProjects = (() => {
        renderProjects(project.allProjects);
    })();
    
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
            console.log(currentProject)
            let name = form.querySelector('input[name="task-name"]').value;
            let description = form.querySelector('input[name="task-description"]').value;
            let dueDate = form.querySelector('input[name="due-date"]').value;
            currentProject.addTodos({name: name,description: description,dueDate: dueDate});
            showTodos(currentProject)           
        });
    })();

    const createProject = (() => {
        let formProject = document.getElementById('new-project-form');
        let nameProject = document.getElementById('new-project-form-input');
        formProject.addEventListener('submit', (event)=>{
            event.preventDefault();
            new project(nameProject.value)
            renderProjects(project.allProjects) // call the function to render the new project
            nameProject.value = '';
        });
    })();
}

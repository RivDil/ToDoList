import { createTodo } from "./todo";

//We create the Project class

export class project{
    //we only need the name argument as it's not requires a to do to create a project
    static allProjects = [] // i want to keep track of all the instances created in order to create the sections on the HTML
    constructor(name){
        this.name = name
        this.todos = [] 
        project.allProjects.push(this);
    }
    addTodos(todo){
        this.todos.push(createTodo(todo)); // we use todo as an argument in order to create new todos when we need to.
    }
    eliminateTodos(index){
        if (index > -1) { 
            this.todos.splice(index, 1);
          }
    }
    eliminateProject(){
        let index = project.allProjects.indexOf(this); //we look for the index of the project we look to eliminate
        if (index > -1) { 
            project.allProjects.splice(index, 1); // we eliminate it. we have to reference project because it's a static property
        }
    }
}

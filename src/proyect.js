import { createTodo } from "./todo";

//We create the Project class

export class project{
    //we only need the name argument as it's not requires a to do to create a project
    constructor(name){
        this.name = name
        this.todos = [] 
    }
    addTodos(todo){
        this.todos.push(createTodo(todo)); // we use todo as an argument in order to create new todos when we need to.
    }
    eliminateTodos(index){
        if (index > -1) { 
            this.todos.splice(index, 1);
          }
    }
}

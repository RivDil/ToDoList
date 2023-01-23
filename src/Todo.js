import { requiredParam } from "./param"


//this is going to be the factory of objects for the to do list it's going to be used on the project.js in order to create to do's inside the project class

export function createTodo({
    name = requiredParam('name'),
    description = ('description'),
    dueDate = new Date(),
    check = false,
}={}){
    return {name , description, dueDate, check}
}
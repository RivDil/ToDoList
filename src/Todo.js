import { requiredParam } from "./param"


//this is going to be the factory of objects for the to do list

//I created the factory

export function createTodo({
    name = requiredParam('name'),
    description = ('description'),
    dueDate = new Date(),
    check = false,
}={}){
    return {name , description, dueDate, check}
}
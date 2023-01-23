// RequireParam will check if the user entered the name of the to do list (it's the only requeriment to create a task)

export function requiredParam(paramName) {
    throw new Error(`Missing required parameter: ${paramName}`);
}
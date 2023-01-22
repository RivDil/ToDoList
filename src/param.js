// RequireParam will check if the user entered the name of the to do list (it's the only one required to enter)

export function requiredParam(paramName) {
    throw new Error(`Missing required parameter: ${paramName}`);
}
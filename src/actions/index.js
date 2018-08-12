export function createUser(values) {
    console.log(values);
    return {
        type: 'CREATE_USER',
        payload: values
    }
}
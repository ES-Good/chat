export function validatePass(password){
    return password.length < 6 ? true : false
}

export function validator (userData) {

    const errors = {
        email : '',
        password : '',
        confirm : '',
    }
    
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const containsNumberRegex = /\d/

    if (!mailRegex.test(userData.email)) {
        errors.email = 'must enter valid email'
    } else if (userData.email.length > 35) {
        errors.email = 'email must be less than 36 characters'
    }

    if (!containsNumberRegex.test(userData.password)) {
        errors.password = 'password must have at least 1 number'
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = `password must be 6 to 10 characters`
    }
    
    if (!userData.confirm) {
        errors.confirm = 'please confirm your password'
    } else if (userData.confirm !== userData.password) {
        errors.confirm = "password does not match"
    }

    return errors;
}


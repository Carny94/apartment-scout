import * as usersAPI from './users-api';


export default function signUp(userData) {
    const token = await usersAPI.signUp(userData)
    return token; 
    
}
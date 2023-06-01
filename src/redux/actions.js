
export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const SET_USER = 'SET_USER'

export const addFav = (character) => {
    return {
        type : ADD_FAV,
        payload : character
    }
} 

export const removeFav = (id) => {
    return {
        type : REMOVE_FAV,
        payload : id
    }
}

export const setUser = (user) => {
    return {
        type : SET_USER,
        payload : user
    }
}
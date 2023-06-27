// imports
import axios from 'axios'

export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const SET_USER = 'SET_USER'
export const FILTER = 'FILTER'

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav'
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character)
            return dispatch({
                type : ADD_FAV,
                payload : data
            })
        } catch (error) {
            window.alert(error.message)
        }
    }
} 

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint)
            return dispatch({
                type : REMOVE_FAV,
                payload : data
            })
        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const setUser = (user) => {
    return {
        type : SET_USER,
        payload : user
    }
}

export const filterCards = (filterObj) => {
    return {
        type : FILTER,
        payload : filterObj
    }
}


import { ADD_FAV, REMOVE_FAV, SET_USER } from './actions';

const initialState = {
    user : '',
    myFavorites : [],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, myFavorites : [...state.myFavorites, action.payload]}
        case REMOVE_FAV:
            return {...state, myFavorites : state.myFavorites.filter(favs => {return favs.id !== Number(action.payload)})}
        case SET_USER:
            return {...state, user : action.payload}
        default:
            return {...state}
    }
}

export default rootReducer;
import { ADD_FAV, REMOVE_FAV, SET_USER, FILTER, ORDER } from './actions';

const initialState = {
    user : '',
    myFavorites : [],
    allCharacters : [],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, 
                myFavorites : [...state.myFavorites, action.payload], 
                allCharacters : [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            const netFavs = state.myFavorites.filter(favs => {return favs.id !== Number(action.payload)})
            return {...state, 
                myFavorites : netFavs,
            }
        case SET_USER:
            return {...state, 
                user : action.payload
            }
        case FILTER:
            const filteredFavs = [...state.allCharacters].filter((char) => {return char.gender === action.payload})
            if (action.payload === 'All') {
                return {...state, 
                    myFavorites : state.allCharacters,
                }
            } else {
                return {...state,
                    myFavorites : filteredFavs,
                }
            }
        case ORDER:
            const orderedFavs = [...state.allCharacters].sort((a, b) => {
                switch (action.payload) {
                    case 'A':
                        return (a.id - b.id)
                    case 'D':
                        return (b.id - a.id)
                    default:
                        return (state.allCharacters)
                }
            })
            return {...state,
                myFavorites : orderedFavs,
            }
        default:
            return {...state}
    }
}

export default rootReducer;
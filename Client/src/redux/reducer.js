import { GET_FAVS, ADD_FAV, REMOVE_FAV, SET_USER, FILTER, LOG_OUT } from './actions';

const initialState = {
    user : {},
    myFavorites : [],
    allCharacters : [],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_FAVS:
            return {...state,
                myFavorites : action.payload, 
                allCharacters : action.payload
            }
        case ADD_FAV:
            return {...state, 
                myFavorites : action.payload, 
                allCharacters : action.payload
            }
        case REMOVE_FAV:
            return {...state, 
                myFavorites : action.payload,
                allCharacters : action.payload
            }
        case SET_USER:
            return {...state, 
                user : action.payload
            }
        case FILTER:
            const filterObj = action.payload
            let filteredFavs = [...state.allCharacters]
            for (const prop in filterObj) {
                if (prop !== 'order' && filterObj[prop] !== 'All') {
                    filteredFavs = filteredFavs.filter(fav => fav[prop] === filterObj[prop])
                }
            }
            if (filterObj.order !== 'Added') {
                filteredFavs.sort((a, b) => {
                    switch (filterObj.order) {
                        case 'A':
                            return (a.id - b.id)
                        case 'D':
                            return (b.id - a.id)
                        default:
                            return ([...filteredFavs])
                    }
                })
            }
            return {...state,
                myFavorites: filteredFavs
            }
        
        case LOG_OUT:
            return {...initialState}

        default:
            return {...state}
    }
}

export default rootReducer;
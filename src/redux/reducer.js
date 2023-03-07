import { ADD_FAVORITE } from "../redux/actions";
import { DELETE_FAVORITE } from "../redux/actions";
import { FILTER } from "../redux/actions";
import { ORDER } from "../redux/actions";

const initialState={
    myFavorites: [],
    _allCharacters: []
}

const reducer= (state= initialState, action ) =>{

    switch(action.type){

    case ADD_FAVORITE: 

        return{
            ...state,
            myFavorites:[...state._allCharacters, action.payload],
            _allCharacters: [...state._allCharacters, action.payload]
        }

    case DELETE_FAVORITE:
        return{
            ...state,
            myFavorites: state.myFavorites.filter (char => char.id !== action.payload)
        }

    case FILTER :
        const { gender } = action.payload;
        const filteredCharacters = state._allCharacters.filter(character => character.gender === gender);
        return {
            ...state,
            myFavorites: filteredCharacters
        }

    case ORDER: 
        const { id } = action.payload;
        let sortedFavorites;
        if (id === 'Ascendente') {
            sortedFavorites = [...state.myFavorites.sort((a, b) => a.id - b.id)];
        } else if (id === 'Descendente') {
            sortedFavorites = [...state.myFavorites.sort((a, b) => b.id - a.id)];
        }
        return {            
            ...state,
            myFavorites: sortedFavorites
        }
        
        default: 
            return {...state}
    }
}

export default reducer;


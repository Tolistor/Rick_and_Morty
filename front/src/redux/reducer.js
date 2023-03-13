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
            myFavorites: action.payload,
            _allCharacters: action.payload
        }

    case DELETE_FAVORITE:
        return{
            ...state,
            myFavorites: action.payload,
            //state.myFavorites.filter (char => char.id !== action.payload)
        }

        case FILTER:
            const { _allCharacters } = state; // Obtenemos la lista completa de personajes
            const filteredFavorites = _allCharacters.filter((character) => character.gender === action.payload); // Filtramos por género
            return {
                ...state,
                myFavorites: filteredFavorites, // Actualizamos la lista de favoritos con los personajes filtrados
            };

    // case FILTER :
    //     const { gender } = action.payload;
    //     const filteredCharacters = state._allCharacters.filter(character => character.gender === gender);
    //     return {
    //         ...state,
    //         myFavorites: filteredCharacters
    //     }

    case ORDER:
        const sortedCharacters = [...state._allCharacters].sort((a, b) => {
            if (action.payload === 'Ascendente') {
                return a.id - b.id; // Ordenamos de menor a mayor
            } else if (action.payload === 'Descendente') {
                return b.id - a.id; // Ordenamos de mayor a menor
            } else {
                return 0;
        }
        });
        return {
            ...state,
          myFavorites: sortedCharacters, // Actualizamos la lista de favoritos con los personajes ordenados
        };


    // case ORDER: 
    //     const { id } = action.payload;
    //     let sortedFavorites;
    //     if (id === 'Ascendente') {
    //         sortedFavorites = [...state.myFavorites.sort((a, b) => a.id - b.id)];
    //     } else if (id === 'Descendente') {
    //         sortedFavorites = [...state.myFavorites.sort((a, b) => b.id - a.id)];
    //     }
    //     return {            
    //         ...state,
    //         myFavorites: sortedFavorites
    //     }
        
        default: 
            return {...state}
    }
}

export default reducer;



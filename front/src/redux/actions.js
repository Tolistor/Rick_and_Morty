import axios from 'axios'
export const ADD_FAVORITE= "ADD_FAVORITE"
export const DELETE_FAVORITE= "DELETE_FAVORITE"
export const FILTER= "FILTER"
export const ORDER= "ORDER"

export const addFavorite= (character)=>{
    return function(dispatch) {
        axios
        .post("http://localhost:3001/rickandmorty/favs", character)
        .then((response) =>{
            return dispatch ({
                type:ADD_FAVORITE,
                payload: response.data
            })
        })
    }
    //https://rickandmortyapi.com/api/character/
    
    // return{
    //     type:ADD_FAVORITE,
    //     payload: character }
}

export const deleteFavorite= (id)=>{
    return function (dispatch){
        axios
        .delete(`http://localhost:3001/rickandmorty/favs/${id}`)
        .then(response => {
            return dispatch ({
                type:DELETE_FAVORITE,
                payload: response.data
            })
        })
    }

    // return{
    //     type: DELETE_FAVORITE,
    //     payload: id}
}

export const filterCards= (gender)=>{
    return{
        type: FILTER, 
        payload: gender}
}

export const orderCards= (id)=>{
    return{type: ORDER, payload: id}
}


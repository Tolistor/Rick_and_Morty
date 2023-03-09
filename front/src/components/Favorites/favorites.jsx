import { useDispatch, useSelector } from "react-redux";
// import styles from './favorites.module.css'
// import { Link } from "react-router-dom";
import { orderCards } from "../../redux/actions";
import { filterCards } from "../../redux/actions";
import Card from "../Card/Card";


const Favorites= (props)=>{

  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOrderChange = (event)=> {
    dispatch(orderCards(event.target.value))
  }

  const handleFilterChange  = (event)=> {
    dispatch(filterCards(event.target.value))
  }
  
    return (
      <div>
        <div>
          <select name="order" onChange={handleOrderChange}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>

        <div>
          <select name="filter" onChange={handleFilterChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>

        {myFavorites.map((character) => {
          console.log(character.id)
          return (          

            <Card 
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              // onClose={() => props.onClose(character.id)}
              
            />              
          );
        })}
      </div>
    );
  };
  
  export default Favorites;
  


//   const {myFavorites}= useSelector(state=> state)
//     return(

//       <div className="posicioncard">
//     {

        
//       myFavorites.map((character)=>{
//         return(
            
//           <div className="letras">

//             <div>
//               <select name="order" onChange={handleOrderChange}>
//                 <option value="Ascendente">Ascendente</option>
//                 <option value="Descendente">Descendente</option>
//               </select>

//               <select name="filtrado" onChange={handleFilterChange}>
//                   <option value=" Male"> Male</option>
//                   <option value=" Female"> Female</option>
//                   <option value=" Genderless"> Genderless</option>
//                   <option value=" unknown"> unknown</option>
//                 </select>

//             </div>
            
//             <Link to= {`/detail/${character.id}`}>
//               <h2 >{character.name}</h2>
//             </Link>
//             <h2 >{character.species}</h2>
//             <h2 >{character.gender}</h2>
//             <img  src={character.image} alt={character.name} />
//           </div>
      
//             )
//         })
//     }
//     </div>
//   )

        
    
// }
// export default Favorites;

//------------------------------------
// <div className="letras">              
  
            //   <Link to={`/detail/${character.id}`}>
            //     <h2 key={character.id}>{character.name}</h2>
            //   </Link>
            //   <h2 >{character.species}</h2>
            //   <h2 >{character.gender}</h2>
            //   <img
                
            //     src={character.image}
            //     alt={character.name}
            //   />
            // </div>

//---------------------------------------------
/* <div key={character.id}>
      <h1 ><strong>{character.name}</strong></h1>
      <div>
      <Link to={`/detail/${character.id}`}>
      <img src={character.image} alt={character.name}/>
      </Link>
      </div>
      {/* <h2 className={style.species}>{character.species}</h2>
      <h4 className={style.gender}>{character.gender}</h4>
      <h5 className={style.origin}>Origin: {character.origin.name}</h5>
      <h6 className={style.location}>Location: {character.location.name}</h6> */
//  </div> 
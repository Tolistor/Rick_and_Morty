import styles from './SearchBar.module.css';
import { useState } from "react"

export default function SearchBar({onSearch}) {

   const [character, setCharacter] = useState("");

   const handleChange = (event) => {

      setCharacter(event.target.value)
   }

   return (
      <div className={styles.SearchBar}>
         <input className={styles.input} type='search' value={character} onChange={handleChange}/>
         <button className={styles.boton} onClick={()=>onSearch(character)}>Agregar</button> 
      </div>
   );
}

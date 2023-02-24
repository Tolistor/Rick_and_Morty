import styles from './Card.module.css';
import { Link } from "react-router-dom"

export default function Card(props) {
   return (
      <div className={styles.divCard}>
         <button 
            onClick={props.onClose}
         >X</button>
         <h2>{props.species}</h2>
         <img className= {styles.imgCard} src={props.image} alt="Foto"  />

         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>

         <h2>{props.gender}</h2>
      </div>
   );
}



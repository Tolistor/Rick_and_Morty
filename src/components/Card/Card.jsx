import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.divCard}>
         <button onClick={props.onClose}>X</button>
         <h2>{props.species}</h2>
         <img className= {styles.imgCard} src={props.image} alt="Foto"  />
         <h2>{props.name}</h2>
         <h2>{props.gender}</h2>
      </div>
   );
}



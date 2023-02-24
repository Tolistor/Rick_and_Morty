import Card from '../Card/Card';

// import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return ( 
   <div>
      {characters.map((elemento)=> (
         <Card 
         id={elemento.id} 
         name={elemento.name}
         species={elemento.species}
         gender={elemento.gender}
         image={elemento.image}
         onClose={() => props.onClose(elemento.id)}
         />         
      ))}
      
   </div>
   )
}

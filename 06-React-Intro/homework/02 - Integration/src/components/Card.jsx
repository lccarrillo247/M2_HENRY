export default function Card(props) {
   // const {name,status,species,origin,gender,image,onClose} = props;  // Destructuring
   return (
      <div>
          <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}

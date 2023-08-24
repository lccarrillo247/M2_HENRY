import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props); //Por qué ptas?
  }

  render() {

    const {animals} = this.props;

    return (
    <div>
      {animals.map((animal, index) => (  // Cómo foxys funciona "index" acá
        <div key={index}>
        <h5>{animal.name}</h5>
        <img src={animal.image}
        alt={animal.name}
        width='300px' 
        />
        <br></br>
        <span>{animal.specie}</span>
        </div>
        ))}
    </div>
    )
  }
}

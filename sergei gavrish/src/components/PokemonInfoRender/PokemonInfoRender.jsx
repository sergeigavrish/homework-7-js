import React, { Component, Fragment } from 'react';
import './PokemonInfoRender.css';

export default class PokemonInfoRender extends Component {
  render() {
    const { id, name } = this.props;
    const status = this.props.status ? this.props.status : 'Not catched';
    const date = this.props.date ? `caught on ${this.props.date}` : 'Not catched';
    
    return (
      <div className="pokemon-data">
        <img src={`https://raw.githubusercontent.com/gogumaUno/homework-7-js/master/pokemons/${id}.png`} alt={`${name} image`}/>
        <h2>name: {name}</h2>
        <p>status: {status}</p>
        <p>{date}</p>     
      </div>			
		);
	}
}

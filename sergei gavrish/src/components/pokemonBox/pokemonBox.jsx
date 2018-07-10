import React, { Component, Fragment } from 'react';
import './pokemonBox.css';
import Button from '../../containers/Button.jsx'
import { Route, Link } from 'react-router-dom';



export default class PokemonBox extends Component {
  render() {
    const { pokemons } = this.props;
    return(
      <Fragment>
        <div className = "container">
            {pokemons.map( pokemon => {
              const { id, name, status} = pokemon;
              const imgSrc = `https://raw.githubusercontent.com/gogumaUno/homework-7-js/master/pokemons/${id}.png`;
              return (
                <div key={id} className="card">
                  <Link to={`/${id}`} className="link">
                    <p>{name}</p>
                    <img src={imgSrc} alt={`${name} image`} />
                  </Link>
                  <Button {...pokemon}/>
                </div>
              );
            })}
        </div>
        <button onClick={this.props.onClick}>Load more</button>
      </Fragment>
    );
  }
}

import React, { Component, Fragment } from 'react';
import Load from './Load'
import PokemonInfoRender from '../components/PokemonInfoRender/index'

export default class PokemonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    }
  }

  loadPokemon = () => {
    const { id } = this.state;
    fetch(`http://localhost:3000/pokemons/${id}`)
    .then( response => response.json())
    .then( result => this.setState({
      name: result.name,
      status: result.status,
      date: result.date
    }));
  };

  componentDidMount() {
    this.loadPokemon()
  }

  render() {
    return (
      <PokemonInfoRender {...this.state} />
    );
  }
}

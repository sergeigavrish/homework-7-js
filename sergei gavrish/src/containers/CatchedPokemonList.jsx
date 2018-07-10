import React, { Component, Fragment } from 'react';
import PokemonBox from '../components/pokemonBox/index';
import Load from './Load';

export default class CatchedPokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      page: 1
    }
  }

  loadCatched = Load.catched.bind(this);

  componentDidMount() {
    this.loadCatched();
  }

  render() {
    const { pokemons } = this.state;
    return (
      <PokemonBox pokemons={this.state.pokemons} onClick={this.loadList}/>
    );
  }
}

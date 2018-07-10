import React, { Component, Fragment } from 'react';
import PokemonBox from '../components/pokemonBox/index';
import Load from './Load'

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      page: 1
    }
  }

  loadList = Load.list.bind(this);

  componentDidMount() {
    this.loadList();
  }

  render() {
    return (
      <PokemonBox pokemons={this.state.pokemons} onClick={this.loadList}/>
    );
  }
}

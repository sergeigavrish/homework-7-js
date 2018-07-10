import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PokemonList from './containers/PokemonList.jsx'
import CatchedPokemonList from './containers/CatchedPokemonList.jsx';
import PokemonInfo from './containers/PokemonInfo.jsx';
import Header from './components/Header/index';
import './main.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route path="/catched" component={CatchedPokemonList} />
          <Route path="/:id" component={PokemonInfo} />
        </Switch>
      </Fragment>
    );
  }
}

ReactDOM.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

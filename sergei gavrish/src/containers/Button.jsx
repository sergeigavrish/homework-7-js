import React, { Component, Fragment } from 'react';

export default class Button extends Component {

  catch = (id,name) => {
    fetch(`http://localhost:3000/pokemons/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name,
        status: "Catched",
        date: new Date().toLocaleDateString()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };

  render() {
    const { id, status, name } = this.props;
    if(!status) {
      return (
        <button onClick={() => this.catch(id, name)}>catch</button>
      );
    } else {
      return (
        <button disabled>catched</button>
      );
    }
  }
}

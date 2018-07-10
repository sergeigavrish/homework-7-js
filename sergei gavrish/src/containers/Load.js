export default {
	list: function() {
		let { pokemons, page } = this.state;
		fetch(`http://localhost:3000/pokemons?_page=${page}`)
		.then( response => response.json())
		.then( result => this.setState({
			pokemons: pokemons.concat(result),
			page: page+1
		}));
	},
	catched: function() {
		let { pokemons, page } = this.state;
		fetch(`http://localhost:3000/pokemons?status=Catched&_page=${page}`)
		.then( response => response.json())
		.then( result => this.setState({
			pokemons: pokemons.concat(result),
			page: page+1
		}));
	},
	pokemon: function() {
		const { id } = this.state;
		
	}
}
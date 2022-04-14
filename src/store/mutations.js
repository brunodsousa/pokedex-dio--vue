import state from "./state";

export default {
	// updates the pokedex loading offset
	updateOffset() {
		state.offset += state.limit;
	},
	// adds pokemons to the pokedex for the infinite loading
	setList(list) {
		state.list.push(...list);
		state.tmpList.push(...list);
	},
	// informs if the pokedex needs more data
	setListHasNext(flag) {
		state.listHasNext = flag;
	},
	// informs if the pokedex has finished fetching data
	setListHasCompleted(flag) {
		state.listHasCompleted = flag;
	},
	// informs if the pokedex got an error
	setListHasError(flag) {
		state.listHasError = flag;
	},
	// resets the pokedex to the last cache and removes search information
	resetList() {
		state.list = [...state.tmpList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
		state.pokemonId = null;
	},

	// adds to the pokedex only the searched pokemon
	setPokemonSearched(pokemon) {
		state.list = [pokemon];
	},
	// informs that the search is happening
	setIsSearching(flag) {
		state.isSearching = flag;
	},
	// informs that the search has been done
	setIsPokemonSearch(flag) {
		state.isPokemonSearch = flag;
	},
	// informs that search got an error
	setSearchHasError(flag) {
		state.searchHasError = flag;
	},

	// select Pokemon
	setPokemonId(id = null) {
		state.isPokemonSearch = false;
		state.pokemonId = id;
	},
};

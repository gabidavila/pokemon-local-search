function scan (term) {
  const regexp = new RegExp(term);
  const pokemons = Object.keys(POKEMON_NAMES).filter(pokemon => {
    return pokemon.match(regexp);
  });
  const pokemonsObj = {};
  pokemons.forEach(pokemon => {
    pokemonsObj[pokemon] = POKEMON_NAMES[pokemon];
  });

  return pokemonsObj;
}

function getPokemon (id) {
  return POKEMONS[id];
}

function fetchPokemons (pokemonsObj) {
  const result = [];
  for (let name in pokemonsObj) {
    const id = POKEMON_NAMES[name];
    const pokemon = getPokemon(id);
    pokemon.id = id;
    result.push(pokemon);
  }
  return result;
}

function search (term = "") {
  return fetchPokemons(scan(term));
}

function paginate (list, listOffset = 0, listLimit = 12) {
  return list.slice(listOffset, listLimit);
}

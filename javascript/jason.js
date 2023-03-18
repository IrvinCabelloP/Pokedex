
//Esta parte del código hace la conexión con la página de la pokeapi y trae al pokemon con el id.
async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}/`)
    const data = await response.json()
    return data
  }

//Esta parte del código pone la imagen y el nombre del pokemon
function updatePokemon(pokemon){
  window.image.setAttribute('src', pokemon.sprites.front_default)
  window.Npokemon.textContent = pokemon.name
  window.info1.textContent = pokemon.types[0].type.name
  if (pokemon.types.length > 1) {
    window.info2.textContent = pokemon.types[1].type.name
  } else {
    window.info2.textContent = "No disponible"
  }
  window.salud.textContent = `hp ${pokemon.stats[0].base_stat}`
  window.pokemonid.textContent = `#${pokemon.id.toString().padStart(3, 0)}`
  window.habilidad1.textContent = pokemon.abilities[0].ability.name
  if (pokemon.abilities.length > 1) {
    window.habilidad2.textContent = pokemon.abilities[1].ability.name
  } else {
    window.habilidad2.textContent = "No disponible"
  }
  if (pokemon.abilities.length > 2) {
    window.habilidad3.textContent = pokemon.abilities[2].ability.name
  } else {
    window.habilidad3.textContent = "No disponible"
  }
}

//Esta parte del código busca elpokemon
  window.search.addEventListener('change', async() => {
  const pokemon = await getPokemon(window.search.value)
  updatePokemon(pokemon)
})  

export const getPokemonByName = async(pokemon) => {
  if (pokemon.length === 0) {
    return null;
  }
  pokemon = pokemon.toLocaleLowerCase()

  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const resp = await fetch(url);
    const data = await resp.json();
    return data
  } catch (error) {
    return alert('No se encontró el pokemon');
  }
}

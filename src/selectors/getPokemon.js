
export const getPokemon = async(limit= 10, offset= 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const resp = await fetch(url);
    const data = await resp.json();
    for (let i = 0; i < data.results.length; i++) {
      const poke = data.results[i].url;

      return {data, poke}
    }
  } catch (error) {
    console.log(error);
  }
}
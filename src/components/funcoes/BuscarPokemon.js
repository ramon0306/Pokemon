
export default class BuscarPokemon {

  async requestPokeInfo(url, name) {
    let result = [];
    await fetch(url + name)
      .then(response => response.json())
      .then(data => {
        result = data;       
      })
      .catch(err => {
        result = err;
      });
      return result;
  }

}
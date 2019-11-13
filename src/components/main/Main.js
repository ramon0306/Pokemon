import React, { Component } from 'react';
import CardPokemon from '../cartao/CardPokemon';
import BuscarPokemon from '../funcoes/BuscarPokemon';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: {
        name: "pikachu",
        number: -1,
        image: null,
        image2:null,image3:null,image4:null,
        habilidade:null,
        indice:null,
        estatistica: null,
        movimento: null,
        tipo: null,
        especies: null,
        peso: 0,
        altura: 0
      },
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ pokemon: { name: event.target.value } });
  }
  handleSubmit(event) {
    this.buscar();
    event.preventDefault();
  }

  async componentDidMount() {
    await this.buscar();
  }

  async buscar() {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const buscar = new BuscarPokemon();
    let resultado = await buscar.requestPokeInfo(baseUrl, this.state.pokemon.name);
    console.log(resultado);
    this.setState({
      pokemon: {
        name: resultado.name,
        number: resultado.id,
        image: resultado.sprites.back_default,
        image2: resultado.sprites.front_default,
        image3: resultado.sprites.back_shiny_female,
        image4: resultado.sprites.front_shiny,
        especies: resultado.species.name,
        movimento: resultado.moves.map(mov => mov.move.name).join(", "),
        indice: resultado.held_items.map(ind => ind.item.name).join(", "),
        habilidade: resultado.abilities.map(ab => ab.ability.name).join(", "),
        estatistica: resultado.stats.map(est => est.stat.name).join(", "),
        tipo: resultado.types.map(tip => tip.type.name).join(", "),
        peso: resultado.weight,
        altura: resultado.height

      }
    })
  }

  render() {
    return (

      <main id="container" className="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon Logo" />

        <form onSubmit={this.handleSubmit} action="" className="search">
          <input type="search" value={this.state.pokemon.name} onChange={this.handleChange} className="search-input" placeholder="Digite o nome ou numero do pokemon" />
          <button className="search-button">Buscar Pokemon</button>
        </form>

        <CardPokemon
          name={this.state.pokemon.name}
          number={this.state.pokemon.number}
          image={this.state.pokemon.image}
          image2={this.state.pokemon.image2}
          image3={this.state.pokemon.image3}
          image4={this.state.pokemon.image4}
          especies={this.state.pokemon.especies}
          indice={this.state.pokemon.indice}
          tipo={this.state.pokemon.tipo}
          movimento={this.state.pokemon.movimento}
          habilidade={this.state.pokemon.habilidade}
          estatistica={this.state.pokemon.estatistica}   
          weight={this.state.pokemon.peso}
          height={this.state.pokemon.altura}
        ></CardPokemon>


      </main>

    );
  }
}
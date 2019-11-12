import React, { Component } from 'react';
import BuscarPokemon from '../funcoes/BuscarPokemon';
import CardPokemon from '../cartao/CardPokemon';


export default class Pokemon extends Component {
  //fazer funções que retorne o objeto pokemon, com todas as informações vindas da api.
  //pegar o nome digitado e fazer a consulta na api.
  constructor(props) {
    super(props)
    this.state = {
      pokemon : {
          name: null,
          number: -1
      }, 
      card : props.card
    }
  }
  async componentDidMount() {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const buscar = new BuscarPokemon();
    let resultado = await buscar.requestPokeInfo(baseUrl,"meow");
    console.log(resultado);
    this.setState({
        pokemon : {
            name: resultado.name,
            number: resultado.id
        }
    })
  }
  render() {
    return(
      <div>
          <CardPokemon 
          
          name={this.state.pokemon.name}
          id={this.state.pokemon.id}
          peso={this.state.pokemon.weight}

          >

            </CardPokemon>
      </div>
    )
  }
}
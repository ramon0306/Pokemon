import React, { Component } from 'react';


export default class CardPokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      createCard () {
        card = `
          <div class="pokemon-picture">
            <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
          </div>
          <div class="pokemon-info">
              <h1 class="name">${pokemon.name}</h1>
              <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
              <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
          </div>`;
        return card;
      }
  
  }
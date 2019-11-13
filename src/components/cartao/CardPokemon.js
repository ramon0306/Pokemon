import React, { Component } from 'react';

export default class CardPokemon extends Component {

    constructor(props) {
        super(props);
      }
      
      createCard () {
        return(
        <div>
          
          <div className="pokemon-info">
              <h1 className="name">{this.props.name}</h1>
              <h3 className="weight">Weight: {this.props.weight  / 10}kg</h3>
              <h3 className="height">Height: {this.props.height  / 10}m</h3>
              <h3 className="types">Tipo: {this.props.tipo}</h3>
              <h3 className="species">Especies: {this.props.especies}</h3> 
              <h3 className="held">Item carregável: {this.props.indice}</h3> 
              <h3 className="moves">Movimentos: {this.props.movimento}</h3> 
              <h3 className="abilities">Habilidades: {this.props.habilidade}</h3>
              <h3 className="stats">Estatisticas: {this.props.estatistica}</h3>       
          </div>
          <div className="pokemon-picture">
            
              <img  src={this.props.image}className="image"  alt={"Sprite of"+ this.props.name}/>
              <img src={this.props.image2}/>
              <img src={this.props.image3}/>
              <img src={this.props.image4}/>

          </div>
        </div> );
       
      }
  render(){
    return(
      this.createCard()
    );
  }
  }
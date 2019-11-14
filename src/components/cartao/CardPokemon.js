import React, { Component } from 'react';

export default class CardPokemon extends Component {

  constructor(props) {
    super(props);
  }
  createCard() {
    return (
      <div>
        <div className="pokemon-picture">
          <label className="text">Masculino <img src={this.props.image2} /></label>
          
          <img src={this.props.image} />
        </div>
        
        <div className="pokemon-info">
        <h1 className="name">{this.props.name}</h1>
          <ul>
            
            <li><h3 className="weight"><strong>Weight:</strong> {this.props.weight / 10}kg</h3></li>
            <li><h3 className="height"><strong>Height:</strong> {this.props.height / 10}m</h3></li>
            <li><h3 className="types"><strong>Tipo:</strong> {this.props.tipo}</h3></li>
            <li><h3 className="species"><strong>Especies:</strong> {this.props.especies}</h3></li>
            <li><h3 className="held"><strong>Item carregável:</strong> {this.props.indice}</h3></li>
            <li><h3 className="moves"><strong>Movimentos:</strong> {this.props.movimento}</h3></li>
            <li><h3 className="abilities"><strong>Habilidades:</strong>{this.props.habilidade}</h3></li>
            <li><h3 className="stats"><strong>Estatisticas:</strong>{this.props.estatistica}</h3></li>
          </ul>
        </div>

        <label className="text2">Feminino</label>
          <div className="pokemon-image2">
            <img src={this.props.image4} />
          </div>
        
      </div>);
  }
  render() {
    return (
      this.createCard()
    );
  }
}
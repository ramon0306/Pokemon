import React, {Component} from 'react';
import CardPokemon from '../cartao/CardPokemon';

export default class Main extends Component{
 

    render(){
        return (
    
        <main id="container" className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon Logo"/>
      
            <form onSubmit={this.handleSubmit} action="" className="search">
              <input type="search" value={this.state.value} onChange={this.handleChange} className="search-input" placeholder="Digite o nome ou numero do pokemon"/>
              <button className="search-button">Buscar Pokemon</button>
            </form>
      
            <section className="pokemon"></section>
            <span className="error"></span>
            <div className="pokemon-picture">
              
            </div>
      </main>
    
        );
    }
}
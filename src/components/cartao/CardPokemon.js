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
     
          //importar react, extender de componente
        //fazer o javaFX dessa parte para retornar o html
  
  }
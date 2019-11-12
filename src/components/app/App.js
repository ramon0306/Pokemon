import React, { Component } from 'react';
import Main from '../main/Main';
import Pokemon from '../pokemon/Pokemon';


export default class App extends Component {
  
  render() {
    return (
      <div>
       
        <Main></Main>
        <Pokemon></Pokemon>
      </div>
    );
  }
}
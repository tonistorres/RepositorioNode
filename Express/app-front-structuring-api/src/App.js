import React, { Component } from 'react';
import Header from'./components/Header/Header';
import Fotter from './components/Fotter/Fotter';
import getRecipes from '../services/getRecipes';

export default class App extends Component {
  render() {

    this.componentDidMount(){

}

    return (
      <div>
        <Header/>
        <Fotter/>
      </div>
    )
  }
}

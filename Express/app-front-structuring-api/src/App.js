import React, { Component } from 'react';
import Header from'./components/Header/Header';
import Fotter from './components/Fotter/Fotter';
import './App.css';

export default class App extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        recipes: [],
        isLoading: true,
      };
    }
  
    componentDidMount() {
      fetch('http://localhost:3001/recipes')
        .then(response => response.json())
        .then((recipes) => this.setState(
          {
            recipes,
            isLoading: false,
          },
        ));
    }
  
    render() {
      const { recipes, isLoading } = this.state;
  
      return (
        
          <div>
            <Header/>
            {isLoading && <h1>Carregando...</h1>}
            <div className='card-group'>
              {recipes.map((recipe) => (
                <div key={recipe.id}>
                  <h1>{recipe.name}</h1>
                  <span>Preço: {recipe.price}</span>
                  <span>Tempo de preparo: {recipe.waitTime}</span>
                </div>
              ))}
            </div>
            <Fotter/>
          </div>

      );
    }
  }


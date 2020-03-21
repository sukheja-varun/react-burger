import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  onAddIngredient = type => {
    let ingredients = { ...this.state.ingredients };
    ingredients[type]++;
    this.setState({ ingredients });
  };

  onRemoveIngredient = type => {
    let ingredients = { ...this.state.ingredients };
    if (ingredients[type] > 0) {
      ingredients[type]--;
    }
    this.setState({ ingredients });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.onAddIngredient}
          ingredientRemoved={this.onRemoveIngredient}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 20,
  bacon: 30,
  cheese: 20,
  meat: 50
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 80
  };

  onAddIngredient = type => {
    let ingredients = { ...this.state.ingredients };
    ingredients[type]++;
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients, totalPrice });
  };

  onRemoveIngredient = type => {
    let ingredients = { ...this.state.ingredients };
    if (ingredients[type] > 0) {
      ingredients[type]--;
      const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ ingredients, totalPrice });
    }
  };

  render() {
    const disabledInfo = {};
    for (const key in this.state.ingredients) {
      if (this.state.ingredients.hasOwnProperty(key)) {
        disabledInfo[key] = this.state.ingredients[key] <= 0;
      }
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          disabled={disabledInfo}
          ingredientAdded={this.onAddIngredient}
          ingredientRemoved={this.onRemoveIngredient}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

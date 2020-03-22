import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    totalPrice: 80,
    allowOrder: false,
    purchasing: false
  };

  updateAllowOrder = ingredients => {
    let totalOrderCount = Object.values(ingredients).reduce(
      (sum, num) => sum + num,
      0
    );
    const allowOrder = totalOrderCount > 0;
    this.setState({ allowOrder });
  };

  purchaseHandler = isPurchasable => {
    this.setState({ purchasing: isPurchasable });
  };

  onAddIngredient = type => {
    let ingredients = { ...this.state.ingredients };
    ingredients[type]++;
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients, totalPrice });
    this.updateAllowOrder(ingredients);
  };

  onRemoveIngredient = type => {
    let ingredients = { ...this.state.ingredients };
    if (ingredients[type] > 0) {
      ingredients[type]--;
      const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ ingredients, totalPrice });
    }
    this.updateAllowOrder(ingredients);
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
        <Modal
          show={this.state.purchasing}
          modalClosed={() => this.purchaseHandler(false)}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          disabled={disabledInfo}
          allowOrder={this.state.allowOrder}
          ordered={() => this.purchaseHandler(true)}
          ingredientAdded={this.onAddIngredient}
          ingredientRemoved={this.onRemoveIngredient}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

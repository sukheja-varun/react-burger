import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.scss';

const burger = props => {
  let dynamicIngredients = [];
  for (const key in props.ingredients) {
    if (props.ingredients.hasOwnProperty(key)) {
      for (let index = 0; index < props.ingredients[key]; index++) {
        dynamicIngredients.push(
          <BurgerIngredient key={key + '-' + index} type={key} />
        );
      }
    }
  }
  if (!dynamicIngredients.length) {
    dynamicIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {dynamicIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

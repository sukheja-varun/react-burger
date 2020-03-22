import React from 'react';

import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
import { func, object, number, bool } from 'prop-types';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        onAddClick={() => props.ingredientAdded(ctrl.type)}
        onRemoveClick={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.allowOrder}>
      Order Now
    </button>
  </div>
);

buildControls.propTypes = {
  price: number.isRequired,
  disabled: object.isRequired,
  allowOrder: bool.isRequired,
  ingredientAdded: func.isRequired,
  ingredientRemoved: func.isRequired
};

export default buildControls;

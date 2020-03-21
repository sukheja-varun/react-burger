import React from 'react';

import Classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
import { func, object, number } from 'prop-types';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={Classes.BuildControls}>
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
  </div>
);

buildControls.propTypes = {
  price: number.isRequired,
  disabled: object.isRequired,
  ingredientAdded: func.isRequired,
  ingredientRemoved: func.isRequired
};

export default buildControls;

import React from 'react';

import Classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
import { func } from 'prop-types';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={Classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        onAddClick={() => props.ingredientAdded(ctrl.type)}
        onRemoveClick={() => props.ingredientRemoved(ctrl.type)}
      />
    ))}
  </div>
);

buildControls.propTypes = {
  ingredientAdded: func.isRequired,
  ingredientRemoved: func.isRequired
};

export default buildControls;

import React from 'react';
import { string, func } from 'prop-types';

import classes from './BuildControl.module.scss';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} onClick={props.onRemoveClick}>
      Less
    </button>
    <button className={classes.More} onClick={props.onAddClick}>
      More
    </button>
  </div>
);

buildControl.propTypes = {
  label: string.isRequired,
  onAddClick: func.isRequired,
  onRemoveClick: func.isRequired
};

export default buildControl;

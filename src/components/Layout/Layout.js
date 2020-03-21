import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.scss';

const layout = props => (
  <Aux>
    {/* <div className={classes.content}>Toolbar, SideDrawer, Backdrop</div> */}
    <main>{props.children}</main>
  </Aux>
);

export default layout;

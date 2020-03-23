import React from 'react';

import classes from './NavigationItems.module.scss';
import NavItem from './NavItem/NavItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default navigationItems;

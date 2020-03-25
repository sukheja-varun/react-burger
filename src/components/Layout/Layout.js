import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosed = () => {
    console.log('sideDrawerClosed');
    
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosed}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;

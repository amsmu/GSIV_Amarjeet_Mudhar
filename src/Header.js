import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Header extends Component {
  render() {
    return <h1>{this.props.content}</h1>;
  }
}
Header.propTypes = {
  content: Proptypes.string.isRequired,
};
export default Header;

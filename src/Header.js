import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return <h1>{this.props.content}</h1>;
  }
}
Header.propTypes = {
  content: PropTypes.string.isRequired,
};
export default Header;

import React, { Component } from 'react';

// import Proptypes if needed
import PropTypes from 'prop-types';
import Dumb from './dumb';

class Smart extends Component {


  render() {
    return <Dumb {...this.props} />;
  }
}

export default Smart;

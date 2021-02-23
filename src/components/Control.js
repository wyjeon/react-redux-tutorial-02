// Control.js : Dumb Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func,
};

function createWarning(funcName) {
  return () => console.warn(funcName + ' is not definded');
}

const defaultProps = {
  onPlus: () => createWarning('onClick'),
  onSubtract: () => createWarning('onSubtract'),
  onRandomizeColor: () => createWarning('onRandomizeColor'),
};

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubtract}>-</button>
        <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
      </div>
    );
  }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;

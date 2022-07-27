import React from 'react';
import PropTypes from 'prop-types';

class NextButton extends React.Component {
  render() {
    return (
      <button
        type="submit"
      >
        Next
      </button>
    );
  }
}

NextButton.propTypes = {
  increaseStep: PropTypes.func,
  step: PropTypes.number,
};

export default NextButton;

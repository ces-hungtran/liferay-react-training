import React from 'react';
import PropTypes from 'prop-types';

class PreviousButton extends React.Component {
  render(props) {
    return (
      <button
        type="submit"
      >
        Previous
      </button>
    );
  }
}

PreviousButton.propTypes = {
  decreaseStep: PropTypes.func,
  step: PropTypes.number,
};

export default PreviousButton;

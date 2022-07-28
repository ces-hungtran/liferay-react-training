import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class NextButton extends React.Component {
  render() {
    return (
      <Button
        type="submit"
      >
        Next
      </Button>
    );
  }
}

NextButton.propTypes = {
  increaseStep: PropTypes.func,
  step: PropTypes.number,
};

export default NextButton;

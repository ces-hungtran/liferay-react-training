import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

class PreviousButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <>
        <Button onClick={this.state.decreaseStep}>Previous</Button>
      </>
    );
  }
}

PreviousButton.propTypes = {
  decreaseStep: PropTypes.func,
  step: PropTypes.number,
};

export default PreviousButton;

import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { PREVIOUS_LABEL } from "../constants/formLabels";

class PreviousButton extends React.Component {
  render() {
    return (
      <>
        <Button onClick={this.props.decreaseStep}>{PREVIOUS_LABEL}</Button>
      </>
    );
  }
}

PreviousButton.propTypes = {
  decreaseStep: PropTypes.func,
  step: PropTypes.number,
};

export default PreviousButton;

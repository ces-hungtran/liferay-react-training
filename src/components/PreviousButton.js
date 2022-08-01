import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { PREVIOUS_LABEL } from "../constants/formLabels";

function PreviousButton(props) {
  return (
    <>
      <Button onClick={props.decreaseStep}>{PREVIOUS_LABEL}</Button>
    </>
  );
}

PreviousButton.propTypes = {
  decreaseStep: PropTypes.func,
};

export default PreviousButton;

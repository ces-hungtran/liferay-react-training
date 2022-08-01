import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import { NEXT_LABEL } from "../constants/formLabels";

function NextButton(props) {
  const getButtonText = () => {
    return props.text ? props.text : NEXT_LABEL;
  };

  return <Button type="submit">{getButtonText()}</Button>;
}

NextButton.propTypes = {
  text: PropTypes.string,
};

export default NextButton;

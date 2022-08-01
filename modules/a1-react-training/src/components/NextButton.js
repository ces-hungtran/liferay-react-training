import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import { NEXT_LABEL } from "../constants/formLabels";

class NextButton extends React.Component {
  getButtonText = () => {
    return this.props.text ? this.props.text : NEXT_LABEL;
  };

  render() {
    return (
      <Button onClick={this.props.increaseStep} type="submit">
        {this.getButtonText()}
      </Button>
    );
  }
}

export default NextButton;

import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  getButtonText = () => {
    return this.state.text ? this.state.text : "Next";
  };

  render() {
    return (
      <Button onClick={this.state.increaseStep} type="submit">
        {this.getButtonText()}
      </Button>
    );
  }
}

NextButton.propTypes = {
  increaseStep: PropTypes.func,
  step: PropTypes.number,
};

export default NextButton;

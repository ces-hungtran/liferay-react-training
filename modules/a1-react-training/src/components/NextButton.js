import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import { NEXT_LABEL } from "../constants/formLabels";

class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      increaseStep: () => {},
    };
  }
  componentDidMount() {
    this.setState({ ...this.props });
  }
  getButtonText = () => {
    return this.props.text ? this.props.text : NEXT_LABEL;
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

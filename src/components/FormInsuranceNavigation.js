import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import RENDER_STATE from "../constants/renderState";
import React from "react";
import { SUBMIT_LABEL } from "../constants/formLabels";
import PropTypes from "prop-types";

const MAX_STEP = Math.max(...Object.values(RENDER_STATE));
const MIN_STEP = Math.min(...Object.values(RENDER_STATE));
class FormInsuranceNavigation extends React.Component {
  updateStep = (newStep) => {
    this.props.onUpdateData(newStep);
  };

  nextButtonWithStep = (text) => {
    return <NextButton text={text} />;
  };

  previousButtonWithStep = () => {
    return (
      <PreviousButton
        decreaseStep={() => this.updateStep(this.props.step - 1)}
      />
    );
  };

  render() {
    const step = this.props.step;
    if (step > MAX_STEP) {
      return this.previousButtonWithStep();
    } else if (MIN_STEP < step && step < MAX_STEP) {
      return (
        <>
          {this.previousButtonWithStep()}
          {this.nextButtonWithStep()}
        </>
      );
    } else if (step === MIN_STEP) {
      return this.nextButtonWithStep();
    } else if (step === MAX_STEP) {
      return (
        <>
          {this.previousButtonWithStep()}
          {this.nextButtonWithStep(SUBMIT_LABEL)}
        </>
      );
    }
    return <h1>Invalid step</h1>;
  }
}

FormInsuranceNavigation.propTypes = {
  step: PropTypes.number,
  onUpdateData: PropTypes.func,
};

export default FormInsuranceNavigation;

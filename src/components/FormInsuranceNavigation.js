import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import RENDER_STATE from "../constants/renderState";
import React from "react";
import { SUBMIT_LABEL } from "../constants/formLabels";
import PropTypes from "prop-types";

const MAX_STEP = Math.max(...Object.values(RENDER_STATE));
const MIN_STEP = Math.min(...Object.values(RENDER_STATE));
function FormInsuranceNavigation(props) {
  const updateStep = (newStep) => {
    props.onUpdateData(newStep);
  };

  const nextButtonWithStep = (text) => {
    return <NextButton text={text} />;
  };

  const previousButtonWithStep = () => {
    return <PreviousButton decreaseStep={() => updateStep(props.step - 1)} />;
  };

  const step = props.step;
  if (step > MAX_STEP) {
    return previousButtonWithStep();
  } else if (MIN_STEP < step && step < MAX_STEP) {
    return (
      <>
        {previousButtonWithStep()}
        {nextButtonWithStep()}
      </>
    );
  } else if (step === MIN_STEP) {
    return nextButtonWithStep();
  } else if (step === MAX_STEP) {
    return (
      <>
        {previousButtonWithStep()}
        {nextButtonWithStep(SUBMIT_LABEL)}
      </>
    );
  }
  return <h1>Invalid step</h1>;
}

FormInsuranceNavigation.propTypes = {
  step: PropTypes.number,
  onUpdateData: PropTypes.func,
};

export default FormInsuranceNavigation;

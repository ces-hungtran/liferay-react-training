import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import RENDER_STATE from "../constants/renderState";
import React from "react";
import { SUBMIT_LABEL } from "../constants/formLabels";

class FormInsuranceNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minStep: 0, maxStep: 0 };
  }

  componentDidMount() {
    this.setState({
      maxStep: Math.max(...Object.values(RENDER_STATE)),
      minStep: Math.min(...Object.values(RENDER_STATE)),
    });
  }

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
    const step = this.props.step,
      maxStep = this.state.maxStep,
      minStep = this.state.minStep;
    if (step > maxStep) {
      return this.previousButtonWithStep();
    } else if (minStep < step && step < maxStep) {
      return (
        <>
          {this.previousButtonWithStep()}
          {this.nextButtonWithStep()}
        </>
      );
    } else if (step === minStep) {
      return this.nextButtonWithStep();
    } else if (step === maxStep) {
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
export default FormInsuranceNavigation;

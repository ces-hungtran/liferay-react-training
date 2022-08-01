import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import RENDER_STATE from "../constants/renderState";
import React from "react";
import { SUBMIT_LABEL } from "../constants/formLabels";

class FormInsuranceNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 0, minStep: 0, maxStep: 0, onUpdateData: () => {} };
  }

  componentDidMount() {
    this.setState({
      ...this.props,
      maxStep: Math.max(...Object.values(RENDER_STATE)),
      minStep: Math.min(...Object.values(RENDER_STATE)),
    });
  }

  updateStep = (newStep) => {
    this.state.onUpdateData({ step: newStep });
    this.setState({ step: newStep });
  };

  nextButtonWithStep = (text) => {
    return (
      <NextButton
        text={text}
        increaseStep={() => this.updateStep(this.state.step + 1)}
      />
    );
  };

  previousButtonWithStep = () => {
    return (
      <PreviousButton
        decreaseStep={() => this.updateStep(this.state.step - 1)}
      />
    );
  };

  render() {
    console.log(this.state);
    const step = this.state.step,
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

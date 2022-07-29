import React from "react";
import BeneficiaryProfile from "./components/BeneficiaryProfile";
import FinishCheck from "./components/FinishCheck";
import InsuranceProfile from "./components/InsuranceProfile";
import PreviousButton from "./components/PreviousButton";
import * as RENDER_STATE from "./constants/renderState";

class AppComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 3,
      onUpdateData: (newData) => {
        this.setState({ ...this.state, ...newData });
      },
    };
  }

  renderStep(step) {
    switch (step) {
      case RENDER_STATE.RENDER_INSURANCE_PROFILE:
        return <InsuranceProfile {...this.state}></InsuranceProfile>;
      case RENDER_STATE.RENDER_BENEFICIARY_PROFILE:
        return <BeneficiaryProfile {...this.state}></BeneficiaryProfile>;
      case RENDER_STATE.RENDER_FINISH_CHECK:
        return <FinishCheck {...this.state}></FinishCheck>;
      default:
        return (
          <>
            <h1> {step} Submitted </h1>
            <PreviousButton
              decreaseStep={() => {
                this.setState({ step: this.state.step - 1 });
              }}
            />
          </>
        );
    }
  }

  render() {
    return this.renderStep(this.state.step);
  }
}

export default AppComponents;

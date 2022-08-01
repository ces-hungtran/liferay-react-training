import React from "react";
import BeneficiaryProfile from "./components/BeneficiaryProfile";
import FinishCheck from "./components/FinishCheck";
import InsuranceProfile from "./components/InsuranceProfile";
import FormInsuranceNavigation from "./components/FormInsuranceNavigation";

import PreviousButton from "./components/PreviousButton";
import RENDER_STATE from "./constants/renderState";

class AppComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 3,
      insuranceProfile: {},
      beneficiaryProfile: {},
      finishCheck: {},
    };
  }

  onUpdateInsuranceProfile = (newData, step) => {
    this.setState({ insuranceProfile: newData, step: step });
  };

  onUpdateBeneficiaryProfile = (newData, step) => {
    this.setState({ beneficiaryProfile: newData, step: step });
  };

  onUpdateFinishCheck = (newData, step) => {
    this.setState({ finishCheck: newData, step: step });
  };

  onUpdateStep = (newData) => {
    this.setState({ step: newData });
  };

  renderStep() {}

  render() {
    const navigationComponent = (
      <FormInsuranceNavigation
        step={this.state.step}
        onUpdateData={this.onUpdateStep}
      />
    );
    let formBody = (
      <>
        <h1>{this.state.step} Submitted </h1>
        {navigationComponent}
      </>
    );

    switch (this.state.step) {
      case RENDER_STATE.RENDER_INSURANCE_PROFILE:
        formBody = (
          <InsuranceProfile
            step={this.state.step}
            onUpdateData={this.onUpdateInsuranceProfile}
            insuranceProfile={this.state.insuranceProfile}
          >
            {navigationComponent}
          </InsuranceProfile>
        );
        break;
      case RENDER_STATE.RENDER_BENEFICIARY_PROFILE:
        formBody = (
          <BeneficiaryProfile
            step={this.state.step}
            onUpdateData={this.onUpdateBeneficiaryProfile}
            beneficiaryProfile={this.state.beneficiaryProfile}
          >
            {navigationComponent}
          </BeneficiaryProfile>
        );
        break;
      case RENDER_STATE.RENDER_FINISH_CHECK:
        formBody = (
          <FinishCheck
            step={this.state.step}
            onUpdateData={this.onUpdateFinishCheck}
            finishCheck={this.state.finishCheck}
          >
            {navigationComponent}
          </FinishCheck>
        );
        break;
    }
    return (
      <>
        {this.state.step} {formBody}
      </>
    );
  }
}

export default AppComponents;

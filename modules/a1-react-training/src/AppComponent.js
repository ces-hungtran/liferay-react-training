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
    };
  }

  onUpdateData = (newData) => {
    this.setState({ ...this.state, ...newData });
  };

  renderStep = (step) => {
    let formBody = (
      <>
        <h1>{step} Submitted </h1>
      </>
    );

    console.log(props);

    switch (step) {
      case RENDER_STATE.RENDER_INSURANCE_PROFILE:
        formBody = <InsuranceProfile {...props} />;
      case RENDER_STATE.RENDER_BENEFICIARY_PROFILE:
        formBody = <BeneficiaryProfile {...props} />;
      case RENDER_STATE.RENDER_FINISH_CHECK:
        formBody = <FinishCheck {...props} />;
    }
    return (
      <>
        {this.state.step}
        {step} {formBody} <FormInsuranceNavigation {...props} />
      </>
    );
  };

  render() {
    return this.renderStep(this.state.step);
  }
}

export default AppComponents;

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
      onUpdateData: this.onUpdateData,
    };
  }

  componentDidMount() {
    this.setState({ onUpdateData: this.onUpdateData });
  }

  onUpdateData = (newData) => {
    this.setState({ ...this.state, ...newData });
  };

  renderStep() {}

  render() {
    let formBody = (
      <>
        <h1>{this.state.step} Submitted </h1>
      </>
    );
    console.log("hxx app state", this.state);

    switch (this.state.step) {
      case RENDER_STATE.RENDER_INSURANCE_PROFILE:
        formBody = <InsuranceProfile {...this.state} />;
        break;
      case RENDER_STATE.RENDER_BENEFICIARY_PROFILE:
        formBody = <BeneficiaryProfile {...this.state} />;
        break;
      case RENDER_STATE.RENDER_FINISH_CHECK:
        formBody = <FinishCheck {...this.state} />;
        break;
    }
    return (
      <>
        {this.state.step} {formBody} <FormInsuranceNavigation {...this.state} />
      </>
    );
  }
}

export default AppComponents;

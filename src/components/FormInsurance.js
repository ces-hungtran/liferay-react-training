import React, { useEffect, useState } from "react";
import BeneficiaryProfile from "./BeneficiaryProfile";
import FinishCheck from "./FinishCheck";
import InsuranceProfile from "./InsuranceProfile";
import FormInsuranceNavigation from "./FormInsuranceNavigation";

import RENDER_STATE from "../constants/renderState";

function FormInsurance(props) {
  const [state, setState] = useState({
    step: RENDER_STATE.RENDER_INSURANCE_PROFILE,
    insuranceProfile: {},
    beneficiaryProfile: {},
    finishCheck: {},
  });

  const onUpdateInsuranceProfile = (newData, step) => {
    setState({ ...state, insuranceProfile: newData, step: step });
  };

  const onUpdateBeneficiaryProfile = (newData, step) => {
    setState({ ...state, beneficiaryProfile: newData, step: step });
  };

  const onUpdateFinishCheck = (newData, step) => {
    setState({ ...state, finishCheck: newData, step: step });
  };

  const onUpdateStep = (newData) => {
    setState({ ...state, step: newData });
  };

  const navigationComponent = (
    <FormInsuranceNavigation step={state.step} onUpdateData={onUpdateStep} />
  );

  let formBody = (
    <>
      <h1>{state.step} Submitted </h1>
      {navigationComponent}
    </>
  );

  switch (state.step) {
    case RENDER_STATE.RENDER_INSURANCE_PROFILE:
      formBody = (
        <InsuranceProfile
          step={state.step}
          onUpdateData={onUpdateInsuranceProfile}
          insuranceProfile={state.insuranceProfile}
        >
          {navigationComponent}
        </InsuranceProfile>
      );
      break;

    case RENDER_STATE.RENDER_BENEFICIARY_PROFILE:
      formBody = (
        <BeneficiaryProfile
          step={state.step}
          onUpdateData={onUpdateBeneficiaryProfile}
          beneficiaryProfile={state.beneficiaryProfile}
        >
          {navigationComponent}
        </BeneficiaryProfile>
      );
      break;

    case RENDER_STATE.RENDER_FINISH_CHECK:
      formBody = (
        <FinishCheck
          step={state.step}
          onUpdateData={onUpdateFinishCheck}
          finishCheck={state.finishCheck}
        >
          {navigationComponent}
        </FinishCheck>
      );
      break;
  }
  return <>{formBody}</>;
}

export default FormInsurance;

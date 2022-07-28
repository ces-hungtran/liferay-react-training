import React from 'react';
import BeneficiaryProfile from './components/BeneficiaryProfile';
import FinishProfile from './components/FinishProfile';
import InsuranceProfile from './components/InsuranceProfile';

class AppComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      onUpdateData: (newData) => {
        this.setState({...this.state, ...newData});
      },
    };
  }

  renderStep(step) {
    switch (step) {
      case 1:
        return (
          <InsuranceProfile
            {...this.state}>
          </InsuranceProfile >
        );
      case 2:
        return (
          <BeneficiaryProfile
            {...this.state}>
          </BeneficiaryProfile>
        );
      case 3:
        return (
          <FinishProfile
            {...this.state}>
          </FinishProfile>
        );
      default:
        return (<h1>Invalid step {step} </h1>);
    }
  }

  render() {
    return (
      this.renderStep(this.state.step)
    );
  }
}

export default AppComponents;

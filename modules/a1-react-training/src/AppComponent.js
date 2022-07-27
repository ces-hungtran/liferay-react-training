import React from 'react';
import BeneficiaryProfile from './components/BeneficiaryProfile';
import FinishProfile from './components/FinishProfile';
import InsuranceProfile from './components/InsuranceProfile';

class AppComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {step: 1};
    this.renderStep.bind(this);
  }

  updateData = (newData) => {
    this.setState({...this.state, ...newData});
  };

  renderStep(step) {
    switch (step) {
      case 1:
        return (
          <InsuranceProfile
            step={this.state.step}
            onUpdateData = {this.updateData}>
          </InsuranceProfile >
        );
      case 2:
        return (
          <BeneficiaryProfile onUpdateData={this.updateData}>
          </BeneficiaryProfile>
        );
      case 3:
        return (
          <FinishProfile onUpdateData={this.updateData}>
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

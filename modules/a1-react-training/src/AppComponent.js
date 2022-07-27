import React from 'react';
import ReactDOM from 'react-dom';
import BeneficiaryProfile from './components/BenificiaryProfile';
import FinishProfile from './components/FinishProfile';
import InsuranceProfile from './components/InsuranceProfile';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {step: 3};
		this.renderStep.bind(this);
	}

	renderStep(step) {
		switch (step) {
			case 1:
				return (<InsuranceProfile />);
			case 2:
				return (<BeneficiaryProfile />);
			case 3:
				return (<FinishProfile />);
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
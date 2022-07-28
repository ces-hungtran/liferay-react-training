import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import NextButton from './NextButton';
import TextField from '@material-ui/core/TextField';
import 'yup-phone';


class BeneficiaryProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>BeneficiaryProfile</h1>
        {this.props.children }
      </React.Fragment>
    );
  }
}

BeneficiaryProfile.propTypes = {
  children: PropTypes.any,
};

export default BeneficiaryProfile;

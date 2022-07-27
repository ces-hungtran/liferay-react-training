import React from 'react';
import PropTypes from 'prop-types';

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

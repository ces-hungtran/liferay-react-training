import React from 'react';
import PropTypes from 'prop-types';

class FinishProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>FinishProfile</h1>
        {this.props.children }
      </React.Fragment>
    );
  }
}

FinishProfile.propTypes = {
  children: PropTypes.any,
};

export default FinishProfile;

import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import NextButton from './NextButton';


const InsuaranceProfileSchema = Yup.object().shape({
  firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  middleName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

class InsuranceProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {step: props.step, updateData: this.props.onUpdateData};
  }
  render() {
    return (
      <>
        <Formik
          initialValues={{
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            step: this.state.step + 1,
          }}

          validationSchema={InsuaranceProfileSchema}

          onSubmit = {
            (value, action) => {
              this.state.updateData({...value});
            }
          }
        >{
            ({errors, touched}) => (
              <Form>
                <Field
                  id="step"
                  name="step"
                />
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="hung.tran@codeenginestudio.com"
                  type="email"
                />
                {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                    ) : null}


                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Tran" />
                {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null}


                <label htmlFor="middleName">Middle Name</label>
                <Field id="middleName" name="middleName" placeholder="Minh" />
                {errors.middleName && touched.middleName ? (
                        <div>{errors.middleName}</div>
                    ) : null}


                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Hung" />
                {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                    ) : null}


                <NextButton />
              </Form>
            )
          }
        </Formik>
      </>
    );
  }
}

InsuranceProfile.propTypes = {
  children: PropTypes.any,
  onUpdateData: PropTypes.func,
  step: PropTypes.number,
};

export default InsuranceProfile;

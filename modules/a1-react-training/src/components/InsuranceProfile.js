import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import NextButton from './NextButton';
import TextField from '@material-ui/core/TextField';
import 'yup-phone';
import {getDefaultString, getDefaultDate} from '../utils';


const InsuranceProfileSchema = Yup.object().shape({
  myFirstName: Yup.string()
      .min(2, 'First Name too short!')
      .max(50, 'First Name too long!')
      .required('Required'),
  myMiddleName: Yup.string()
      .min(2, 'Middle Name too short!')
      .max(50, 'Middle Name too long!')
      .optional(),
  myLastName: Yup.string()
      .min(2, 'Last Name too short!')
      .max(50, 'Last Name too long!')
      .required('Required'),
  myEmail: Yup.string().email('Invalid myEmail').required('Required'),
  myBirthday: Yup.date().max(new Date(), 'Invalid birthday'),
  myIDCard: Yup.number()
      .typeError('ID number must contain digits only')
      .integer('ID number must contain digits only')
      .min(99999999, 'Invalid ID number')
      .max(999999999999, 'Invalid ID number')
      .required('Required'),
  myPhoneNumber: Yup.string()
      .required('Required')
      .phone('VN', false, 'Invalid Phone number'),
  myMonthlySaving: Yup.number()
      .typeError('Monthly Saving must contain digits only')
      .moreThan(0, 'Invalid monthly saving')
      .required('Required'),
});

class InsuranceProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }


  render() {
    return (
      <Formik
        initialValues={{
          myEmail: getDefaultString(this.state.myEmail),
          myFirstName: getDefaultString(this.state.myFirstName),
          myMiddleName: getDefaultString(this.state.myMiddleName),
          myLastName: getDefaultString(this.state.myLastName),
          step: getDefaultString(this.state.step + 1),
          myBirthday: new Date(getDefaultDate(this.state.myBirthday))
              .toISOString().split('T')[0],
          myIDCard: getDefaultString(this.state.myIDCard),
          myPhoneNumber: getDefaultString(this.state.myPhoneNumber),
          myMonthlySaving: getDefaultString(this.state.myMonthlySaving),
        }}

        validateOnChange="true"

        validationSchema={InsuranceProfileSchema}

        onSubmit = {
          (value, action) => {
            this.state.onUpdateData(value);
          }
        }
      >{
          (args) => {
            const {errors, touched, values, handleChange,
              initialValues} = args;
            return (
              <>
                <h1>Insurance Profile</h1>
                <Form>
                  <div className="hidden-element">
                    <TextField
                      id="step"
                      name="step"
                      value={values['step']}
                    />
                  </div>

                  <TextField
                    fullWidth
                    onChange = {handleChange}
                    id="myEmail"
                    name="myEmail"
                    placeholder="hung.tran@codeenginestudio.com"
                    type="myEmail"
                    label="Email"
                    value={values['myEmail']}
                    error={touched.myEmail && Boolean(errors.myEmail)}
                    helperText={touched.myEmail && errors.myEmail}
                  />


                  <TextField
                    id="myFirstName"
                    name="myFirstName"
                    fullWidth
                    onChange = {handleChange}
                    placeholder="Tran" label="First Name"
                    value={values['myFirstName']}
                    error={touched.myFirstName &&
                    Boolean(errors.myFirstName)}
                    helperText={
                      touched.myFirstName &&
                      errors.myFirstName}
                  />


                  <TextField
                    id="myMiddleName"
                    name="myMiddleName"
                    fullWidth
                    onChange = {handleChange}
                    placeholder="Minh" label="Middle Name"
                    value={values['myMiddleName']}
                    error={
                      touched.myMiddleName &&
                      Boolean(errors.myMiddleName)}
                    helperText={
                      touched.myMiddleName &&
                      errors.myMiddleName }
                  />


                  <TextField
                    id="myLastName"
                    name="myLastName"
                    fullWidth
                    onChange = {handleChange}
                    placeholder="Hung"
                    label="Last Name"
                    value={values['myLastName']}
                    error={
                      touched.myLastName &&
                      Boolean(errors.myLastName)}
                    helperText={
                      touched.myLastName &&
                      errors.myLastName }
                  />

                  <TextField
                    id="myBirthday"
                    label="Birthday"
                    type="date"
                    defaultValue = {initialValues['myBirthday']}
                    onChange = {handleChange}
                    error={
                      touched.myBirthday &&
                      Boolean(errors.myBirthday)}
                    helperText={
                      touched.myBirthday &&
                      errors.myBirthday }
                  />


                  <TextField
                    id="myIDCard"
                    name="myIDCard"
                    fullWidth
                    onChange = {handleChange}
                    placeholder="206123456"
                    label="ID Card"
                    value={values['myIDCard']}
                    error={
                      touched.myIDCard &&
                      Boolean(errors.myIDCard)}
                    helperText={
                      touched.myIDCard &&
                      errors.myIDCard }
                  />

                  <TextField
                    id="myPhoneNumber"
                    name="myPhoneNumber"
                    fullWidth
                    onChange = {handleChange}
                    placeholder="0935123456" label="Phone number"
                    value={values['myPhoneNumber']}
                    error={
                      touched.myPhoneNumber &&
                      Boolean(errors.myPhoneNumber)}
                    helperText={
                      touched.myPhoneNumber &&
                      errors.myPhoneNumber }
                  />

                  <TextField
                    id="myMonthlySaving"
                    name="myMonthlySaving"
                    fullWidth
                    onChange = {handleChange}
                    placeholder="10000000" label="Monthly Saving"
                    value={values['myMonthlySaving']}
                    error={
                      touched.myMonthlySaving &&
                      Boolean(errors.myMonthlySaving)}
                    helperText={
                      touched.myMonthlySaving &&
                      errors.myMonthlySaving }
                  />

                  <NextButton />
                </Form>
              </>
            );
          }
        }
      </Formik>
    );
  }
}

InsuranceProfile.propTypes = {
  children: PropTypes.any,
  onUpdateData: PropTypes.func,
  step: PropTypes.number,
};

export default InsuranceProfile;

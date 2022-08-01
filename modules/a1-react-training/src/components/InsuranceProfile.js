import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import "yup-phone";
import { getDefaultString, getDefaultDate } from "../utils";
import * as VALIDATOR_MSG from "../constants/formValidationMessage";

import * as FORM_LABELS from "../constants/formLabels";

const InsuranceProfileSchema = Yup.object().shape({
  myFirstName: Yup.string()
    .min(2, VALIDATOR_MSG.FIRST_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.FIRST_NAME_TOO_LONG)
    .required(VALIDATOR_MSG.REQUIRED),
  myMiddleName: Yup.string()
    .min(2, VALIDATOR_MSG.MIDDLE_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.MIDDLE_NAME_TOO_LONG)
    .optional(),
  myLastName: Yup.string()
    .min(2, VALIDATOR_MSG.LAST_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.LAST_NAME_TOO_LONG)
    .required(VALIDATOR_MSG.REQUIRED),
  myEmail: Yup.string()
    .email(VALIDATOR_MSG.EMAIL_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
  myBirthday: Yup.date(),
  myIDCard: Yup.number()
    .typeError(VALIDATOR_MSG.ID_CARD_DIGIT_ONLY)
    .integer(VALIDATOR_MSG.ID_CARD_DIGIT_ONLY)
    .min(99999999, VALIDATOR_MSG.ID_CARD_INVALID)
    .max(999999999999, VALIDATOR_MSG.ID_CARD_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
  myPhoneNumber: Yup.string()
    .required(VALIDATOR_MSG.REQUIRED)
    .min(9, VALIDATOR_MSG.PHONE_INVALID),
  myMonthlySaving: Yup.number()
    .typeError(VALIDATOR_MSG.MONTHLY_SAVING_DIGIT_ONLY)
    .moreThan(0, VALIDATOR_MSG.MONTHLY_SAVING_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
});

class InsuranceProfile extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          myEmail: getDefaultString(this.props.insuranceProfile.myEmail),
          myFirstName: getDefaultString(
            this.props.insuranceProfile.myFirstName
          ),
          myMiddleName: getDefaultString(
            this.props.insuranceProfile.myMiddleName
          ),
          myLastName: getDefaultString(this.props.insuranceProfile.myLastName),
          step: getDefaultString(this.props.step + 1),
          myBirthday: new Date(
            getDefaultDate(this.props.insuranceProfile.myBirthday)
          )
            .toISOString()
            .split("T")[0],
          myIDCard: getDefaultString(this.props.insuranceProfile.myIDCard),
          myPhoneNumber: getDefaultString(
            this.props.insuranceProfile.myPhoneNumber
          ),
          myMonthlySaving: getDefaultString(
            this.props.insuranceProfile.myMonthlySaving
          ),
        }}
        validateOnChange="true"
        validationSchema={InsuranceProfileSchema}
        onSubmit={(value, action) => {
          const submitValue = Object.assign({}, value);
          delete submitValue.step;
          this.props.onUpdateData(submitValue, value.step);
        }}
      >
        {(args) => {
          const { errors, touched, values, handleChange, initialValues } = args;
          return (
            <>
              <h1>{this.props.step} Insurance Profile</h1>
              <Form>
                <div className="hidden-element">
                  <TextField id="step" name="step" value={values["step"]} />
                </div>
                <TextField
                  fullWidth
                  onChange={handleChange}
                  id="myEmail"
                  name="myEmail"
                  placeholder="hung.tran@codeenginestudio.com"
                  type="myEmail"
                  label={FORM_LABELS.EMAIL}
                  value={values["myEmail"]}
                  error={touched.myEmail && Boolean(errors.myEmail)}
                  helperText={touched.myEmail && errors.myEmail}
                />
                <TextField
                  id="myFirstName"
                  name="myFirstName"
                  fullWidth
                  onChange={handleChange}
                  placeholder="Tran"
                  label={FORM_LABELS.FIRST_NAME}
                  value={values["myFirstName"]}
                  error={touched.myFirstName && Boolean(errors.myFirstName)}
                  helperText={touched.myFirstName && errors.myFirstName}
                />
                <TextField
                  id="myMiddleName"
                  name="myMiddleName"
                  fullWidth
                  onChange={handleChange}
                  placeholder="Minh"
                  label={FORM_LABELS.MIDDLE_NAME}
                  value={values["myMiddleName"]}
                  error={touched.myMiddleName && Boolean(errors.myMiddleName)}
                  helperText={touched.myMiddleName && errors.myMiddleName}
                />
                <TextField
                  id="myLastName"
                  name="myLastName"
                  fullWidth
                  onChange={handleChange}
                  placeholder="Hung"
                  label={FORM_LABELS.LAST_NAME}
                  value={values["myLastName"]}
                  error={touched.myLastName && Boolean(errors.myLastName)}
                  helperText={touched.myLastName && errors.myLastName}
                />
                <TextField
                  id="myBirthday"
                  label={FORM_LABELS.BIRTHDAY}
                  type="date"
                  defaultValue={initialValues["myBirthday"]}
                  onChange={handleChange}
                  error={touched.myBirthday && Boolean(errors.myBirthday)}
                  helperText={touched.myBirthday && errors.myBirthday}
                />
                <TextField
                  id="myIDCard"
                  name="myIDCard"
                  fullWidth
                  onChange={handleChange}
                  placeholder="206123456"
                  label={FORM_LABELS.ID_CARD}
                  value={values["myIDCard"]}
                  error={touched.myIDCard && Boolean(errors.myIDCard)}
                  helperText={touched.myIDCard && errors.myIDCard}
                />
                <TextField
                  id="myPhoneNumber"
                  name="myPhoneNumber"
                  fullWidth
                  onChange={handleChange}
                  placeholder="0935123456"
                  label={FORM_LABELS.PHONE_NUMBER}
                  value={values["myPhoneNumber"]}
                  error={touched.myPhoneNumber && Boolean(errors.myPhoneNumber)}
                  helperText={touched.myPhoneNumber && errors.myPhoneNumber}
                />
                <TextField
                  id="myMonthlySaving"
                  name="myMonthlySaving"
                  fullWidth
                  onChange={handleChange}
                  placeholder="10000000"
                  label={FORM_LABELS.MONTHLY_SAVING}
                  value={values["myMonthlySaving"]}
                  error={
                    touched.myMonthlySaving && Boolean(errors.myMonthlySaving)
                  }
                  helperText={touched.myMonthlySaving && errors.myMonthlySaving}
                />
                {this.props.children}
              </Form>
            </>
          );
        }}
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

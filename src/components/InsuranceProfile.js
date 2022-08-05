import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import TextField from "@material-ui/core/TextField";

import * as FORM_LABELS from "../constants/formLabels";

import getInsuranceProfileInitializeValue, {
  INSURANCE_PROFILE_SCHEMA,
} from "../constants/insuranceProfileSchema";

function InsuranceProfile(props) {
  return (
    <Formik
      initialValues={getInsuranceProfileInitializeValue(props)}
      validateOnChange="true"
      validationSchema={INSURANCE_PROFILE_SCHEMA}
      onSubmit={(value, action) => {
        const submitValue = Object.assign({}, value);
        delete submitValue.step;
        props.onUpdateData(submitValue, value.step);
      }}
    >
      {(args) => {
        const { errors, touched, values, handleChange, initialValues } = args;
        return (
          <>
            <h1>{props.step} Insurance Profile</h1>
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
              {props.children}
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

InsuranceProfile.propTypes = {
  children: PropTypes.any,
  onUpdateData: PropTypes.func,
  step: PropTypes.number,
};

export default InsuranceProfile;

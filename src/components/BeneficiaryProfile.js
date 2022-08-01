import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import * as FORM_LABELS from "../constants/formLabels";
import getBeneficiaryProfileInitializeValue, {
  BENEFICIARY_PROFILE_SCHEMA,
} from "../constants/BeneficiaryProfileSchema";

function BeneficiaryProfile(props) {
  return (
    <Formik
      initialValues={getBeneficiaryProfileInitializeValue(props)}
      validateOnChange="true"
      validationSchema={BENEFICIARY_PROFILE_SCHEMA}
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
            <h1>{props.step} Beneficiary Profile</h1>
            <Form>
              <div className="hidden-element">
                <TextField id="step" name="step" value={values["step"]} />
              </div>

              <TextField
                fullWidth
                onChange={handleChange}
                id="hisEmail"
                name="hisEmail"
                placeholder="hung.tran@codeenginestudio.com"
                type="hisEmail"
                label={FORM_LABELS.EMAIL}
                value={values["hisEmail"]}
                error={touched.hisEmail && Boolean(errors.hisEmail)}
                helperText={touched.hisEmail && errors.hisEmail}
              />

              <TextField
                id="hisFirstName"
                name="hisFirstName"
                fullWidth
                onChange={handleChange}
                placeholder="Tran"
                label={FORM_LABELS.FIRST_NAME}
                value={values["hisFirstName"]}
                error={touched.hisFirstName && Boolean(errors.hisFirstName)}
                helperText={touched.hisFirstName && errors.hisFirstName}
              />

              <TextField
                id="hisMiddleName"
                name="hisMiddleName"
                fullWidth
                onChange={handleChange}
                placeholder="Minh"
                label={FORM_LABELS.MIDDLE_NAME}
                value={values["hisMiddleName"]}
                error={touched.hisMiddleName && Boolean(errors.hisMiddleName)}
                helperText={touched.hisMiddleName && errors.hisMiddleName}
              />

              <TextField
                id="hisLastName"
                name="hisLastName"
                fullWidth
                onChange={handleChange}
                placeholder="Hung"
                label={FORM_LABELS.LAST_NAME}
                value={values["hisLastName"]}
                error={touched.hisLastName && Boolean(errors.hisLastName)}
                helperText={touched.hisLastName && errors.hisLastName}
              />

              <TextField
                id="hisBirthday"
                label={FORM_LABELS.BIRTHDAY}
                type="date"
                defaultValue={initialValues["hisBirthday"]}
                onChange={handleChange}
                error={touched.hisBirthday && Boolean(errors.hisBirthday)}
                helperText={touched.hisBirthday && errors.hisBirthday}
              />

              <TextField
                id="hisIDCard"
                name="hisIDCard"
                fullWidth
                onChange={handleChange}
                placeholder="206123456"
                label={FORM_LABELS.ID_CARD}
                value={values["hisIDCard"]}
                error={touched.hisIDCard && Boolean(errors.hisIDCard)}
                helperText={touched.hisIDCard && errors.hisIDCard}
              />

              <TextField
                id="hisPhoneNumber"
                name="hisPhoneNumber"
                fullWidth
                onChange={handleChange}
                placeholder="0935123456"
                label={FORM_LABELS.PHONE_NUMBER}
                value={values["hisPhoneNumber"]}
                error={touched.hisPhoneNumber && Boolean(errors.hisPhoneNumber)}
                helperText={touched.hisPhoneNumber && errors.hisPhoneNumber}
              />

              <TextField
                id="hisRelationshipWithMe"
                name="hisRelationshipWithMe"
                fullWidth
                onChange={handleChange}
                placeholder={FORM_LABELS.RELATIONSHIP_WITH_ME_PLH}
                label={FORM_LABELS.RELATIONSHIP_WITH_ME}
                value={values["hisRelationshipWithMe"]}
                error={
                  touched.hisRelationshipWithMe &&
                  Boolean(errors.hisRelationshipWithMe)
                }
                helperText={
                  touched.hisRelationshipWithMe && errors.hisRelationshipWithMe
                }
              />
              {props.children}
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

BeneficiaryProfile.propTypes = {
  children: PropTypes.any,
  onUpdateData: PropTypes.func,
  step: PropTypes.number,
  beneficiaryProfile: PropTypes.object,
};

export default BeneficiaryProfile;

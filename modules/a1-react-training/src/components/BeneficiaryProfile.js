import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import TextField from "@material-ui/core/TextField";
import "yup-phone";
import { getDefaultString, getDefaultDate } from "../utils";
import * as VALIDATOR_MSG from "../constants/formValidationMessage";

const BeneficiaryProfileSchema = Yup.object().shape({
  hisFirstName: Yup.string()
    .min(2, VALIDATOR_MSG.FIRST_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.FIRST_NAME_TOO_LONG)
    .required(VALIDATOR_MSG.REQUIRED),
  hisMiddleName: Yup.string()
    .min(2, VALIDATOR_MSG.MIDDLE_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.MIDDLE_NAME_TOO_LONG)
    .optional(),
  hisLastName: Yup.string()
    .min(2, VALIDATOR_MSG.LAST_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.LAST_NAME_TOO_LONG)
    .required(VALIDATOR_MSG.REQUIRED),
  hisEmail: Yup.string()
    .email(VALIDATOR_MSG.EMAIL_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
  hisBirthday: Yup.date(),
  hisIDCard: Yup.number()
    .typeError(VALIDATOR_MSG.ID_CARD_DIGIT_ONLY)
    .integer(VALIDATOR_MSG.ID_CARD_DIGIT_ONLY)
    .min(99999999, VALIDATOR_MSG.ID_CARD_INVALID)
    .max(999999999999, VALIDATOR_MSG.ID_CARD_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
  hisPhoneNumber: Yup.string()
    .required(VALIDATOR_MSG.REQUIRED)
    .min(9, VALIDATOR_MSG.PHONE_INVALID),
  hisMonthlySaving: Yup.number()
    .typeError(VALIDATOR_MSG.MONTHLY_SAVING_DIGIT_ONLY)
    .moreThan(0, VALIDATOR_MSG.MONTHLY_SAVING_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
  hisRelationshipWithMe: Yup.string().required(VALIDATOR_MSG.REQUIRED),
});

class BeneficiaryProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  decreaseStep = () => {
    this.state.onUpdateData({ step: this.state.step - 1 });
  };

  render() {
    return (
      <Formik
        initialValues={{
          hisEmail: getDefaultString(this.state.hisEmail),
          hisFirstName: getDefaultString(this.state.hisFirstName),
          hisMiddleName: getDefaultString(this.state.hisMiddleName),
          hisLastName: getDefaultString(this.state.hisLastName),
          step: getDefaultString(this.state.step + 1),
          hisBirthday: new Date(getDefaultDate(this.state.hisBirthday))
            .toISOString()
            .split("T")[0],
          hisIDCard: getDefaultString(this.state.hisIDCard),
          hisPhoneNumber: getDefaultString(this.state.hisPhoneNumber),
          hisMonthlySaving: getDefaultString(this.state.hisMonthlySaving),
          hisRelationshipWithMe: getDefaultString(
            this.state.hisRelationshipWithMe
          ),
        }}
        validateOnChange="true"
        validationSchema={BeneficiaryProfileSchema}
        onSubmit={(value, action) => {
          this.state.onUpdateData(value);
        }}
      >
        {(args) => {
          const { errors, touched, values, handleChange, initialValues } = args;
          return (
            <>
              <h1>Beneficiary Profile</h1>
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
                  label="Email"
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
                  label="First Name"
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
                  label="Middle Name"
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
                  label="Last Name"
                  value={values["hisLastName"]}
                  error={touched.hisLastName && Boolean(errors.hisLastName)}
                  helperText={touched.hisLastName && errors.hisLastName}
                />

                <TextField
                  id="hisBirthday"
                  label="Birthday"
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
                  label="ID Card"
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
                  label="Phone number"
                  value={values["hisPhoneNumber"]}
                  error={
                    touched.hisPhoneNumber && Boolean(errors.hisPhoneNumber)
                  }
                  helperText={touched.hisPhoneNumber && errors.hisPhoneNumber}
                />

                <TextField
                  id="hisMonthlySaving"
                  name="hisMonthlySaving"
                  fullWidth
                  onChange={handleChange}
                  placeholder="10000000"
                  label="Monthly Saving"
                  value={values["hisMonthlySaving"]}
                  error={
                    touched.hisMonthlySaving && Boolean(errors.hisMonthlySaving)
                  }
                  helperText={
                    touched.hisMonthlySaving && errors.hisMonthlySaving
                  }
                />
                <TextField
                  id="hisRelationshipWithMe"
                  name="hisRelationshipWithMe"
                  fullWidth
                  onChange={handleChange}
                  placeholder="My son"
                  label="Relationship with me"
                  value={values["hisRelationshipWithMe"]}
                  error={
                    touched.hisRelationshipWithMe &&
                    Boolean(errors.hisRelationshipWithMe)
                  }
                  helperText={
                    touched.hisRelationshipWithMe &&
                    errors.hisRelationshipWithMe
                  }
                />

                <PreviousButton decreaseStep={this.decreaseStep} />
                <NextButton />
              </Form>
            </>
          );
        }}
      </Formik>
    );
  }
}

BeneficiaryProfile.propTypes = {
  children: PropTypes.any,
  onUpdateData: PropTypes.func,
  step: PropTypes.number,
};

export default BeneficiaryProfile;

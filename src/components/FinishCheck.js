import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form } from "formik";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { getDefaultBoolean } from "../utils";

import * as FORM_LABELS from "../constants/formLabels";

function FinishCheck(props) {
  return (
    <Formik
      initialValues={{
        isAgreeTerm: getDefaultBoolean(props.finishCheck, "isAgreeTerm"),
        step: props.step + 1,
      }}
      validateOnChange="true"
      onSubmit={(value, action) => {
        const submitValue = Object.assign({}, value);
        delete submitValue.step;
        props.onUpdateData(submitValue, value.step);
      }}
    >
      {(args) => {
        const { errors, touched, values, handleChange } = args;
        return (
          <>
            <h1>{props.step} Finish Profile</h1>

            <Form>
              <div className="hidden-element">
                <TextField id="step" name="step" value={values["step"]} />
              </div>
              Please see the detailed contract <a href="#">here</a>
              <br></br>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values["isAgreeTerm"]}
                    onChange={handleChange}
                    id="isAgreeTerm"
                    color="primary"
                    required={true}
                  />
                }
                label={FORM_LABELS.AGREE_TERMS}
              />
              <br></br>
              {props.children}
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

FinishCheck.propTypes = {
  children: PropTypes.any,
  step: PropTypes.number,
  finishCheck: PropTypes.object,
};

export default FinishCheck;
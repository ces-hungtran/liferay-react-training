import React from "react";
import PropTypes from "prop-types";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form } from "formik";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { getDefaultBoolean } from "../utils";

class FinishCheck extends React.Component {
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
          isAgreeTerm: getDefaultBoolean(this.state.isAgreeTerm),
          step: this.state.step + 1,
        }}
        validateOnChange="true"
        onSubmit={(value, action) => {
          this.state.onUpdateData(value);
        }}
      >
        {(args) => {
          const { errors, touched, values, handleChange } = args;
          return (
            <>
              <h1>Finish Profile</h1>

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
                  label={
                    "I agree to submit my information to the " +
                    "Insurance Company after checking the online contract"
                  }
                />
                <br></br>
                <PreviousButton decreaseStep={this.decreaseStep} />
                <NextButton text="Finish" />
              </Form>
            </>
          );
        }}
      </Formik>
    );
  }
}

FinishCheck.propTypes = {
  children: PropTypes.any,
};

export default FinishCheck;

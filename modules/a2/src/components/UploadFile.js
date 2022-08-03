import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import { Formik } from "formik";
import HeaderMatching from "./HeaderMatching";
import { getOneProduct } from "../services/action";

function UploadFile(props) {
  const [state, setState] = useState({
    file: "",
    fileContent: "",
    loading: false,
  });

  useEffect(() => {
    if (state.loading === false) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setState({
        ...state,
        loading: false,
        fileContent: reader.result,
        file: "",
      });
    };

    if (state.file) {
      reader.readAsText(state.file);
    }
  }, [state.loading, state.file]);

  if (state.loading) {
    return <h1>Loading...</h1>;
  }
  if (state.fileContent) {
    return <HeaderMatching {...state} />;
  }
  const formikProps = {
    initialValues: {
      uploadCSV: "",
      uploadCSVInputBox: "",
    },
    validateOnBlur: true,
    validateOnchange: true,

    onSubmit: async (values, action) => {
      setState({ ...state, file: values["file"], loading: true });
    },
  };

  return (
    <Formik {...formikProps}>
      {(props) => {
        return (
          <>
            <form>
              <Button id="uploadCSV" variant="contained" component="label">
                Upload CSV file
                <input
                  value={props.values["uploadCSVInputBox"]}
                  onChange={(event) => {
                    props.setFieldValue("file", event.currentTarget.files[0]);
                    props.handleChange(event);
                  }}
                  id="uploadCSVInputBox"
                  hidden
                  accept=".csv"
                  multiple
                  type="file"
                />
              </Button>

              <Button onClick={props.handleSubmit} type="submit">
                Submit
              </Button>
            </form>
          </>
        );
      }}
    </Formik>
  );
}

export default UploadFile;

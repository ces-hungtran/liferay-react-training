import React from "react";
import Button from "@mui/material/Button";

import { Formik } from "formik";
import HeaderMatching from "./HeaderMatching";

class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "" };
  }
  renderFileContent = () => {
    return <h1>xxx</h1>;
    // return <HeaderMatching {...this.state} />;
  };

  render() {
    // if (this.state.loading) {
    return <h1>Loading...</h1>;
    // }
    // if (this.state.fileContent) {
    //   return this.renderFileContent();
    // }
    // const formikProps = {
    //   initialValues: {
    //     uploadCSV: "",
    //     uploadCSVInputBox: "",
    //   },
    //   validateOnBlur: true,
    //   validateOnchange: true,

    //   onSubmit: async (values, action) => {
    //     console.log("values", values);
    //     this.setState({ file: values["filehxx"] });

    //     this.setState({ loading: true }, () => {
    //       const reader = new FileReader();
    //       reader.onloadend = () => {
    //         this.setState({
    //           loading: false,
    //           fileContent: reader.result,
    //         });
    //       };
    //       reader.readAsText(values["filehxx"]);
    //     });
    //   },
    // };

    // return (
    //   <Formik {...formikProps}>
    //     {(props) => {
    //       return (
    //         <>
    //           <form>
    //             <Button id="uploadCSV" variant="contained" component="label">
    //               Upload CSV file
    //               <input
    //                 value={props.values["uploadCSVInputBox"]}
    //                 onChange={(event) => {
    //                   console.log("hxx file", event.currentTarget.files[0]);
    //                   props.setFieldValue(
    //                     "filehxx",
    //                     event.currentTarget.files[0]
    //                   );
    //                   props.handleChange(event);
    //                 }}
    //                 id="uploadCSVInputBox"
    //                 hidden
    //                 accept=".csv"
    //                 multiple
    //                 type="file"
    //               />
    //             </Button>

    //             <Button onClick={props.handleSubmit} type="submit">
    //               submit hxx
    //             </Button>
    //           </form>
    //         </>
    //       );
    //     }}
    //   </Formik>
    // );
  }
}

export default UploadFile;

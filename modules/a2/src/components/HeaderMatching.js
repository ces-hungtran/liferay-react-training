import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ProductImportingProgress from "./ProductImportingProgress";
import InputLabel from "@mui/material/InputLabel";

import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { getOneProduct } from "../services/action";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import * as yup from "yup";

import { useFormik } from "formik";

const validationSchema = yup.object({});

function HeaderMatching(props) {
  console.log("header matching props", props);
  const [state, setState] = useState({
    loading: true,
    data: null,
    productField: null,
  });

  useEffect(() => {
    // getOneProduct().then((res) => {
    //   const a = Object.keys(res);
    //   a.push("");
    //   a = a.filter((ele) => ele !== undefined && ele !== null);
    //   console.log(a);

    //   setState({ ...state, productField: a });
    // });
    setState({
      ...state,
      productField: ["name", "description", ""],
    });
  }, []);

  function getCSVHeader(fileContent) {
    const headerLine = fileContent.split(/\r?\n|\r|\n/g)[0];
    return headerLine.split(/,/g);
  }

  const headerObj = getCSVHeader(props.fileContent).reduce(
    (ret, ele, i) => ((ret[ele] = i), ret),
    {}
  );

  const formInitValues = Object.keys(headerObj).reduce(
    (ret, val, i) => ((ret[val] = ""), ret),
    {}
  );

  const validateInputResult = (values) => {
    const ret = Object.entries({ ...values }).reduce(
      (a, [k, v]) => (v ? ((a[k] = v), a) : a),
      {}
    );
    delete ret.formInitValues;

    const inputHeader = new Set(Object.values(ret));
    if (inputHeader.size !== state.productField.length - 1) {
      return { error: true, message: "Must select all product field", ret };
    }
    if (inputHeader.size !== Object.keys(ret).length) {
      return {
        error: true,
        message: "A product field can be selected only once.",
        ret,
      };
    }

    return ret;
  };
  const [progress, setProgress] = useState({ value: 0, text: "asdfqwer" });

  const processImportingReducer = (ret, line, index, fieldMap) => {
    if (!line) {
      return;
    }
    const data = line.split(/,/g);
    for (let xx = 0; xx <= 1000000000; xx++) {
      if (xx === 1000000000) {
        console.log("process line ", data);
      }
    }
    // get field, mapfield from filedmap
    const processedData = {};
    Object.keys(fieldMap).forEach((field) => {
      processedData[fieldMap[field]] = data[headerObj[field]];
    });
    // get field data from data, put to ret object
    console.log(index, processedData);
    // ret[index] = processedData;
    setProgress({
      text: JSON.stringify(processedData),
      value:
        ((index + 1.0) * 100) / props.fileContent.split(/\r?\n|\r|\n/g).length,
    });
    return ret;
  };

  const processImporting = (fieldMap) => {
    // create object from file content and selected header
    const ret = [];
    props.fileContent
      .split(/\r?\n|\r|\n/g)
      .reduce(
        (ret, b, c) =>
          setTimeout(processImportingReducer(ret, b, c, fieldMap), 0),
        Array.apply(null, Array(props.fileContent.split(/\r?\n|\r|\n/g).length))
      );

    console.log("result after processing", ret);
  };

  const formikHook = useFormik({
    initialValues: { formInitValues },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const ret = validateInputResult(values);
      if (ret.error) {
        setState({ ...state, errorMessage: ret.message });
      } else {
        processImporting(ret);
      }
    },
  });

  if (!state.productField) {
    return <h1>loading...</h1>;
  }

  const productSelectorOption = state.productField.map((ele) => (
    <MenuItem key={ele} value={ele}>
      {ele}
    </MenuItem>
  ));

  const productSelector = (id, index) => {
    return (
      <div key={"div" + id}>
        <InputLabel key={id + "input-label"}>
          Product filed selector for {id}
        </InputLabel>
        <Select
          key={id}
          name={id}
          value={
            formikHook.values[id]
              ? formikHook.values[id]
              : formikHook.values.formInitValues[id]
          }
          onChange={(e, a) => {
            formikHook.handleChange(e);
          }}
        >
          {productSelectorOption}
        </Select>
      </div>
    );
  };

  const body = Object.keys(headerObj).map((ele) => {
    console.log("headerObj", headerObj);
    return productSelector(ele, headerObj[ele]);
  });

  const displayError = (errorMessage) =>
    errorMessage ? <h1>{errorMessage}</h1> : <></>;
  console.log("hxx line 171");
  return (
    <>
      <ProductImportingProgress
        value={progress.value}
        text={"asdfasdwe" + JSON.stringify(progress.text)}
      />
      {displayError(state.errorMessage)}
      <form onSubmit={formikHook.handleSubmit}>
        {body}
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default HeaderMatching;

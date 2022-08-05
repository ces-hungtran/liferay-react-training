import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ProductImportingProgress from "./ProductImportingProgress";
import InputLabel from "@mui/material/InputLabel";

import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { getOneProduct, addProduct } from "../services/action";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import * as yup from "yup";

import { useFormik } from "formik";

const validationSchema = yup.object({});

function HeaderMatching(props) {
  const [state, setState] = useState({
    loading: true,
    data: null,
    productField: null,
    selectedProps: {},
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

  const headerObj = (() => {
    const headerLine = props.fileContent.split(/\r?\n|\r|\n/g)[0];
    return headerLine.split(/,/g).reduce((ret, ele, i) => {
      ret[ele] = i;
      return ret;
    }, {});
  })();

  const formInitValues = Object.keys(headerObj).reduce(
    (ret, val, i) => ((ret[val] = ""), ret),
    {}
  );

  const validateInputResult = (values) => {
    const inputResult = Object.entries({ ...values }).reduce(
      (a, [k, v]) => (v ? ((a[k] = v), a) : a),
      {}
    );
    delete inputResult.formInitValues;

    const inputHeader = new Set(Object.values(inputResult));
    if (inputHeader.size !== state.productField.length - 1) {
      return {
        error: true,
        message: "Must select all product field",
        data: inputResult,
      };
    }
    if (inputHeader.size !== Object.keys(inputResult).length) {
      return {
        error: true,
        message: "A product field can be selected only once.",
        data: inputResult,
      };
    }
    return inputResult;
  };
  const [progress, setProgress] = useState({
    value: 0,
    text: "click submit to start import",
  });

  const processImportingReducer = (ret, line, index, fieldMap) => {
    if (!line) {
      return ret;
    }
    const data = line.split(/,/g);

    // get field, mapfield from filedmap
    const processedData = {};
    Object.keys(fieldMap).forEach((field) => {
      processedData[fieldMap[field]] = data[headerObj[field]];
    });
    // get field data from data, put to ret object
    console.log(index, processedData);
    ret[index] = processedData;

    return ret;
  };

  const formikHook = useFormik({
    initialValues: { formInitValues },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const inputMappingResult = validateInputResult(values);
      if (inputMappingResult.error) {
        setState({ ...state, errorMessage: inputMappingResult.message });
      } else {
        const fileData = props.fileContent
          .split(/\r?\n|\r|\n/g)
          .reduce(
            (ret, line, index) =>
              processImportingReducer(ret, line, index, inputMappingResult),
            Array(Array(props.fileContent.split(/\r?\n|\r|\n/g).length))
          );
        console.log("data return", fileData);

        fileData.forEach((ele) => {
          const incrementProgressVal = 100.0 / fileData.length;

          addProduct(ele).then(() => {
            setProgress((progress) => ({
              text: ele.name,
              value: progress.value + incrementProgressVal,
            }));
          });
        });
      }
    },
  });

  useEffect(() => {
    if (progress.value < 100) {
      return;
    }
    setProgress({
      value: 0,
      text: "succeeded. Click submit to begin import again",
    });
  }, [progress]);

  if (!state.productField) {
    return <h1>loading...</h1>;
  }

  const productSelectorOption = (entry) => {
    return state.productField.map((ele) => {
      let className = "";
      if (
        state.selectedProps &&
        state.selectedProps[ele] &&
        entry != state.selectedProps[ele]
      ) {
        className = "Mui-disabled";
      }
      return (
        <MenuItem key={ele} value={ele} className={className}>
          {ele}
        </MenuItem>
      );
    });
  };

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

            const newSelectedProps = state.selectedProps;
            if (e.target.value === "") {
              const oldAttr = Object.keys(newSelectedProps).filter((ele) => {
                return newSelectedProps[ele] === e.target.name;
              });
              newSelectedProps[oldAttr[0]] = "";
            }
            newSelectedProps[e.target.value] = e.target.name;
            setState({
              ...state,
              selectedProps: newSelectedProps,
            });
          }}
        >
          {productSelectorOption(id)}
        </Select>
      </div>
    );
  };

  const body = Object.keys(headerObj).map((ele) => {
    return productSelector(ele, headerObj[ele]);
  });

  const displayError = (errorMessage) =>
    errorMessage ? <h1>{JSON.stringify(errorMessage)}</h1> : <></>;

  return (
    <>
      <ProductImportingProgress
        value={progress.value}
        text={JSON.stringify(progress.text)}
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

import React from "react";

import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function ProductImportingProgress(props) {
  if (props.value == 0) {
    return <h1>{props.text}</h1>;
  }
  return (
    <div>
      <LinearProgress variant="determinate" {...props} />
      <Typography
        variant="body2"
        color="text.secondary"
      >{`processing ${props.text}`}</Typography>
    </div>
  );
}

export default ProductImportingProgress;

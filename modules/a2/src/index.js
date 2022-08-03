import React from "react";
import ReactDOM from "react-dom";

import AppComponent from "./AppComponent";

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
import { createRoot } from "react-dom/client";

export default function main({
  portletNamespace,
  contextPath,
  portletElementId,
}) {
  const container = document.getElementById(portletElementId);
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(
    <AppComponent
      portletNamespace={portletNamespace}
      contextPath={contextPath}
      portletElementId={portletElementId}
    />
  );
}

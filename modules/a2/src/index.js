import React from "react";
import { createRoot } from "react-dom/client";

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
export default function main({
  portletNamespace,
  contextPath,
  portletElementId,
}) {
  const container = document.getElementById(portletElementId);
  const root = createRoot(container);
  root.render(
    <AppComponent
      portletNamespace={portletNamespace}
      contextPath={contextPath}
      portletElementId={portletElementId}
    />
  );
}
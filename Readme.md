export 'routes' (imported as 'routes') was not found in 'react-router-dom' (possible exports: browserrouter, hashrouter, link, memoryrouter, navlink, prompt, redirect, route, router, static route, switch, generate path, match path, usehistory, uselocation, useparams, useroutematch, withrouter)

solution
For the first question, it seems like there may have been an issue with the development server that was resolved by stopping and restarting it. However, the initial issue was related to an attempted import of Route from react-router-dom resulting in an error "Attempted import error: 'Route' is not exported from 'react-router-dom'".

Based on the provided code snippets and package.json, it seems like react-router-dom is correctly installed as a dependency. The issue may be related to importing Route incorrectly.

Instead of importing Route as:

import { BrowserRouter, Route } from 'react-router-dom'

Try importing it as:

import { Route } from 'react-router-dom'

This should resolve the attempted import error.

As for the second question, the issue seems to be related to using Routes instead of Switch and Route. Try changing this code snippet:

import { Switch, Route, Routes } from "react-router-dom";

function Pages() {
  return (
    &lt;Routes&gt;
      &lt;Switch&gt;
        &lt;Route path="/" element={&lt;App /&gt;} /&gt;
        &lt;Route path="*" element={&lt;Whoops404 /&gt;} /&gt;
      &lt;/Switch&gt;
    &lt;/Routes&gt;
  );
}

ReactDOM.render(
  &lt;React.StrictMode&gt;
    &lt;Router&gt;
      &lt;Pages /&gt;
    &lt;/Router&gt;
  &lt;/React.StrictMode&gt;,
  document.getElementById("root")
);
To:

import { Switch, Route } from "react-router-dom";

ReactDOM.render(
  &lt;React.StrictMode&gt;
    &lt;Router&gt;
      &lt;Switch&gt;
        &lt;Route exact path="/" component={App} /&gt;
        &lt;Route path="*" component={Whoops404} /&gt;
      &lt;/Switch&gt;
    &lt;/Router&gt;
  &lt;/React.StrictMode&gt;,
  document.getElementById("root")
);
This should resolve the error message: "export 'routes' (imported as 'routes') was not found in 'react-router-dom' (possible exports: browserrouter, hashrouter, link, memoryrouter, navlink, prompt, redirect, route, router, static route, switch, generate

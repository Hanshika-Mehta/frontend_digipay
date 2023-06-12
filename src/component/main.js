import React from "react";
import { ReactDOM } from "react-dom/client";
import App from "../App";
import "../index.css";
import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="digipay.us.auth0.com"
    clientId="kbBBnlVRLsok7gm8YMasAWYm87ADHokt"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
    <App />
    </AppProvider>
  </Auth0Provider>,
);
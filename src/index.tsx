import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { ApolloProvider } from "@apollo/client";

import reportWebVitals from "./reportWebVitals";
import { App } from "./app/App";
import { history } from "./app/history";

const restLink = new RestLink({
  uri: process.env.REACT_APP_GITHUB_API_URL,
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

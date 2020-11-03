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
  uri: "https://api.github.com/search/repositories",
  headers: {
    Authorization: `token 3d9ca2bd44d45d43323e47837638cbf5a3c484c9`,
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

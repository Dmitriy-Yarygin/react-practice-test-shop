import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Layout from "./routes/Layout";
import Router from "./routes/Router";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
import storeCreator from "./store";

const store = storeCreator(loadState());

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <CssBaseline />
            <Layout>
              <Router />
            </Layout>
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

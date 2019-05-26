import React, { Component } from "react";
import HomeContainer from "./containers/homepage/HomeContainer";
import {Provider} from "react-redux";
import store from "./store/configureStore";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HomeContainer />
        </div>
      </Provider>
    );
  }
}

export default App;

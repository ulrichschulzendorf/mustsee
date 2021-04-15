import React, { Component } from "react";
import MovieResults from "./MovieResults";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <div className="jumbotron">
            <h1>Must See!</h1>
            <p>What you gonna watch?</p>
          </div>
        </div>
        <div className="row">
          <MovieResults />
        </div>
      </div>
    );
  }
}

export default App;

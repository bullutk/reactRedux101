import React, { Component } from 'react';
import './App.css';
import ReduxStyle from './containers/ReduxStyle';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxStyle />
        <img src="https://www.base64-image.de/build/img/mr-base64-482fa1f767.png" className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: {firstname: 'Issa', lastname: 'Issa'},
      company: 'The Bernard Group'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstname} {this.state.name.lastname}. And I work with {this.state.company}
          </p>
          <button onClick={ () => {
            this.setState(() => {
              return {
                name: {firstname: 'Andrew', lastname: 'Xiong'}
              }
            }, () => {})
          }}>
              Change Name
            </button>
        </header>
      </div>
    );
  }
}

export default App;

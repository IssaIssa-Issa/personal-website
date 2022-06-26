import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    console.log('Constructor')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users => this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log(this.state)
      }
      )
      ))
    console.log('Component Did Mount')
  }


  render() {
    console.log('Render')

    const filteredMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    })

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="Search Monster..." onChange={(event) => {
          console.log(event.target.value);
          const searchField = event.target.value.toLocaleLowerCase();

          this.setState(
            () => {
              return { searchField };
          })
        }}/>
        {
          filteredMonster.map( (monster) => {
            return <div key={monster.id}>
              <h1>
                { monster.name }
              </h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;

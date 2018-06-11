import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Jeff', age: 20},
      {name: 'Kate', age: 25}
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 19},
        {name: 'Jeff', age: 20},
        {name: 'Kate', age: 25}
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <button onClick = {this.switchNameHandler.bind(this, 'Catherine')}>Switch Person</button>
      <Person name = "Sam" age = "20">I have no props</Person>
      <Person click = {this.switchNameHandler.bind(this, 'Tom')} name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', null, 'hi'));
  }
}

export default App;

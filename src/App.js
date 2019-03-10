import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed : false
      },
      {
        id:2,
        title: 'Dinner with wife',
        completed : true
      },
      {
        id:3,
        title: 'Metting with boss',
        completed : false
      }
    ]
  }
  render() {
    return (
      <div className="App">
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

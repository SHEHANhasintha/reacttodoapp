import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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

//Toggle Complete
  markComplete = (id) => {
     this.setState({
       todos: this.state.todos.map(todo => {
           if (todo.id === id){
             todo.completed = !todo.completed
           }
           return todo;
         }
        )
     })
  }

//delete props
  del = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

 render() {
    return (

      <div className="App">
      <Header />
      <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} del={this.del}/>
      </div>
    );
  }
}

export default App;

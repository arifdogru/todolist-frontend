// Importing Modules
import React, { Component } from 'react';
import { toDoList } from "../../apis/toDoList";

// Importing React-Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing Components
import Todos from './Todos';
import Header from '../layout/Header';
import AddTodo from './AddTodo';
import About from '../pages/About';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    toDoList().get('/tasks')
      .then(res => {
        console.log("response:",res)
        this.setState({ todos: res.data.result })
      });
  }

  // Toggle Complete
  markComplete = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo._id === id)
            todo.completed = !todo.completed;
          return todo;
        })
      });
  }

  // Delete Todo
  delTodo = (id) => {
    console.log("Gelen id:", id);
    toDoList().delete(`/tasks`, id)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo._id !== id)]}));
  }

  addTodo = (name) => {
    let newTodo = {
      name : name,
      complated : false
    }
    toDoList().post('/tasks', 
      newTodo
    )
      .then(res => {
        console.log(res);
        this.setState({
        todos: [...this.state.todos, res.data.result]
      })
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <Route exact path="/" render={props => ( 
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
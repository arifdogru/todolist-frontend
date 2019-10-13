import React, { Component } from "react";

import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo._id} todo = {todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

// PropTypes


export default Todos;
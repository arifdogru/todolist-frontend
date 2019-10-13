import React, { Component } from 'react';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f5f0e3',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const { _id, name, completed } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, _id ) } checked={ completed ? 'checked': '' }/>{' '}
                    {name}
                    <button onClick={this.props.delTodo.bind(this, _id)} style={{ float: 'right' }}>
                        <i className="fa fa-trash-alt" aria-hidden="true"></i>
                    </button>
                </p>
            </div>
        )
    }
}

// PropTypes



export default TodoItem;
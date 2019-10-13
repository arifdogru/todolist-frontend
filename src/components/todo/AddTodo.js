import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        name: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.name);
        this.setState({ name: '' });
    }

    onChange = (e) => this.setState({ name: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="name"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Task..." 
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style= {{flex: '1'}}
                />
            </form>
        )
    }
}

// PropTypes


export default AddTodo;

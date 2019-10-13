/*
 * @Author: Arif Dogru
 */
import React from "react";
import { connect } from "react-redux";
import "./task.css";
import { toDoList } from "../../apis/toDoList";
import { addTask } from "../../state/actions/index";
import {check_auth_error} from "../util";

class Login extends React.Component {
  state = {
    tasks :[]
  };

  componentDidMount() {
    const { message } = this.props.match.params;
    console.log("Register Message ", message);
    toDoList()
    .get(`/tasks`).then(result => {
      this.setState({ tasks: result.data.result });
      console.log(result.data.result);
    })
    .catch(err => {
     check_auth_error(err.response.status, this.props);
    });

  }

  onListClick=(e)=>{
    console.log("all tasks:", this.state.tasks);
  }

  addTask = (task) => {
    console.log("Add Task ", task);
    
  }


  render() {
    return (

      <div className="row">
      <div className="col-md-12">
        <br />
        <div className="input-group">
          <input
            className="form-control"
            autoFocus={true}
            placeholder="Enter new todo"
          />

        </div>
        <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.addTask}>
              Add
            </button>
          </div>
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.onListClick}>
              List
            </button>
          </div>
      </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: task => dispatch(addTask(task))
  };
}
export default connect(null, mapDispatchToProps)(Login);
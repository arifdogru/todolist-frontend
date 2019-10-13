import React from "react";
import { Link, Redirect } from "react-router-dom";
import { toDoList } from "../../apis/toDoList";


class HeaderAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logout_completed: false,
            change_password: false,
            change_info: false,
            path: "/dashboard",
            name: "",
            type: ""
        }
    }

    componentDidMount() {
        toDoList().get("/menu")
            .then(response => {
                this.setState({menus:response.data.result});
            }).catch(err => {
                console.log("Menu Error ", err);
            });
    }



    render() {
        
        if (this.state.logout_completed) {
            return <Redirect to="/tasks" />
        }

        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    
                <Link className="navbar-brand" to="/dashboard">
                        menu.dashboard
                </Link>
                </nav>
            </div>
        );
    }
}

export default (HeaderAdmin);
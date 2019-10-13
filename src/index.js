import React, { Suspense }  from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Task from "./components/todo/ToDoContainer";
import store from "./state/store";
import { PrivateRoute } from "./components/PrivateRoute";

ReactDOM.render(
  <Provider store={store}>
  <Suspense fallback={(<div>Loading</div>)}>
    <BrowserRouter>
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <PrivateRoute path="/" exact component={Task} />
        <Route path="/tasks" exact component={Task} />
      </div>
    </BrowserRouter>
  </Suspense>
  </Provider>,
  document.querySelector("#root")
);

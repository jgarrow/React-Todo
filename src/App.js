import React, { Component } from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoCard from "./components/TodoComponents/TodoList";

class App extends Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
        super();
        this.state = {
            tasks: []
        };
    }

    onChangeHandler = event => {
        let currentTasksLength = this.state.tasks.length;
        let taskName = event.target.value;

        this.setState({
            tasks: [
                ...this.state.tasks,
                { task: taskName, id: currentTasksLength, completed: false }
            ]
        });
    };

    submitHandler = task => {
        let currentTasksLength = this.state.tasks.length;

        this.setState({
            tasks: [
                ...this.state.tasks,
                { task, id: currentTasksLength, completed: false }
            ]
        });
    };

    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
                <TodoForm submitHandler={this.submitHandler} />
                {this.state.tasks.map(task => (
                    <TodoCard />
                ))}
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import styled from "styled-components";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const Container = styled.div`
    margin: 0 auto;
    width: 80%;
    max-width: 960px;
    text-align: center;
`;

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

    // for input field
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
        console.log("New todo item: ", task);

        this.setState({
            tasks: [
                ...this.state.tasks,
                { task, id: currentTasksLength, completed: false }
            ]
        });
    };

    clearTodoListHandler = () => {
        this.setState({ tasks: [] });
    };

    changeCheckmark = (task, index) => {
        // want to change 'completed' state for task whose check circle is clicked
        task.completed = !task.completed;
        let currentTasks = [...this.state.tasks];
        currentTasks[index] = task;
        // let completedTask = currentTasks.splice(index, 1);
        // currentTasks = currentTasks.concat(completedTask);
        console.log("in changeCheckmark in App.js: ", task);
        // console.log("reordered tasks: ", currentTasks);

        this.setState({
            currentTasks
        });
    };

    render() {
        return (
            <Container>
                <h2>Welcome to your Todo App!</h2>
                <TodoForm
                    submitHandler={this.submitHandler}
                    clearTodoListHandler={this.clearTodoListHandler}
                />
                <TodoList
                    tasks={this.state.tasks}
                    changeCheckmark={this.changeCheckmark}
                />
            </Container>
        );
    }
}

export default App;

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
        const taskName = event.target.value;
        const newTask = {
            task: taskName,
            id: Date.now(),
            completed: false
        };

        this.setState({
            ...this.state,
            tasks: [...this.state.tasks, newTask]
        });
    };

    submitHandler = task => {
        let currentTaskId = Date.now();
        console.log("New todo item: ", task);
        const newTask = {
            task: task,
            id: currentTaskId,
            completed: false
        };

        this.setState({
            ...this.state,
            tasks: [...this.state.tasks, newTask]
        });
    };

    clearTodoListHandler = () => {
        let uncompletedTasks = this.state.tasks.filter(
            task => task.completed === false
        );
        console.log("Uncompleted tasks: ", uncompletedTasks);
        this.setState({ tasks: uncompletedTasks });
    };

    changeCheckmark = (task, index) => {
        // change 'completed' state for task whose check circle is clicked
        task.completed = !task.completed;
        let currentTasks = [...this.state.tasks];
        currentTasks[index] = task;

        this.setState({
            tasks: currentTasks
        });

        // reorder tasks so that completed tasks move to the bottom of the list
        // wait 1 second so that the checkmark animation finishes before reordering
        setTimeout(() => {
            let completedTask = currentTasks.splice(index, 1);
            currentTasks = currentTasks.concat(completedTask);
            console.log("in changeCheckmark in App.js: ", task);
            console.log("reordered tasks: ", currentTasks);

            this.setState({
                tasks: currentTasks
            });
        }, 1000);
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

import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = () => {
        console.log("In submitHandler in TodoForm");
        this.props.submitHandler(this.state.task);
    };

    submitOnPressEnter = event => {
        console.log("in enter keypress handler");
        if (event.key === "Enter") {
            this.props.submitHandler(this.state.task);
        }
    };

    clearTodoListHandler = () => {
        this.props.clearTodoListHandler();
    };

    render() {
        return (
            <div>
                <label htmlFor="task">Add Todo item: </label>
                <input
                    type="text"
                    name="task"
                    placeholder="What do you need to do?"
                    onChange={this.changeHandler}
                    onKeyPress={this.submitOnPressEnter}
                />
                <button onClick={this.submitHandler}>Add to todo list</button>
                <button onClick={this.clearTodoListHandler}>
                    Clear todo list
                </button>
            </div>
        );
    }
}

export default TodoForm;

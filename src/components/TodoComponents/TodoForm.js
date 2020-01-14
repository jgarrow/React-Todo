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
        this.props.submitHandler(this.state.task);
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
                />
                <button onSubmit={this.props.submitHandler}>
                    Add to todo list
                </button>
            </div>
        );
    }
}

export default TodoForm;

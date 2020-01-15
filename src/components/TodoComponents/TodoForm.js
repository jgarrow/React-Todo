import React, { Component } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    flex-flow: column;
    height: 125px;
    justify-content: space-between;
    width: 500px;
    margin: 0 auto;
`;

const Input = styled.input`
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid gray;
    box-sizing: border-box;
    padding: 5px 10px;
    width: 50%;
    margin: 0 auto;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

const Button = styled.button`
    cursor: pointer;
    width: 150px;
    font-size: 1rem;
    box-sizing: border-box;
    padding: 10px 0;
    border-radius: 5px;
    font-family: inherit;

    &:hover {
        background: lightgray;
    }
`;

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = () => {
        this.props.submitHandler(this.state.value);
        this.setState({ value: "" }); // clear input after submitting
    };

    submitOnPressEnter = event => {
        if (event.key === "Enter") {
            this.props.submitHandler(this.state.value);
            this.setState({ value: "" }); // clear input after submitting
        }
    };

    clearTodoListHandler = () => {
        this.props.clearTodoListHandler();
    };

    render() {
        return (
            <FormContainer>
                <label htmlFor="value">Add Todo item: </label>
                <Input
                    type="text"
                    name="value"
                    placeholder="What do you need to do?"
                    value={this.state.value}
                    onChange={this.changeHandler}
                    onKeyPress={this.submitOnPressEnter}
                />
                <ButtonContainer>
                    <Button onClick={this.submitHandler}>
                        Add to todo list
                    </Button>
                    <Button onClick={this.clearTodoListHandler}>
                        Clear todo list
                    </Button>
                </ButtonContainer>
            </FormContainer>
        );
    }
}

export default TodoForm;

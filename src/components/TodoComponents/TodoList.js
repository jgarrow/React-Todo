// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import styled from "styled-components";

const TodoListContainer = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 1.5rem auto;
`;

const TodoItemContainer = styled.div`
    width: 150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 30px 1fr;

    align-items: center;
`;

const Checkmark = styled.svg`
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;

    box-shadow: inset 0px 0px 0px #7ac142;
    animation: ${props =>
        props.completed
            ? `fill 0.4s ease-in-out forwards,
        scale 0.3s ease-in-out 0.1s both`
            : "none"};

    @keyframes scale {
        0%,
        100% {
            transform: none;
        }
        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
    }
    @keyframes fill {
        100% {
            box-shadow: inset 0px 0px 0px 30px #7ac142;
        }
    }
`;

const Circle = styled.circle`
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #7ac142;
    fill: none;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards;

    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }
`;

const Path = styled.path`
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.5s forwards;

    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }
`;

const Todo = ({ task, changeCheckmark }) => {
    console.log("In Todo, task.completed: ", task.completed);
    return (
        <TodoItemContainer>
            {/* credit to: https://jsfiddle.net/Hybrid8287/gtb1avet/1/ */}
            <Checkmark
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                onClick={changeCheckmark}
                completed={task.completed}
            >
                <Circle cx="26" cy="26" r="25" fill="none" />
                <Path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </Checkmark>
            <p>{task.task}</p>
        </TodoItemContainer>
    );
};

const TodoList = ({ tasks, changeCheckmark }) => {
    return (
        <TodoListContainer>
            {tasks.map((task, index) => (
                <Todo
                    key={index}
                    task={task}
                    changeCheckmark={() => changeCheckmark(task, index)}
                />
            ))}
        </TodoListContainer>
    );
};

export default TodoList;

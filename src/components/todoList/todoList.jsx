import React, { useContext } from 'react'
import './todoList.scss'
import Options from '../../icon/options.png'
import AddTodo from '../todo/add-todo'
import { TodoContext } from '../context'

const TodoList = () => {

    let { todo } = useContext(TodoContext);
    let { prog } = useContext(TodoContext);
    let { done } = useContext(TodoContext);

    const plusCard = () => {

    }
    return (
        <div className="big">
            <div className="todoList">Todo
                <img className="options" src={Options} alt="options"/>
                <AddTodo listname = { todo } />
            </div>
            <div className="todoList">In Progress
                <img className="options" src={Options} alt="options"/>
                <AddTodo listname = { prog } />
            </div>
            <div className="todoList">Done
                <img className="options" src={Options} alt="options"/>
                <AddTodo listname = { done } />
            </div>
            <div className="plusCard" onClick={plusCard}>+</div>
        </div>
    )
}

export default TodoList;

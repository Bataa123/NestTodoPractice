import React, { useContext, useEffect } from 'react'
import './todoList.scss'
import Options from '../../icon/options.png'
import ShowTodo from '../todo/show-todo'
import AddTodo from '../todo/add-todo'
import { TodoContext } from '../context'

const TodoList = () => {

    const { todo, prog, done, setTodo, setProg, setDone } = useContext(TodoContext);

    const plusCard = () => {

    }
    return (
        <div className="big">
            <div className="todoList">
                <div className="card">
                    Todo
                    <img className="options" src={Options} alt="options" />
                </div>
                <ShowTodo listname = { todo } />
                <AddTodo listname = { todo } changeFunction = {setTodo} />
                
            </div>
            <div className="todoList">
                <div className="card">
                    In progress
                    <img className="options" src={Options} alt="options" />
                </div>
                <ShowTodo listname = { prog } />
                <AddTodo listname = { prog } changeFunction = {setProg} />
            </div>
            <div className="todoList">
                <div className="card">
                    Done
                    <img className="options" src={Options} alt="options" />
                </div>
                <ShowTodo listname = { done } />
                <AddTodo listname = { done } changeFunction = {setDone} />
            </div>
            <div className="plusCard" onClick={plusCard}>+</div>
        </div>
    )
}

export default TodoList;

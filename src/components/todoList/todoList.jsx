import React from 'react'
import './todoList.scss'
import Options from '../../icon/options.png'

const TodoList = () => {
    const plusCard = () => {

    }
    return (
        <div className="big">
            <div className="todoList">
                <div className="card">
                    Todo
                    <img className="options" src={Options} alt="options" />
                </div>
            </div>
            <div className="todoList">
                <div className="card">
                    In progress
                    <img className="options" src={Options} alt="options" />
                </div>
            </div>
            <div className="todoList">
                <div className="card">
                    Done
                    <img className="options" src={Options} alt="options" />
                </div>
            </div>
            <div className="plusCard" onClick={plusCard}>+</div>
        </div>
    )
}

export default TodoList;

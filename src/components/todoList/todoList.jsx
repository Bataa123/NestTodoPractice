import React from 'react'
import './todoList.scss'
import Options from '../../icon/options.png'

const TodoList = () => {
    const plusCard = () => {

    }
    return (
        <div className="big">
            <div className="todoList">Todo
                <img className="options" src={Options} alt="options"/>
            </div>
            <div className="todoList">In Progress
                <img className="options" src={Options} alt="options"/>
            </div>
            <div className="todoList">Done
                <img className="options" src={Options} alt="options"/>
            </div>
            <div className="plusCard" onClick={plusCard}>+</div>
        </div>
    )
}

export default TodoList;

import React from 'react';

const AddTodo = (props) => {

    let { listname } = props;

    return (
        <div className = 'container'>
            {listname.map((el, i) => {
                return <div className='list' key={i}>{el}</div>
            })}
        </div>
    )
    
    // console.log(data)
    // return (
    // )
}

export default AddTodo;
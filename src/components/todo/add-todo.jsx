import React, { useState } from 'react'

const AddTodo = ({ listname, changeFunction }) => {
    const [text, setText] = useState();

    const newText = () => {
        let array = listname;
        array.push(text)
        changeFunction(array)
        // console.log(listname)
    }
    return (
        <div>
            <button onClick={newText}>Add another card</button>
            <input onChange={(e) => setText(e.target.value)} className='input' />
        </div>
    )
}

export default AddTodo;
import React, { useContext } from 'react';

const AddTodo = () => {
    let tdata = useContext(todo);
    let pdata = useContext(prog);
    let ddata = useContext(done);

    tdata.forEach(el => {
        return (
            <div className='todo'>
                {el}
            </div>
        )
    })
    
    // console.log(data)
    // return (
    // )
}

export default AddTodo;
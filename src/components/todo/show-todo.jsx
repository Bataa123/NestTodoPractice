import React, { useEffect } from 'react';

const ShowTodo = (props) => {

    let { listname } = props;

    useEffect(() => {
        console.log(listname)        
    }, [listname])

    return (
        <div className='container'>
            {listname.map((el, i) => {
                return <div className='list' key={i}>{el}</div>
            })}
        </div>
    )
    // console.log(data)
    // return (
    // )
}

export default ShowTodo;
import React, { createContext, useState } from 'react'

export const TodoContext = createContext({})

export const TodoProvider = ({ children }) => {

    const [todo, setTodo] = useState(['bla', 'bla2', 'bla3']);
    const [prog, setProg] = useState(['bla4', 'bla5', 'bla6']);
    const [done, setDone] = useState(['bla7', 'bla8', 'bla9']);

    return (
        <TodoContext.Provider value={{ setTodo, setProg, setDone, todo, prog, done }}>
            {children}
        </TodoContext.Provider>
    )
}
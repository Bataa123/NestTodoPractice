import React from 'react';
import { TodoProvider } from './components/context'

function App() {
  return (
    <TodoProvider>
      <div className="App">
      </div>
    </TodoProvider>
  );
}

export default App;

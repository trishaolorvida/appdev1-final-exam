// App.js
import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoApp from './TodoApp';

const App = () => {
    return (
        <TodoProvider>
            <TodoApp />
        </TodoProvider>
    );
};

export default App;
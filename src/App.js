import React from "react";
import TodoList from "./components/TodoList";
import './CSS/App.css';

function App() {
    return (
        <div className='todo-app'>
            {/* appeler la TodoList */}
            <TodoList />
        </div>
    );
}

export default App;
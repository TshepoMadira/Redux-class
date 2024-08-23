import logo from './logo.svg';
import './App.css';
import AddtodoItem  from './components/addtodoItem'
import TodoList from './components/todolist'
import { useState } from 'react';
function App() {

  const [todo, setTodo] =  useState ([]) ;

  return (
    <div className="App">
      <AddtodoItem  />
      <TodoList  todo={todo}/>
    
    </div>
  );
}

export default App;

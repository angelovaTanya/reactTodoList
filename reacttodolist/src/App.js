import './App.css';
import { useState } from 'react';
import ToDoItem from './ToDoItem/ToDoItem'

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text) {
        setTodos([...todos, {text, completed: false}]);
        setText('');
    }
  }

  const toggleTodo = index => {
    let newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    let newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <input value={text} onChange={e => setText(e.target.value)} placeholder='Add a todo'/>
      <button onClick={() => addTodo()}>Add todo</button>
      {todos.map((todo, index)=> (
           <ToDoItem key={index} todo={todo} id={index} onToggle={toggleTodo} onDelete={deleteTodo}/>
      ))}
    </div>
  );
}

export default App;

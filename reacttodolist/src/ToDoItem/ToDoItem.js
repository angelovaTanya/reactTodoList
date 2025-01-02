

function ToDoItem({todo, id, onToggle, onDelete}) {
    return (
        <div className={todo.completed ? 'completed' : 'notCompleted'}>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(id)}/>
            <p>{todo.text}</p>
            <button onClick={() => onDelete(id)}> X </button>
        </div>
    );
}

export default ToDoItem;
import React from 'react' 

export function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    }

    const handleDeleteButton = () => {
        deleteTodo(id);
    }

    const handleEditButton = () => {
        editTodo(id);
    }

    return (
        <li>
            {task}
            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
            <button onClick={handleDeleteButton}>Delete</button>
            <button onClick={handleEditButton}>Edit</button>
        </li>
    )
}

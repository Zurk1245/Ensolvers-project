import React from 'react' 
import { Li } from '../Li';
import { ButtonDelete } from '../Button';
import { ButtonEdit } from '../Button';


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
        <Li>
            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
            {task}
            <ButtonEdit onClick={handleEditButton}>Edit</ButtonEdit>
            <ButtonDelete onClick={handleDeleteButton}>Delete</ButtonDelete>
        </Li>
    )
}

import React, { Fragment, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoList  } from './components/TodoList';

export function App() {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Task 1', completed: false, positionOfEdit: undefined},
    ]);

    let positionOfTodoToRemoveTemporarily = useRef();
    console.log(positionOfTodoToRemoveTemporarily);

    const todoTaskRef = useRef();

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const [buttonText, setButtonText] = useState("Add item");
    const changeText = (text) => setButtonText(text);

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;
        if (buttonText === 'Edit item') {
            console.log(positionOfTodoToRemoveTemporarily.current);
            setTodos((prevTodos) => {
                const newArr = prevTodos;
                newArr.splice(positionOfTodoToRemoveTemporarily.current, 0, {id: uuidv4(), task, completed: false , positionOfEdit: undefined});
                return [...newArr];
            });
            changeText("Add item");
            console.log('edit Succesful!');

        } else {
            setTodos((prevTodos) => {
                return [...prevTodos, {id: uuidv4(), task, completed: false, positionOfEdit: undefined }]
            });
        }

       todoTaskRef.current.value = null;
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        const positionOfTodoToDelete = newTodos.indexOf(todo);
        setTodos(newTodos.slice(0, positionOfTodoToDelete).concat(newTodos.slice(positionOfTodoToDelete + 1)));
    }

    

    const editTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        positionOfTodoToRemoveTemporarily.current = newTodos.indexOf(todo);
        todo.positionOfEdit = positionOfTodoToRemoveTemporarily;
        setTodos(newTodos.slice(0, positionOfTodoToRemoveTemporarily.current).concat(newTodos.slice(positionOfTodoToRemoveTemporarily.current + 1)));
        todoTaskRef.current.value = todo.task;
        changeText("Edit item");
    } 

    return(
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
            <input ref={todoTaskRef} type="text" placeholder="New Task"/>
            <button onClick={handleTodoAdd}>{buttonText}</button>
            <div>You have {todos.filter((todo) => !todo.completed).length} tasks remaining</div>
        </Fragment>
    )
}
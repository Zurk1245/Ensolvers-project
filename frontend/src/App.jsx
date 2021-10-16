import React, { Fragment, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoList  } from './components/TodoList';
import { ButtonAdd } from './Button';
import { Input } from './Input';
import { Div } from './Div';
import { H1 } from './Title';

export function App() {
    const [todos, setTodos] = useState([
        //{ id: 1, task: 'Task 1', completed: false },
    ]);

    let positionOfTodoToRemoveTemporarily = useRef();

    const todoTaskRef = useRef();

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const [buttonText, setButtonText] = useState("ADD ITEM");
    const changeText = (text) => setButtonText(text);

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;
        if (buttonText === 'EDIT ITEM') {
            setTodos((prevTodos) => {
                const newArr = prevTodos;
                newArr.splice(positionOfTodoToRemoveTemporarily.current, 0, {id: uuidv4(), task, completed: false});
                return [...newArr];
            });
            changeText("ADD ITEM");
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
        changeText("EDIT ITEM");
    } 



    return(
        <Fragment>
            <Div>
                <H1>TO DO LIST</H1>
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
                <Input ref={todoTaskRef} type="text" placeholder="New Task"/>
                <ButtonAdd onClick={handleTodoAdd}>{buttonText}</ButtonAdd>
                <div>You have {todos.filter((todo) => !todo.completed).length} tasks remaining</div>
            </Div>
            
        </Fragment>
    )
}
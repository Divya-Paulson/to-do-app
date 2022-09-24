import './todo.css';
import CreateNewTask from '../../components/createNewTask';
import TodoList from '../../components/todoList';
import ToDoEditor from '../../components/todoEditor';
import { useState } from 'react'

const Todo = () => {
    const addTodo = (todo) => {
        setTodo(todo);
        setOpen(true);
    };

    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState({});
    const onClose = () => {
        setOpen(false);
    };
    return <div className='todo'>
        <header>TODO App</header>
        <CreateNewTask onAddTodo={ addTodo }></CreateNewTask>
        <TodoList></TodoList>
        <ToDoEditor todo={ todo } open={ open } onClose={ onClose }></ToDoEditor>

    </div>
}

export default Todo;
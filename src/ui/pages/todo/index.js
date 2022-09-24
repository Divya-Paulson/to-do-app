import './todo.css';
import CreateNewTask from '../../components/createNewTask';
import TodoList from '../../components/todoList';
import ToDoEditor from '../../components/todoEditor';
import { useState } from 'react'

const Todo = () => {
    const createTodo = (todo) => {
        setTodo(todo);
        setOpen(true);
    };

    const addTodo = (todo) => {
        setTodoList([...todoList, todo]);
        onClose();
    }


    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState({});
    const [todoList, setTodoList] = useState([]);

    const onClose = () => {
        setOpen(false);
    };
    return <div className='todo'>
        <header>TODO App</header>
        <CreateNewTask onAddTodo={ createTodo }></CreateNewTask>

        <ToDoEditor todo={ todo } open={ open } onClose={ onClose } setTodo={ setTodo } onSaveTodo={ addTodo }></ToDoEditor>
        <TodoList todoList={ todoList }></TodoList>
    </div>
}

export default Todo;
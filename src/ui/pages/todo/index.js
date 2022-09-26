import './todo.css';
import CreateNewTask from '../../components/createNewTask';
import TodoList from '../../components/todoList';
import ToDoEditor from '../../components/todoEditor';
import { useState } from 'react'

const Todo = () => {
    const createTodo = (todo) => {
        setUpdate(-1);
        setTodo(todo);
        setOpen(true);
    };

    const addTodo = (todo) => {
        let newList = [...todoList, todo];
        if (update != -1) {
            newList = [...newList.slice(0, update), todo, ...newList.slice(update + 1, todoList.length)];
        }

        setTodoList(newList);
        onClose();
    }
    const editTodo = (todo, index) => {
        setUpdate(index);
        setTodo(todo);
        setOpen(true);
    }
    const deleteTodo = (index) => {
        let newList = [...todoList.slice(0, index), ...todoList.slice(index + 1, todoList.length)];
        setTodoList(newList);

        onClose();
    }




    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState({});
    const [todoList, setTodoList] = useState([]);
    const [update, setUpdate] = useState(-1);



    const onClose = () => {
        setOpen(false);
    };


    return <div className='todo'>
        <header>TODO App</header>
        <CreateNewTask onAddTodo={ createTodo }></CreateNewTask>

        <ToDoEditor todo={ todo } open={ open } onClose={ onClose } setTodo={ setTodo } onSaveTodo={ addTodo } isUpdate={ update != -1 } ></ToDoEditor>
        <TodoList todoList={ todoList } onEditTodo={ editTodo } onDeleteTodo={ deleteTodo }></TodoList>
    </div>
}

export default Todo;
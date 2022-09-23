import './todo.css';
import TodoEditor from '../../components/todoEditor';
import TodoList from '../../components/todoList';
const addTodo = () => {
    console.log('clicked');
};
const Todo = () => {
    return <div className='todo'>
        <header>TODO App</header>
        <TodoEditor onAddTodo={ addTodo }></TodoEditor>
        <TodoList></TodoList>
    </div>
}

export default Todo;
import './todoList.css';
// import Todo from '../todo'

const TodoList = ({ todoList }) => {
    return <div className='todoList'>
        <div>Todos</div>
        { todoList.map(todo => (
            <div>{ todo.heading }</div>
        )) }
    </div>
}

export default TodoList;
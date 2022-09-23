
import './todoEditor.css';


const TodoEditor = ({ onAddTodo }) => {
    return <div className='todoEditor'>
        <input type='text' placeholder='Add new To-do'></input>
        <button onClick={ onAddTodo }>+</button>

    </div>
}

export default TodoEditor;
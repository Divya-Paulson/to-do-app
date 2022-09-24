import { useState } from 'react';
import './createNewTask.css';

const CreateNewTask = ({ onAddTodo }) => {
    const [toDo, setToDo] = useState({});
    return <div className='createNewTask'>
        <input type='text' onChange={ (e) => { setToDo({ heading: e.target.value }) } } placeholder='Add new To-do'></input>
        <button onClick={ () => {
            onAddTodo(toDo)
        } }>+</button>

    </div>
}

export default CreateNewTask;
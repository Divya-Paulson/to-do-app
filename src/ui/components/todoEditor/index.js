
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { TodoStyle, InputStyle } from './style';


export default function ToDoEditor({ todo, onClose, open, setTodo, onSaveTodo, isUpdate }) {


    return (
        <div>
            <Dialog open={ open } onClose={ onClose }>
                <DialogTitle>Adding New To-Do</DialogTitle>
                <DialogContent>

                    <TodoStyle >
                        <InputStyle value={ todo.heading } type='text' placeholder='Enter the To-do' onChange={ (e) => { setTodo({ heading: e.target.value, date: todo.date, description: todo.description }) } }></InputStyle>
                        <InputStyle value={ todo.date } type='date' onChange={ (e) => { setTodo(Object.assign({}, todo, { date: e.target.value })) } } ></InputStyle>
                        <InputStyle type='text' value={ todo.description } placeholder='description' onChange={ (e) => { setTodo(Object.assign({}, todo, { description: e.target.value })) } }></InputStyle>
                    </TodoStyle>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ onClose }>Cancel</Button>
                    <Button onClick={ () => { onSaveTodo(todo) } }>{ isUpdate ? 'Update' : 'Add' }</Button>
                </DialogActions>
            </Dialog >
        </div >
    );
}


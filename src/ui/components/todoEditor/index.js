
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { TodoStyle, InputStyle } from './style';

export default function ToDoEditor({ todo, onClose, open }) {


    return (
        <div>
            <Dialog open={ open } onClose={ onClose }>
                <DialogTitle>Adding New To-Do</DialogTitle>
                <DialogContent>

                    <TodoStyle >
                        <InputStyle value={ todo.heading } type='text' placeholder='Enter the To-do'></InputStyle>
                        <InputStyle type='date' ></InputStyle>
                        <InputStyle type='text' placeholder='description'></InputStyle>
                    </TodoStyle>

                </DialogContent>
                <DialogActions>
                    <Button onClick={ onClose }>Cancel</Button>
                    <Button onClick={ onClose }>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


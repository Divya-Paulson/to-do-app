

// import Todo from '../todo'

import { Button } from '@mui/material';
import { ListStyle, ItemStyle } from './style';

const TodoList = ({ todoList, onEditTodo, onDeleteTodo }) => {

    return <div className='todoList'>
        <div>Todos</div>
        { todoList.map((todo, index) => (
            <ListStyle >

                <ItemStyle>{ index + 1 }.{ todo.heading }</ItemStyle>
                <ItemStyle>{ todo.date }</ItemStyle>
                <ItemStyle>{ todo.description }</ItemStyle>
                <ItemStyle>
                    <Button onClick={ () => { onEditTodo(todo, index) } }>Edit</Button>
                    <Button onClick={ () => { onDeleteTodo(index) } }>Delete</Button>
                </ItemStyle>

            </ListStyle>

        )) }
    </div>
}

export default TodoList;
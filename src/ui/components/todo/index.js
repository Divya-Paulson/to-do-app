import { TodoStyle, InputStyle } from './todo.style';


const Todo = () => {
    return <TodoStyle >
        <InputStyle type='text' placeholder='Enter the To-do'></InputStyle>
        <InputStyle type='date' ></InputStyle>
        <InputStyle type='text' placeholder='description'></InputStyle>
    </TodoStyle>
}

export default Todo;
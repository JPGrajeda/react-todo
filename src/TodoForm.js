import React  from 'react';
import TextField from '@material-ui/core/TextField';

const TodoForm = props => {

    let { value, onChange, saveTodo } = props;

    return(
        <form onSubmit={ e => {
            e.preventDefault();
            saveTodo();
        }}>
            <TextField
                type='text'
                placeholder="Add todo"
                margin="normal"
                onChange={ onChange }
                value={ value }
            />
        </form>
    );
};

export default TodoForm;
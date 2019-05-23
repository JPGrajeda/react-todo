import React from 'react';

// import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
// import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props) => {
    const { todos, deleteTodo, onChange } = props;

    let todoList = todos.map(function (todo, index) {
         return (
            <ListItem dense button 
                key={index} 
                onClick={ () => onChange(index) }
            >
                <Checkbox 
                    checked={todo.check} 
                />
                <ListItemText primary={todo.description} />
                <ListItemSecondaryAction>
                <IconButton onClick={ () => deleteTodo(index) }>
                    <DeleteIcon  />
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
         )
    });

    return(

        <List>
            {todoList}
        </List>
    );
}


export default TodoList;
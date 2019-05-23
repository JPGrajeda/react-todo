import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Componentes
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const div = {
  width: '50%'
};

const divList = {
  margin: '40px',
  border: '5px solid pink',
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "",
      todos: []
    };
  }


  updateValue = e => {
    this.setState({
      value: e.target.value
    })
  }

  saveTodo = () => {
    const todos = this.state.todos;
    todos.push({check: false , description: this.state.value})
    this.clearValue();
    this.setState({
      todos,
    })
    console.log(this.state.todos);
  }

  deleteTodo = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      todos
    })
  }

  clearValue = () => {
    this.setState({
      value: ""
    })
  }

  onChange = (index) => {
    console.log(index);

    const todos = this.state.todos;
    todos[index].check  = !todos[index].check;
    this.setState({
      todos
    });

  }

  render(){
    return (
      <React.Fragment>
        <Typography variant='h1' align='center'> Todos </Typography>
        
        <Grid container justify="center">
          <Grid item md={1}>
            <TodoForm onChange={ this.updateValue } value={ this.state.value } saveTodo={ this.saveTodo }/>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item md={4}>
            <TodoList todos={ this.state.todos } deleteTodo={ this.deleteTodo } onChange={ this.onChange }/>
          </Grid>
        </Grid>

  
      </React.Fragment>
    );
  }


  
}

export default App;

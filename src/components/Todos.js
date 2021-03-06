import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    
    render() {
        //murag new way sa pag for-each
        //props is ang data gisend
        //this.props.markComplete->kay adto/gipasa sa app.js na location ang data, kung knsa nag gamit sa component 
        return this.props.todos.map( (todo) => (
            <TodoItem key={todo.id} todo={todo} 
                markComplete={this.props.markComplete}
                delTodo = {this.props.delTodo}
                />
        ));
    }
}

//Proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;

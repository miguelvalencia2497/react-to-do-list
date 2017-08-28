import React from 'react';
import ReactDOM from 'react-dom';
import { ToDoItem } from './ToDoItem'
require('./css/index.css');

class ToDoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['watch rick and morty', 'learn react', 'play dota', 'sleep']
    }
    this.deleteThis = this.deleteThis.bind(this);
  }

  deleteThis(item) {
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <ToDoItem item={item} key={index} onDelete={this.deleteThis} />
      );
    }.bind(this));

    return(
      <div id="todo-list">
        <p>Things to do today</p>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoComponent />,
  document.getElementById('todo-wrapper')
);

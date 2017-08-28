import React from 'react';
import ReactDOM from 'react-dom';

class ToDoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['watch rick and morty', 'learn react', 'play dota', 'sleep']
    }
  }



  render() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <li>{item}</li>
      );
    });
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

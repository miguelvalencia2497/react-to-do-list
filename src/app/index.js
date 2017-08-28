import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import { About } from './About';
import { ToDoComponent } from './ToDoComponent';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter history={browserHistory}>
        <div>
          <Route exact path={'/'} component={ToDoComponent}/>
          <Route path={'/about'} component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('todo-wrapper')
);

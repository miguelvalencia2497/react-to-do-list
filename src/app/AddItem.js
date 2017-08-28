import React from 'react';
require ('./css/add-item.css');

export class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
    this.refs.newItem.value = '';
  }

  render() {
    return(
      <form id='todo-form' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='New Todo' required ref='newItem' />
        <input type='submit' value='Just Do It'/>
      </form>
    );
  }
}

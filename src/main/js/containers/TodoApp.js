import _ from 'lodash';
import React from 'react';
import TodoList from '../components/TodoList';

let initialState = [
  {
    id: 1,
    label: 'Eat',
    checked: false
  },
  {
    id: 2,
    label: 'Sleep',
    checked: false
  }
];

let idCounter = 3;

class TodoApp extends React.Component {
  static displayName = 'TodoApp';

  static propTypes = {
    items: React.PropTypes.array
  };

  static defaultProps = {
    items: []
  };

  constructor(props) {
    super(props);
    this.state = {
      items: _.indexBy(_.clone(initialState), 'id')
    };
  }

  handleItemChagne(item) {
    const { items } = this.state;
    items[item.id] = item;
    this.setState({ items });
  }

  handleItemDelete(item) {
    const { items } = this.state;
    delete items[item.id];
    this.setState({ items });
  }

  handleAddItem() {
    const { items } = this.state;
    const id = idCounter++;
    items[id] = {
      id,
      label: 'New Item',
      checked: false
    };
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>TodoApp</h1>
        <TodoList items={_.values(items)}
          onItemChange={(item) => this.handleItemChagne(item)}
          onItemDelete={item => this.handleItemDelete(item)}/>
        <button onClick={() => { this.handleAddItem(); }}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoApp;

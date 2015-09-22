import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
// To optimize use following lines
// const _ = {
//   map: require('lodash/collection/map')
// };

class TodoList extends Component {
  static displayName = 'TodoList';

  static propTypes = {
    items: PropTypes.array,
    onItemChange: PropTypes.func,
    onItemDelete: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onItemChange: Function.prototype, /* noop */
    onItemDelete: Function.prototype /* noop */
  };


  render() {
    const { items } = this.props;

    return (
      <div>
        {
          _.map(items, (item) =>
            <TodoItem
              key={item.id}
              item={item}
              onChange={e => this.props.onItemChange(e)}
              onDelete={e => this.props.onItemDelete(e)} />
          )
        }
      </div>
    );
  }
}

export default TodoList;

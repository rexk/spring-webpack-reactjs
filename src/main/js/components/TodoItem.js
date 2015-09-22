import React, { Component, PropTypes } from 'react';

export default class TodoItem extends Component {
  static displayName = 'TodoItem';

  static propTypes = {
    item: PropTypes.object,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
  };

  static defaultProps = {
    onChange: Function.prototype, /* 아무것도 하지 않음 */
    onDelete: Function.prototype /* noop */
  };

  handleCheckBoxChange() {
    const { item } = this.props;
    const { checked } = item;
    this.props.onChange({ ...item, checked: !checked });
  }

  render() {
    const { item } = this.props;
    const { label, checked } = item;

    return (
      <div>
        <input type='checkbox'
          checked={checked}
          onChange={() => this.handleCheckBoxChange()} />
        <input type='text'
          value={label}
          onChange={(e) => this.props.onChange({ ...item, label: e.target.value })} />
        <button
          onClick={() => this.props.onDelete({ ...item })}>
          Delete
        </button>
      </div>
    )
  }
}

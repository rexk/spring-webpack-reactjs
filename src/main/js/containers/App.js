import React from 'react';
import TodoApp from './TodoApp'
import './App.less';


class App extends React.Component {
  static displayName = 'App';

  render() {
    return (
      <TodoApp />
    );
  }
}

export default App;

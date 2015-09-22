import React from 'react';
import App from './containers/App';

export default function mountApp() {
  const mountNode = document.getElementById('root');
  React.render(
    <App />,
    mountNode,
    function renderCallback(err) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('mounted');
    }
  );
}

mountApp();

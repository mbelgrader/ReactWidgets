import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';

const Panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Tabs panes={Panes} />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Root />, document.getElementById('main'));
});

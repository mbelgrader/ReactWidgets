import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import Clock from './clock';

const Panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

class Root extends React.Component {
  render() {
    return(
      <div className='interactive'>
        <Tabs panes={Panes} />
        <Clock />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Root />, document.getElementById('main'));
});

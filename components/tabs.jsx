import React from 'react';

class Headers extends React.Component {
  render() {
    let selected = this.props.selected;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <span key={index} className={klass}
          onClick={this.props.selectTab.bind(null, index)}>
          {title}{' '}
        </span>
      );
    });

    return (
      <div className='tab-header'>
        {headers}
      </div>
    );
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ selected: num });
  }

  render() {
    let current = this.props.panes[this.state.selected];

    return (
      <div>
        <h1>Tabs</h1>

        <div className='tabs'>
          <Headers
            panes={this.props.panes}
            selected={this.state.selected}
            selectTab={this.selectTab} />

          <div className='content'>
            <p>{current.content}</p>
          </div>

        </div>
      </div>
    );
  }
}

module.exports = Tabs;

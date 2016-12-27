import React from 'react';

class Headers extends React.Component {
  render() {
    let selected = this.props.selected;
    let headers = this.props.panes.map((pane, index) => {
      return (
        <span key={index} onClick={this.props.selectTab.bind(null, index)}>
          {pane.title}{' '}
        </span>
      );
    });

    return (
      <div>
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
        <Headers
          panes={this.props.panes}
          selected={this.state.selected}
          selectTab={this.selectTab} />
        <p>
          {current.content}
        </p>
      </div>
    );
  }
}

module.exports = Tabs;

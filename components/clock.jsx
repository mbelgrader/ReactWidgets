import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  render() {
    let hours = this.state.time.getHours();
    let mins = this.state.time.getMinutes();
    let secs = this.state.time.getSeconds();

    hours = (hours < 10) ? `0${hours}` : `${hours - 12}`;
    mins = (mins < 10) ? `0${mins}` : mins;
    secs = (secs < 10) ? `0${secs}` : secs;

    return (
      <div>
        <h1>Clock</h1>

        <div className='clock'>
          <div className='time'>
            <p>Time: {hours}:{mins}:{secs} PDT</p>
            <p>Date: {this.state.time.toDateString()}</p>
          </div>
        </div>

      </div>
    );
  }
}

module.exports = Clock;

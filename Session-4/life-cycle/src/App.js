import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Initial message',
    };
  }

  componentDidMount() {

    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');

    if (prevState.message !== this.state.message) {
      console.log('Message changed:', this.state.message);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  handleClick = () => {
    this.setState({
      message: 'Updated message',
    });
  };

  render() {
    return (
      <div>
        <h1>React Lifecycle Example</h1>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Update Message</button>
      </div>
    );
  }
}

export default LifecycleExample;

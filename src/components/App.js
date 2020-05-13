import React, { Component } from 'react';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      text: true,
      username: '',
    };
  }

  clickIt() {
    alert('salut ');
    this.setState({
      index: this.state.index + 1,
      text: 'my text',
    });
  }

  variable = 'bv';

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: 'time has passed' });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('updated');
  }

  clickToHide() {
    this.setState({
      text: false,
    });
  }

  componentWillUnmount() {
    alert('unmounted');
  }

  changeThatText = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    const t = 1111;
    const a = () => {
      console.log('aaaaa');
    };
    let header;
    if (this.state.username) {
      header = 'helo, ' + this.state.username;
    } else {
      header = '';
    }
    return (
      <div className='App'>
        <header className='App-header'>
          Learn React {a()}
          {this.variable + t}
        </header>
        <div>this is a test made by {this.state.text} </div>
        <Table index={this.state.index} clickMe={() => this.clickIt()} />
        <Table index={this.state.index + 10} />
        <Table index={this.state.index} clickHide={() => this.clickToHide()} />
        <form>
          <h1>{header}</h1>
          <input type='text' onChange={this.changeThatText}></input>
        </form>
      </div>
    );
  }
}

export default App;

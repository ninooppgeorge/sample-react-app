import React, { Component } from 'react';
import TextField from './components/textfield';
import List from './components/list';

class App extends Component {
  state = {
    listdata: []
  }
  getData(data) {
    let obj = {
      text: data,
      checked: false
    };
    let back = this.state.listdata;
    back.push(obj);
    this.setState({
      listdata: back
    })
  }
  render() {
    return (
      <div className="maincont">
        <TextField passDataFromChild={this.getData.bind(this)} />
        <List data={this.state.listdata} />
      </div>
    );
  }
}

export default App;
